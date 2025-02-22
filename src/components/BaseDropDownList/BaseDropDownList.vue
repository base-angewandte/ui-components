<template>
  <div
    ref="dropDownContainer"
    :class="['base-drop-down-list__container',
             { 'base-drop-down-list__container-drop-down-style': displayAsDropDown }]"
    class="base-drop-down-list__container">
    <!-- @slot for adding elements before the options list -->
    <slot name="before-list" />
    <ul
      :id="listId"
      ref="dropDownList"
      :style="listBodyStyle"
      :aria-activedescendant="activeOption ? activeOption[identifierPropertyName] : false"
      role="listbox"
      class="base-drop-down-list">
      <template v-for="(option, optionIndex) in dropDownOptions">
        <li
          v-if="optionHasData(option[labelPropertyName])"
          :id="option[identifierPropertyName]"
          ref="option"
          :key="optionIndex"
          :value="valueIsString ? getLangLabel(option[labelPropertyName], true)
            : option[identifierPropertyName]"
          :aria-selected="selectStyled && option[identifierPropertyName] === selectedOption"
          :class="[
            'base-drop-down-list__option',
            { 'base-drop-down-list__option__hover': activeStyled },
            {
              'base-drop-down-list__option__selected': selectStyled
                && option === selectedOption,
            },
            {
              'base-drop-down-list__option__active': activeStyled
                && optionIndex === activeOptionIndex,
            },
            {
              'base-drop-down-list__option__active-custom': useCustomOptionActiveBackgroundColor
                && optionIndex === activeOptionIndex,
            }]"
          role="option"
          tabindex="0"
          @keydown.enter="selected(option)"
          @click.stop="selected(option)"
          @touchstart.stop="">
          <!-- @slot a slot to customize every single option (e.g. display of information other than `[valuePropertyName]`)
            @binding {Object} option - the current option in the options list-->
          <slot
            name="option"
            :option="option">
            <template v-if="useHighlightStringMatch">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="highlight(getLangLabel(option[labelPropertyName], true))" />
            </template>
            <template v-else>
              {{ getLangLabel(option[labelPropertyName], true) }}
            </template>
          </slot>
        </li>
      </template>
      <div
        v-if="!dropDownOptions.length && (noOptionsSlotHasData || dropDownNoOptionsInfo)"
        :class="[
          'base-drop-down-list__option',
          'base-drop-down-list__no-options',
        ]">
        <!--
          @slot customize what is displayed when no drop down options are available
        -->
        <slot
          v-if="!dropDownOptions.length"
          name="no-options">
          {{ dropDownNoOptionsInfo }}
        </slot>
      </div>
    </ul>
    <!-- @slot to add elements after the options list -->
    <slot name="after-list" />
  </div>
</template>

<script>
import { highlightText } from '@/utils/utils';
import i18n from '../../mixins/i18n';

/** a multipurpose drop down list */

// TODO: currently only taking objects not strings??

