<template>
  <div
    ref="chipsInput"
    class="base-chips-input">
    <!-- TODO: check if really ALL props should be forwarded -->
    <BaseChipsInputField
      ref="baseInput"
      v-model="input"
      v-bind="chipsFieldInputProps"
      :input-type="inputType"
      :add-selected-entry-directly="false"
      :selected-list.sync="selectedListInt"
      :drop-down-list-id="internalId"
      :linked-list-option="activeOption ? activeOption[identifierPropertyName] : null"
      :is-active.sync="chipsInputActive"
      :loadable="allowDynamicDropDownEntries"
      @keydown.enter.prevent="onEnter"
      @keydown.up.down.prevent="onArrowKey"
      @keydown="checkKeyEvent"
      @click-input-field="onInputFocus"
      @clicked-outside="onInputBlur"
      v-on="$listeners">
      <template #below-input>
        <BaseDropDownList
          v-if="chipsInputActive"
          ref="dropDownList"
          :drop-down-options="listInt"
          :active-option.sync="activeOption"
          :selected-option.sync="selectedOption"
          :identifier-property-name="identifierPropertyName"
          :label-property-name="labelPropertyName"
          :list-id="internalId"
          :style="{ 'min-width': dropDownMinWidth }"
          :language="language"
          :drop-down-no-options-info="dropDownNoOptionsInfo"
          class="base-chips-input__drop-down"
          @click.native.stop="closeDropDown"
          @touchstart.native.stop="closeDropDown">
          <template #option="{ option }">
            <span
              v-if="allowUnknownEntries && option[identifierPropertyName] === 'createNew'"
              ref="option"
              :key="option[labelPropertyName]">
              {{ addNewChipText
                ? `${addNewChipText} ${getLangLabel(option[labelPropertyName], true)} ...`
                : `${getI18nTerm('form.Add', -1, {
                  value: getLangLabel(option[labelPropertyName], true),
                })} ...` }}
            </span>
            <template
              v-else-if="option">
              <!-- @slot a slot to provide more advanced drop down entries per default only the `Object[labelPropertyName][?lang]` will be displayed
                @binding {Object} item - the option passed to options list -->
              <slot
                :item="option"
                name="drop-down-entry">
                <!-- SLOT DEFAULT -->
                <span
                  v-if="option[identifierPropertyName]"
                  :key="option[identifierPropertyName]"
                  v-insert-text-as-html="{
                    value: highlightStringMatch
                      ? highlight(getLangLabel(option[labelPropertyName], true))
                      : getLangLabel(option[labelPropertyName], true),
                    interpretTextAsHtml: interpretChipsLabelAsHtml,
                  }" />
              </slot>
            </template>
          </template>
          <template
            #no-options>
            <!-- @slot a slot to customize messages in case of no options present in drop down -->
            <slot
              name="no-options" />
          </template>
        </BaseDropDownList>
        <!-- @slot to add elements below input fields e.g. add drop down -->
        <slot name="below-input" />
      </template>
      <template
        #label-addition>
        <!-- @slot Slot to allow for additional elements on the right side of the label row <div> (e.g. language tabs)). for an example see [BaseChipsInputField](BaseChipsInputField)-->
        <slot name="label-addition" />
      </template>
      <template #pre-input-field>
        <!-- @slot slot to add elements within the form field but in a row before the actual input field. for an example see [BaseChipsInputField](BaseChipsInputField)-->
        <slot name="pre-input-field" />
      </template>
      <template
        #input-field-addition-before>
        <!-- @slot Slot to allow for additional elements in the input field \<div\> (before <input>). for an example see [BaseChipsInputField](BaseChipsInputField)-->
        <slot name="input-field-addition-before" />
      </template>
      <template #input-field-inline-before>
        <!-- @slot to add elements directly inline before the input (contrary to `input-field-addition-before` this does not wrap. for an example see [BaseChipsInputField](BaseChipsInputField)-->
        <slot name="input-field-inline-before" />
      </template>
      <template #input-field-addition-after>
        <!-- @slot for adding elements after input -->
        <slot name="input-field-addition-after" />
      </template>
      <template #post-input-field>
        <!-- @slot for adding elements at the end covering the whole height. for an example see [BaseChipsInputField](BaseChipsInputField)-->
        <slot name="post-input-field" />
        <div
          v-if="!allowMultipleEntries"
          class="base-chips-input__single-dropdown"
          @keydown.enter.stop="chipsInputActive = !chipsInputActive"
          @click.stop="chipsInputActive = !chipsInputActive">
          <BaseIcon
            :class="[
              'base-chips-input__single-dropdown-icon',
              {
                'base-chips-input__single-dropdown-icon-rotated':
                  chipsInputActive,
              },
            ]"
            name="drop-down" />
        </div>
      </template>
      <template #error-icon>
        <!-- @slot use a custom icon instead of standard error/warning icon. for an example see [BaseChipsInputField](BaseChipsInputField).-->
        <slot name="error-icon" />
      </template>
      <template #remove-icon>
        <!-- @slot use a custom icon instead of standard remove icon. for an example see [BaseChipsInputField](BaseChipsInputField). -->
        <slot name="remove-icon" />
      </template>
    </BaseChipsInputField>
  </div>