export default {
  name: 'BaseDropDownList',
  mixins: [
    i18n,
  ],
  props: {
    /**
     * list of options to select from
     */
    dropDownOptions: {
      type: Array,
      default: () => [],
    },
    /**
     * specify the name of a property that can be used as identifier
     * // TODO: need handling if no identifier provided!!
     */
    identifierPropertyName: {
      type: String,
      default: 'id',
    },
    /**
     * specify the name of the property that should be displayed
     */
    labelPropertyName: {
      type: String,
      default: 'value',
    },
    /**
     * specify the currently active option (will have gray background
     * if not disabled by setting `activeStyled` `false`) for example for
     * combination with input and keyboard use
     */
    activeOption: {
      type: [Object, String],
      default: () => ({}),
    },
    /**
     * specify the currently selected option (will appear in app color if not disabled
     * by setting `selectStyled` `false`, but also used for `aria-selected`).
     *   the `.sync` modifier can be used here
     */
    selectedOption: {
      type: [Object, String],
      default: () => ({}),
    },
    /**
     * in order to link the drop down body to an <input> element specify a list
     * id and use the `list` attribute on the input
     */
    listId: {
      type: String,
      default: '',
    },
    /**
     * add styling to the list body (e.g. max-height)
     */
    listBodyStyle: {
      type: Object,
      default: () => ({}),
    },
    /**
     * flag if the currently active element should be styled
     * (gray background)
     */
    activeStyled: {
      type: Boolean,
      default: true,
    },
    /**
     * flag if the currently selected entry should be styled
     * (only makes sense for single select, color: app-color)
     */
    selectStyled: {
      type: Boolean,
      default: false,
    },
    /**
     * if `true` the element will be styled as a drop down element with
     * box-shadow
     */
    displayAsDropDown: {
      type: Boolean,
      default: true,
    },
    /**
     * message displayed when no selectable options are available
     */
    dropDownNoOptionsInfo: {
      type: String,
      default: '',
    },
    /**
     * specify a language (ISO 639-1) (used for label if label is language specific object
     * e.g. `{ de: 'xxx', en: 'yyy' }`
     */
    language: {
      type: String,
      default: '',
    },
    /**
     * this adds the possibility of nested options (thus a second list nested within the first one),
     * if this is set `true` this will have consequences for scroll adjustment of list on keyboard use
     * and how the active option is determined (the identifier property will be used)
     */
    hasSubOptions: {
      type: Boolean,
      default: false,
    },
    /**
     * in case a custom option background should be set to the currently active option
     *   (this will also apply if `activeStyled` is set `false`).
     * if you want to use this option please set the css variable `--option-background`
     * in your app
     */
    useCustomOptionActiveBackgroundColor: {
      type: Boolean,
      default: false,
    },
    /**
     * set true if option characters matching a string provided in `highlightStringMatch`
     *  should be highlighted
     */
    useHighlightStringMatch: {
      type: Boolean,
      default: false,
    },
    /**
     * if `useHighlightStringMatch` is set to `true`, provide a string to match with the
     *  option label here
     */
    highlightStringMatch: {
      type: String,
      default: '',
    },
    /**
     * provide tag names to style the matched characters
     *  (without '<' and '>', e.g. ['b'] for <b>)
     */
    highlightStringTags: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      /**
       * if there is any (associated by id) store the related input element
       * in this variable
       * @type {HTMLElement}
       */
      inputElement: null,
    };
  },
  computed: {
    /**
     * variable to store if values provided in the list are strings
     * (or an object with language specific strings e.g. { de: 'xxx', en: 'yyy' }) or
     * if list contains other objects (e.g. for AdvancedSearch)
     * @returns {boolean}
     */
    valueIsString() {
      return this.dropDownOptions
        && this.dropDownOptions.length
        && typeof this.getLangLabel(this.dropDownOptions[0][this.labelPropertyName], true) === 'string';
    },
    /**
     * the index of the currently active option provided by parent
     * @returns {number}
     */
    activeOptionIndex() {
      // check if options has submenu
      if (this.hasSubOptions && (!this.activeOption
        || this.activeOption[this.identifierPropertyName] !== undefined)) {
        return this.dropDownOptions
          .findIndex(opt => opt[this.identifierPropertyName]
            === this.activeOption[this.identifierPropertyName]);
      }
      return this.dropDownOptions.indexOf(this.activeOption);
    },
    /**
     * determine if no-options slot has data
     * @returns {Boolean}
     */
    noOptionsSlotHasData() {
      return !!this.$slots['no-options'];
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
  mounted() {
    // check if this element is associated with an input element
    const htmlInputElements = document.getElementsByTagName('input');
    // check if an input element exists
    if (htmlInputElements && htmlInputElements.length) {
      const inputElementsArray = Array.from(htmlInputElements);
      // get the element that has the equal list id
      this.inputElement = inputElementsArray
        .find(el => el.getAttribute('list') === this.listId);
      // if the parent also has a input field that should be connected - it will need to
      // have the same id! (input attribute 'list') (this is to avoid unwanted side effects)
      if (this.inputElement) {
        this.inputElement.addEventListener('keydown', this.navigateOptions);
      }
    }
  },
  destroyed() {
    // check if there is an associated input element
    if (this.inputElement) {
      // if yes - remove the event listener again
      this.inputElement.removeEventListener('keydown', this.navigateOptions);
    }
  },
  methods: {
    /**
     * function to highlight characters of a string
     * @param {string} word - the option that should be matched with query string
     * @returns {string} - the string to fill into v-html
     */
    highlight(word) {
      return highlightText({
        word,
        queryString: this.highlightStringMatch,
        // this is an empty object if prop `highlightStringTags` was not used
        ...this.highlightTags,
      });
    },
    /**
     * triggered if option was selected by click
     *
     * @param {Object} option - the selected option
     */
    selected(option) {
      /**
       * inform parent if option was selected by mouse click
       * (the .sync modifier on prop selectedOption can be used)
       *
       * @event update:selected-option
       * @param {Object} - the selected option
       */
      this.$emit('update:selected-option', option);
    },
    /**
     * check if an option has data (and should be displayed)
     *
     * @param {Object} option - the option in question
     * @returns {boolean}
     */
    optionHasData(option) {
      if (typeof option === 'string') {
        return !!option;
      }
      if (option && option.length) {
        return !!option.length;
      }
      return !!(option && Object.keys(option).length);
    },
    /**
     * a function to navigate the dropdown list by keyboard, used in
     * event listener 'keydown'
     *
     * @property {KeyboardEvent} event - the keydown event from the input
     * field associated by 'id'
     */
    navigateOptions(event, { activeOptionHeight = 0, activeOptionTop = 0 } = {}) {
      const { key } = event;
      if (['ArrowDown', 'ArrowUp'].includes(key)) {
        // check if it is necessary to adjust scrolltop of container (to
        // always have entry steered to with arrow keys in view)
        // if list has suboptions this should be navigated from suboptions
        if ((!this.hasSubOptions || activeOptionHeight) && this.$refs.option
          && this.$refs.option[this.activeOptionIndex]) {
          // save the active option in a variable
          const activeOptionTemp = this.$refs.option[this.activeOptionIndex];
          // get the option height
          const activeOptionHeightTemp = activeOptionHeight || activeOptionTemp.clientHeight;
          // get the option top position
          const activeOptionTopTemp = activeOptionTemp.offsetTop + activeOptionTop;
          if (this.$parent.$refs.dropDownContainer) {
            this.$parent.navigateOptions(event, {
              activeOptionHeight: activeOptionHeightTemp,
              activeOptionTop: activeOptionTopTemp,
            });
          } else {
            // find the correct container to scroll
            // assume its the outer element
            let scrollContainerTemp = this.$refs.dropDownContainer;
            const dropDownListTemp = this.$refs.dropDownList;
            // check if its the inner element (this could be the case if the `before-list` slot is used)
            if (dropDownListTemp.scrollHeight > dropDownListTemp.clientHeight) {
              scrollContainerTemp = dropDownListTemp;
            }
            // get the current scroll position of the container
            const scrollContainerScrollTop = scrollContainerTemp.scrollTop;
            // get the container height
            const scrollContainerHeight = scrollContainerTemp.clientHeight;
            // check if current active option is out of view
            const optionOutOfView = activeOptionTopTemp + activeOptionHeightTemp
              < scrollContainerScrollTop || activeOptionTopTemp
              > scrollContainerScrollTop + scrollContainerHeight;
            // if active option index is 0 - return to top
            if (!this.hasSubOptions && !this.activeOptionIndex) {
              scrollContainerTemp.scrollTo({
                top: 0,
              });
              // else if index is last entry of options list - bring last item into view
            } else if (!this.hasSubOptions
              && this.activeOptionIndex === this.dropDownOptions.length - 1) {
              scrollContainerTemp.scrollTo({
                top: activeOptionTopTemp + activeOptionHeightTemp,
              });
              // else check if key was arrow down
            } else if (event.key === 'ArrowDown') {
              // if option is out of sight set container scrollTop to option position
              if (optionOutOfView) {
                scrollContainerTemp.scrollTo({
                  top: activeOptionTopTemp,
                });
                // else if the option position is larger then container height
                // add the height of one option row to scroll top
              } else if (activeOptionTopTemp + activeOptionHeightTemp
                > scrollContainerHeight + scrollContainerScrollTop) {
                // dropDownContainerTemp.scrollTop += activeOptionHeightTemp;
                scrollContainerTemp.scrollTo({
                  top: scrollContainerScrollTop + activeOptionHeightTemp,
                });
              }
              // else check if key was arrow up
            } else if (event.key === 'ArrowUp') {
              // if option is out of sight set scrollTop to option position so it shows
              // up as last option in container
              if (optionOutOfView) {
                scrollContainerTemp.scrollTo({
                  top: activeOptionTopTemp
                    + activeOptionHeightTemp - scrollContainerHeight,
                });
                // else if index is smaller than previous index (navigating up) and the container
                // top position is larger than the option top position subtract one option row
                // height
              } else if (scrollContainerScrollTop > activeOptionTopTemp) {
                scrollContainerTemp.scrollTo({
                  top: scrollContainerScrollTop - activeOptionHeightTemp,
                });
              }
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../styles/variables";

  .base-drop-down-list__container {
    background: inherit;

    &.base-drop-down-list__container-drop-down-style {
      box-shadow: $drop-shadow;
      z-index: map-get($zindex, dropdown);
      max-height: 10 * $row-height-small;
      overflow-y: auto;
      position: absolute;
    }

    .base-drop-down-list {
      position: relative;
      overflow-y: auto;

      .base-drop-down-list__option {
        display: flex;
        align-items: center;
        min-height: $row-height-small;
        padding: $spacing-small-half $spacing;
        line-height: $line-height;
        width: 100%;
        transition: all 0.2s ease;
        cursor: pointer;

        &.base-drop-down-list__no-options {
          cursor: default;
          align-items: center;
          padding: 0 $spacing;
        }

        &.base-drop-down-list__option__selected {
          color: $app-color;
        }

        &.base-drop-down-list__option__hover:hover {
          background-color: $button-header-color;
        }

        &.base-drop-down-list__option__active,
        &.base-drop-down-list__option__active:hover {
          background-color: $keyboard-active-color;
        }

        &.base-drop-down-list__option__active-custom, {
          background-color: var(--option-background);
        }
      }
    }
  }
</style>