</template>

<script>
import { createId, highlightText } from '@/utils/utils';
import InsertTextAsHtml from '@/directives/InsertTextAsHtml';
import BaseIcon from '@/components/BaseIcon/BaseIcon';
import { ref } from 'vue';
import { useAnnouncer } from '@/composables/useAnnouncer';
import BaseChipsInputField from '../BaseChipsInputField/BaseChipsInputField';
import i18n from '../../mixins/i18n';
import navigateMixin from '../../mixins/navigateList';

/**
 * Base Chips Input component with drop down and autocomplete functionality
 *
 */

export default {
  name: 'BaseChipsInput',
  components: {
    BaseIcon,
    BaseDropDownList: () => import('@/components/BaseDropDownList/BaseDropDownList').then(m => m.default || m),
    BaseChipsInputField,
  },
  directives: {
    insertTextAsHtml: InsertTextAsHtml,
  },
  mixins: [
    i18n,
    navigateMixin,
  ],
  model: {
    prop: 'selectedList',
    event: 'selected-changed',
  },
  props: {
    /**
     * list of selectable options. needs to be a list with at least an identifier and a label
     *  (properties can be set via `identifierPropertyName` and `labelPropertyName`)
     */
    list: {
      type: Array,
      default: () => [],
    },
    /**
     * list of already selected options, displayed as chips
     *  needs to be a list with at least an identifier and a label
     *  (properties can be set via `identifierPropertyName` and `labelPropertyName`)
     */
    selectedList: {
      type: Array,
      default: () => [],
    },
    /**
     * specify input field type
     * @values text, search
     */
    inputType: {
      type: String,
      default: 'text',
      validator: val => ['text', 'search'].includes(val),
    },
    /**
     * input field label
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * define if label should be visible
     */
    showLabel: {
      type: Boolean,
      default: true,
    },
    /**
     * input field placeholder
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * message displayed when no selectable options are available
     */
    dropDownNoOptionsInfo: {
      type: String,
      default: 'No options available',
    },
    /**
     * define if the user can add an option that is not in the list
     */
    // can the user add Entries that are not available in the vocabulary (selectable list)
    allowUnknownEntries: {
      type: Boolean,
      default: false,
    },
    /**
     * define only a single or multiple options can be selected
     */
    // define if one or several entries can be selected from drop down menu
    allowMultipleEntries: {
      type: Boolean,
      default: true,
    },
    /**
     * define if selectable list options should be fetched every time or if the
     * list passed in the beginning is used
     */
    allowDynamicDropDownEntries: {
      type: Boolean,
      default: false,
    },
    /**
     * this prop was added because there was some action needed to be done before entry was added
     * so this is possible if entry is not added to `selectedList` directly but only in parent
     * component
     */
    addSelectedEntryDirectly: {
      type: Boolean,
      default: true,
    },
    /**
     * option to have the border of the input field not displayed
     */
    showInputBorder: {
      type: Boolean,
      default: true,
    },
    /**
     * if `true` a button with that functionality will be visible
     */
    sortable: {
      type: Boolean,
      default: false,
    },
    /**
     * define if chips should be draggable (currently only available for inline)
     */
    draggable: {
      type: Boolean,
      default: false,
    },
    /**
     * define if entries should always appear linked (-> with grey background)
     */
    alwaysLinked: {
      type: Boolean,
      default: false,
    },
    /**
     * set content for the info box activatable by click.
     * see [BaseHoverBox](BaseHoverBox) for more details
     */
    hoverboxContent: {
      type: Object,
      default: () => ({}),
    },
    /**
     * show spinner to indicate that something is loading
     * (for dynamically fetched entries that need to do backend requests)
     */
    isLoading: {
      type: Boolean,
      default: false,
    },
    /**
     * if sorting is enabled this will be the text shown in the button
     */
    sortText: {
      type: String,
      default: 'Sort A – Z',
    },
    /**
     * if `true` sorting will consider the last string in a label or if a comma is
     * present the string before the comma
     */
    sortName: {
      type: Boolean,
      default: false,
    },
    /**
     * set a language (ISO 639-1)
     */
    language: {
      type: String,
      default: '',
    },
    /**
     * set a chips text for adding a new chip.
     * (alternatively add a `form.Add` value to your localization files)
     * if allowUnknownEntries is true please add this in one form or another!
     */
    addNewChipText: {
      type: String,
      default: '',
    },
    /**
     if field is occuring more then once - set an id
     */
    id: {
      type: String,
      default: '',
    },
    /**
     * specify the object property that should be used as identifier
     */
    identifierPropertyName: {
      type: String,
      default: 'id',
    },
    /**
     * specify the object property that should be used as value to be displayed
     */
    labelPropertyName: {
      type: String,
      default: 'label',
    },
    /**
     * property for special case in component [BaseChipsBelow](BaseChipsBelow) - if `false` in this case chips will
     * not be displayed in the input field
     */
    displayChipsInline: {
      type: Boolean,
      default: true,
    },
    /**
     * mark as required field (currently only used for `aria-required` attribute)
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * mark the form field as invalid and ideally also provide an error message
     * to display below the form field.
     * for an example see [BaseInput](BaseInput)
     */
    invalid: {
      type: Boolean,
      default: false,
    },
    /**
     * set `true` if input field should be disabled.
     * for an example see [BaseInput](BaseInput)
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * add an error message to be displayed below form field if field is invalid.
     * for an example see [BaseInput](BaseInput)
     */
    errorMessage: {
      type: String,
      default: '',
    },
    /**
     * define if error icon should be shown.
     * for an example see [BaseInput](BaseInput)
     */
    showErrorIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * if `true` a remove icon (or a custom icon if slot `remove-icon` is used) will be shown allowing to remove
     * all input at once
     * for an example see [BaseInput](BaseInput)
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * specify additional input field styling
     */
    inputClass: {
      type: String,
      default: '',
    },
    /**
     * set `true` if chip should be editable on click
     *
     * **Caveat**: chips can not be both `draggable` AND `editable` and it can not show
     *  `hoverBoxContent` as soon as it is editable respectively - if both are set `true` edit
     *  functionality takes precedent - chip will not be draggable, `hoverBoxContent` will not
     *  be shown!
     */
    chipsEditable: {
      type: Boolean,
      default: false,
    },
    /**
     * set `true` if dropdown should be closed after selecting an option
     */
    closeDropdownOnOptionSelect: {
      type: Boolean,
      default: false,
    },
    /**
     * this prop gives the option to add assistive text for screen readers
     * properties:
     * **selectedOption**: text read when a selected option is focused (currently only
     *  working for editable chips)
     * **loaderActive**: text that is announced when results are being fetched (prop
     *  `isLoading` is set `true`)
     * **resultsRetrieved**: text that is announced when results were retrieved (drop down
     *  list changed)
     * **optionAdded**: text read when option was added to the selected list. string {label}
     *  could be added to be replaced by the actual chip label (value in [`labelPropertyName`])
     * **optionToRemoveSelected**: text read when option is marked active for removal (by using
     *  backspace in empty input field). string {label} could be added to be replaced
     *  by the actual chip label (value in [`labelPropertyName`])
     * **optionRemoved**: text read when option was removed from the selected list. string {label}
     *  could be added to be replaced by the actual chip label (value in [`labelPropertyName`])
     */
    assistiveText: {
      type: Object,
      default: () => ({
        selectedOption: '',
        loaderActive: 'loading.',
        resultsRetrieved: '{number} options in drop down.',
        optionAdded: 'option {label} added to selected list.',
        optionToRemoveSelected: 'option {label} from selected list marked for removal. Press delete or backspace to remove.',
        optionRemoved: 'option {label} removed.',
      }),
    },
    /**
     * define if selected options chips should come with a remove icon
     */
    chipsRemovable: {
      type: Boolean,
      default: true,
    },
    /**
     * define a default entry
     * will be added when component is mounted and selected list is initially empty
     * properties:
     * **label|*** `string`: the label of the default option - use the property name set via prop `labelPropertyName`
     * **id|*** `string?`: (optional) identifier of the default option - use the property name set via prop `identifierPropertyName`
     */
    defaultEntry: {
      type: [Object, null],
      default: null,
    },
    /**
     * set this flag to `true` to highlight autocomplete option characters that match
     *  the current search input string
     *
     *  **caveat**: setting this variable `true` can lead to XSS attacks. Only use
     *    this prop on trusted content and never on user-provided content.
     */
    highlightStringMatch: {
      type: Boolean,
      default: false,
    },
    /**
     * if `highlightAutocompleteMatch` is set `true`
     *  provide tag names to style the matched characters
     *  (without '<' and '>', e.g. ['b'] for <b>)
     */
    highlightStringTags: {
      type: Array,
      default: () => ([]),
    },
    /**
     * if necessary selected chip text can
     *  be rendered as v-html directive
     *
     *  **caveat**: setting this variable `true` can lead to XSS attacks. Only use
     *    this prop on trusted content and never on user-provided content.
     */
    interpretChipsLabelAsHtml: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    /**
     * set up component reference
     * @type {Ref<UnwrapRef<null|HTMLElement>>}
     */
    const chipsInput = ref(null);
    // use composable to announce screen reader text on actions taken (e.g.
    // add chip to selected list or remove chip
    const { announcement } = useAnnouncer(chipsInput);
    return {
      chipsInput,
      announcement,
    };
  },
  data() {
    return {
      /**
       * the current input field string
       * @type {string}
       */
      input: '',
      /**
       * internal representation of selected options list
       * @type {Object[]}
       */
      selectedListInt: [],
      /**
       * the currently active option, styled with grey background
       * (only if selected by keyboard)
       *
       * @type {number}
       */
      activeOptionIndex: 0,
      /**
       * the currently selected option after mouse click or keyboard enter
       *
       * @type {?Object}
       */
      selectedOption: null,
      /**
       * variable to store state of input field (for drop down handling)
       * @type {boolean}
       */
      chipsInputActive: false,
      /**
       * the minimal width of the drop down element (calculated in js because ? )
       * TODO: above...
       * @type {string}
       */
      dropDownMinWidth: '100%',
      /**
       * the input element
       * @type {HTMLElement}
       */
      inputElem: null,
      /**
       * timeout for drop down options found announcer because otherwise
       * text not read if more than one character entered into input
       * @type {?number}
       */
      timeout: null,
    };
  },
  computed: {
    /**
     * clean props from props not available in ChipsInputField component
     * (e.g. because they are only needed for drop down component)
     */
    chipsFieldInputProps() {
      const newProps = { ...this.$props, id: this.internalId };
      delete newProps.dropDownNoOptionsInfo;
      delete newProps.allowDynamicDropDownEntries;
      delete newProps.addNewChipText;
      // drop down options
      delete newProps.list;
      return newProps;
    },
    /**
     * internal representation of options list, filtered for already selected entries
     * and also handling input string matching with options list in case of
     * no dynamic autocomplete fetching
     * @returns {Object[]}
     */
    listInt() {
      let tempList = [...this.list];
      // if unknown entries are allowed add an "Add InputString ..." as first option
      if (this.allowUnknownEntries && this.input) {
        tempList.unshift({
          [this.labelPropertyName]: this.language ? { [this.language]: this.input } : this.input,
          // add an identifier here as well so this option can be recognized by the inputs
          // `aria-activedescendant` attribute
          [this.identifierPropertyName]: 'createNew',
        });
      }
      // filter entries that were already selected, if no identifier
      // compare by object property
      if (this.selectedListInt && this.selectedListInt.length) {
        tempList = tempList.filter(option => !this.selectedListInt
          .map(selected => (selected[this.identifierPropertyName]
            || selected[this.labelPropertyName]))
          .includes(option[this.identifierPropertyName] || option[this.labelPropertyName]));
      }
      // in case of no dynamic autocomplete fetching match the input string
      // with the options list and only show matching options
      if (this.input && !this.allowDynamicDropDownEntries) {
        // also only return entries matching the input string
        return tempList.filter(option => this.getLangLabel(option[this.labelPropertyName])
          .toLowerCase().includes(this.input.toLowerCase()));
      }
      return tempList;
    },
    /**
     * the currently active option object
     */
    activeOption: {
      /**
       * setter function of activeOption - will set active option index
       * @param {?Object} val - the active option (by hover or arrow key use)
       */
      set(val) {
        this.activeOptionIndex = this.listInt.indexOf(val);
      },
      /**
       * getter function for activeOption - determined by active option index
       * @returns {?Object}
       */
      get() {
        return this.listInt[this.activeOptionIndex];
      },
    },
    internalId() {
      return this.id || createId();
    },
    /**
     * create an object out of prop `highlightStringTags` so it can be
     *  spread into the options of the `highlightText` function
     * @returns {{highlightTags: []}|{}}
     */
    highlightTags() {
      return this.highlightStringTags?.length
        ? { highlightTags: this.highlightStringTags } : {};
    },
  },
  watch: {
    /**
     * if the selected option changed (by click or keybord enter) add
     * it to the list of selected options
     * @param {?Object} val
     */
    selectedOption(val) {
      if (val) {
        this.addSelectedOption(val);
        // if input element was found - focus after chips select
        if (this.inputElem && this.allowMultipleEntries) {
          this.inputElem.focus();
        }
      }
    },
    listInt: {
      /**
       * watch listInt for changes to set the currently active option index
       * accordingly
       * @param {Object[]} val
       */
      handler(val) {
        if (val.length && !this.activeOption) {
          // set first option in list as active option
          this.activeOptionIndex = 0;
        } else if (!val.length && (!this.allowUnknownEntries || !this.input)) {
          this.activeOptionIndex = -1;
        }
        // only set the text when the drop down is actually visible
        // and do not announce the "create {custom entry}..." because it overwrites
        // the loader message and is announced again with the rest of the search results
        // later anyway
        if (this.chipsInputActive
          && !this.isLoading && !this.announcement) {
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          // adding this timeout because with dynamicFetch false the list
          // changes immediately and announcement text is not always read
          this.timeout = setTimeout(() => {
            // check if drop down is still open agin to prevent announcement
            // after option was added (if drop down was closed)
            if (this.chipsInputActive && this.assistiveText.resultsRetrieved) {
              if (val.length) {
                this.announcement = this.assistiveText.resultsRetrieved
                  .replace('{number}', val.length);
              } else {
                this.announcement = this.dropDownNoOptionsInfo;
              }
            }
          }, 300);
        }
      },
      immediate: true,
    },
    list: {
      /**
       * watch list to reset active option index
       * @param {Object[]} val
       */
      handler(val) {
        // if list changed externally - reset index to 0
        this.activeOptionIndex = val.length || (this.allowUnknownEntries && this.input) ? 0 : -1;
      },
      immediate: true,
    },
    selectedList: {
      /**
       * get changes to selectedListInt as soon as selectedList changes
       * @param {Object[]} val
       */
      handler(val) {
        this.selectedListInt = [...val];
      },
      immediate: true,
    },
    /**
     * watch for changes to selectedListInt and propagate to parent if necessary
     * @param {Object[]} val
     */
    selectedListInt(val) {
      if (JSON.stringify(val) !== JSON.stringify(this.selectedList)) {
        this.updateParentSelectedList(val);
      }
    },
    /**
     * input is watched for follow up actions needed after input
     * --> fetch autocomplete entries
     * --> inform parent of input (this however is not needed anymore since
     * $listeners from input are now propagated to parent anyways!)
     * @param {string} val
     */
    input(val) {
      // if dropdown content is dynamic alert parent to fetch new relevant entries (if desired)
      if (this.allowDynamicDropDownEntries) {
        /**
         * if input changed this event is emitted to fetch matching autocomplete options
         * (if allowDynamicDropDownEntries is set true)
         *
         * @event fetch-dropdown-entries
         * @property {string} value - the input string
         * @property {string} type - the `labelPropertyName` that was specified
         */
        this.$emit('fetch-dropdown-entries', { value: val, type: this.labelPropertyName });
      }
    },
    /**
     * watching drop down active to do necessary actions once drop down opens
     * a) to fetch drop down entries for static drop downs on first show only
     * b) to calculate actual drop down width (TODO: do i need this?)
     * c) to inform parent of drop down state changes
     * @param {boolean} val
     */
    chipsInputActive(val) {
      // allow also for static drop down entries to be loaded on first drop down show only
      if (val && !this.allowDynamicDropDownEntries && !this.listInt.length) {
        /**
         * event to fetch drop down entries with changing input
         *
         * @event fetch-dropdown-entries
         * @type { object }
         *
         */
        this.$emit('fetch-dropdown-entries', { value: this.input, type: this.labelPropertyName });
      }
      if (val) {
        // TODO: check again why this is needed bzw. it not sure if it is working
        // properly
        this.calcDropDownMinWidth();
        // reset the active option index to first item
        this.activeOptionIndex = 0;
      }
    },
  },
  mounted() {
    // get the input element(s) and store them for later
    const elems = this.$el.getElementsByTagName('input');
    if (elems && elems.length) {
      [this.inputElem] = elems;
    }

    // add optional default entry to empty selectedList only
    if (this.defaultEntry && !this.selectedList.length) {
      this.selectedListInt.push(this.defaultEntry);
    }
  },
  methods: {
    /** CHIPS (ADDING) FUNCTIONALITIES */

    /**
     * method for adding a selected option to selected option list
     * (remove works via setter - does not need a separate method)
     *
     * @param {Object} selected
     */
    addSelectedOption(selected) {
      // if unknown entries are allowed we need to remove the added
      // id again before pushing it to selectedListInt
      const newSelected = { ...selected };
      if (this.allowUnknownEntries && newSelected[this.identifierPropertyName] === 'createNew') {
        delete newSelected[this.identifierPropertyName];
      }
      if (this.allowMultipleEntries) {
        this.selectedListInt.push(newSelected);
      } else {
        // set the option on first array index (either setting new if empty
        // array or replacing old option)
        this.$set(this.selectedListInt, 0, newSelected);
        // for single select the drop down should close again automatically
        // after choosing the option
        this.chipsInputActive = false;
      }
      // inform parent of the changes
      this.updateParentSelectedList(this.selectedListInt);
      // make sure the assistive text exists
      if (this.assistiveText.optionAdded) {
        // announce the added option to the screen reader
        this.announcement = this.assistiveText.optionAdded
          .replace('{label}', newSelected[this.labelPropertyName]);
      }
      // clear input
      this.input = '';
      // reset selected option
      this.selectedOption = null;
      // remove focus from input if element is single select
      if (!this.allowMultipleEntries) {
        this.chipsInputActive = false;
        this.inputElem.blur();
      }
      // make sure drop down is closed at the end of all variable updates
      setTimeout(() => {
        // optional close dropdown after selection
        this.closeDropDown();
      }, 0);
    },
    /**
     * method for emitting selected list changes to parent
     * (called after adding or deleting an option to / from selected list)
     *
     * @param {Object[]} updatedList - the list that should be emitted in the event
     */
    updateParentSelectedList(updatedList) {
      // only emit if updated list is different from parent list
      if (JSON.stringify(this.selectedList) !== JSON.stringify(updatedList)) {
        /**
         * inform parent of changes to selectedList
         * @event selected-changed
         * @property {Object[]} - the altered selectedList
         */
        this.$emit('selected-changed', [...updatedList]);
      }
    },

    /** INPUT FIELD ACTIVE/INACTIVE HANDLING */

    /**
     * function triggered when input field was clicked
     */
    onInputFocus() {
      this.chipsInputActive = true;
    },
    /**
     * function triggered when click-outside happened
     */
    onInputBlur() {
      this.chipsInputActive = false;
      // if the focus goes to somewhere else on the page - remove input string
      if (this.input && document.activeElement.id !== this.internalId) {
        this.input = '';
      }
    },

    /** KEYBOARD FUNCTIONALITIES */

    /**
     * general function for checking key events like semicolon or tab
     * @param {KeyboardEvent} event - the keydown event
     */
    checkKeyEvent(event) {
      const { key } = event;
      // this should (currently) never be the case (but it was in the past - on closeDropDownOnOptionSelect
      // focus remained but drop down was closed) but just to be safe - set the input active as soon
      // as user enters input
      // TODO: what would happen if user selects an option, focus stays and user copy pastes? (but
      // again - this is currently just hypothetical)
      if (!['Tab', 'Enter', 'Shift'].includes(key)) {
        this.chipsInputActive = true;
      }
      // if user pressed tab and thus input field leaves focus we would want to remove the input string
      // so no confusion is created as to wether this string is part of a search or saved in form
      // so we check for type of key and if input is present
      if (key === 'Tab' && this.input
        // and remove input if
        // there is no other focusable element in the input (like the clear input button)
        && (!this.clearable
          // user is moving focus backwards from input to outside of input field (not from any
          // other element in the input field)
          || (event.shiftKey && event.target.tagName === 'INPUT')
          // user is moving focus from clear input button to outside of the input
          || (this.clearable && !event.shiftKey && event.target.tagName !== 'INPUT'))) {
        // this.chipsInputActive = false;
        this.input = '';
      }
    },
    /**
     * triggered on keydown enter event and will add
     * a selected option
     */
    onEnter() {
      // do nothing if dropdown should be closed on option select, and dropdown is not active
      if (this.closeDropdownOnOptionSelect && !this.chipsInputActive) return;

      // check if there is a currently active option
      if (this.activeOption) {
        this.addSelectedOption(this.activeOption);
      }
    },
    /**
     * event for keydown arrow (up, down) key use
     *
     * @param {KeyboardEvent} event - the keydown event
     */
    onArrowKey(event) {
      // check if the list has any options
      if (this.listInt.length) {
        // if yes trigger the navigate function
        this.activeOption = this.navigate(
          this.listInt,
          event.key === 'ArrowDown',
          this.activeOptionIndex,
          true,
        );
      }
    },

    /** OTHER FUNCTIONALITIES */

    hoverBoxActive(value, entry) {
      /**
       * event emitted on show / hide hoverbox
       *
       * @property {boolean} value - value describing if hoverbox active is true or false
       * @property {Object} option - the option for which the hoverbox was activated
       */
      this.$emit('hoverbox-active', { value, entry });
    },
    /**
     * calculate the minimum width of the drop down element by getting the
     * width of this element
     */
    calcDropDownMinWidth() {
      // get the base input element
      const inputElement = this.$refs.baseInput;
      // see if it exists and has a width - if yes set drop down min width to the same
      if (inputElement && inputElement.$el && inputElement.$el.clientWidth) {
        this.dropDownMinWidth = `${inputElement.$el.clientWidth}px`;
      }
    },
    /**
     * close dropdown
     */
    closeDropDown() {
      // optional close dropdown after selection
      if (this.closeDropdownOnOptionSelect && this.chipsInputActive) {
        this.chipsInputActive = false;
        if (this.inputElem) {
          this.inputElem.blur();
        }
      }
    },
    /**
     * function to highlight characters of a string
     * @param {string} word - the option that should be matched with query string
     * @returns {string} - the string to fill into v-html
     */
    highlight(word) {
      return highlightText({
        word,
        queryString: this.input,
        // this is an empty object if prop `highlightStringTags` was not used
        ...this.highlightTags,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

  .base-chips-input {
    position: relative;

    .base-chips-input__drop-down {
      background: white;
    }

    .base-chips-input__single-dropdown {
      display: flex;
      align-items: center;
      padding: 0 $spacing-small;

      .base-chips-input__single-dropdown-icon {
        transition:  $drop-down-arrow-animation;
        height: $icon-small;
        width: $icon-small;
        flex-shrink: 0;

        &.base-chips-input__single-dropdown-icon-rotated {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
