<template>
  <BaseInput
    :id="idInt"
    v-model="fieldContent[activeTabInt]"
    :is-active.sync="isActive"
    :label="label"
    :show-label="showLabel"
    :placeholder="placeholder"
    :required="required"
    :invalid="invalid"
    :disabled="disabled"
    :show-error-icon="showErrorIcon"
    :error-message="errorMessage"
    :clearable="clearable"
    :use-fade-out="false"
    class="base-multiline-text-input"
    v-on="$listeners">
    <template #label-addition>
      <div class="base-multiline-text-input__additions">
        <!-- @slot to add drop down needed for text input field (base specific) or any other element deemed necessary -->
        <slot name="label-addition" />
        <BaseSwitchButton
          v-if="tabs && tabs[0] !== 'default'"
          v-model="activeTabInt"
          :options="switchTabs"
          :label="tabsLegend"
          :active-tab="activeTab"
          class="base-multiline-text-input__tabs">
          <template
            #right-of-content="tab">
            <BaseIcon
              v-if="hasText(tab.value)"
              class="base-multiline-text-input__text-icon"
              name="text" />
          </template>
        </BaseSwitchButton>
      </div>
    </template>
    <template #input>
      <div
        ref="textareaWrapper"
        :class="['base-multiline-text-input__textarea-wrapper',
                 { 'base-multiline-text-input__textarea-wrapper__fade-out': showFadeOut }]">
        <!-- need to disable because label is there - it is just in BaseInput component -->
        <!-- eslint-disable-next-line  vuejs-accessibility/form-control-has-label -->
        <textarea
          :id="idInt"
          ref="textarea"
          v-model="fieldContent[activeTabInt]"
          :required="required"
          :aria-required="required.toString()"
          :aria-describedby="idInt"
          :aria-invalid="invalid.toString()"
          :disabled="disabled"
          :aria-disabled="disabled.toString()"
          :placeholder="placeholder"
          class="base-multiline-text-input__textarea"
          v-on="inputListeners"
          @keydown.tab="isActive = false" />
      </div>
    </template>
    <template
      #input-field-addition-before>
      <!-- @slot Slot to allow for additional elements in the input field <div> (before <input>) -->
      <slot name="input-field-addition-before" />
    </template>
    <template #input-field-addition-after>
      <!-- @slot for adding elements after input -->
      <slot name="input-field-addition-after" />
    </template>
    <template #post-input-field>
      <!-- @slot elements after the actual input element but within the input field container. for an example see [BaseChipsInputField](BaseChipsInputField)-->
      <slot name="post-input-field" />
    </template>
    <template #error-icon>
      <!-- @slot use a custom icon instead of standard error/warning icon. for an example see [BaseChipsInputField](BaseChipsInputField)-->
      <slot name="error-icon" />
    </template>
    <template #remove-icon>
      <!-- @slot use a custom icon instead of standard remove icon. for an example see [BaseChipsInputField](BaseChipsInputField)-->
      <slot name="remove-icon" />
    </template>
  </BaseInput>
</template>

<script>
import BaseInput from '@/components/BaseInput/BaseInput';
import BaseIcon from '@/components/BaseIcon/BaseIcon';
import { createId } from '@/utils/utils';

/**
 * A multiline textfield base component
 */

export default {
  name: 'BaseMultilineTextInput',
  components: {
    BaseInput,
    BaseIcon,
    BaseSwitchButton: () => import('@/components/BaseSwitchButton/BaseSwitchButton').then(m => m.default || m),
  },
  model: {
    prop: 'input',
    event: 'input',
  },
  props: {
    /**
     * input displayed in the textarea.
     *   if `tabs` prop is set, this needs to be an object with properties corresponding to
     *   tab names.
     */
    input: {
      type: [Object, String],
      default: '',
    },
    /**
     * set the label for the input component
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * set `true` if label should be visible
     */
    showLabel: {
      type: Boolean,
      default: true,
    },
    /**
     * set input field placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * set tabs for the input field
     */
    tabs: {
      type: Array,
      default: () => ['default'],
    },
    /**
     * give the possibility to specify what should be displayed in the tabs
     */
    tabLabels: {
      type: Array,
      default: () => [],
    },
    /**
     * set the currently active tab (specify the property of the object not the label)
     */
    activeTab: {
      type: String,
      default() {
        return this.tabs[0] || 'default';
      },
    },
    /**
     * set a legend for the tabs to be read (for accessibility only, hidden)
     */
    tabsLegend: {
      type: String,
      default: 'Radiogroup',
    },
    /**
     * set id which is used for label + id
     */
    id: {
      type: [String, Number],
      default: '',
    },
    /**
     * set a language (ISO 639-1)
     */
    language: {
      type: String,
      default: '',
    },
    /**
     * mark as required field (currently only used for `aria-required`)
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
     * set true if input field should be disabled.
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
      default: true,
    },
    /**
     * if true a remove icon will be shown allowing to remove
     * all input at once.
     * for an example see [BaseInput](BaseInput)
     */
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTabInt: this.activeTab || 'default',
      fieldContent: {},
      isActive: false,
    };
  },
  computed: {
    /**
     * check if an id was provided (to handle label input connection), if not create one
     * @returns {String|string}
     */
    idInt() {
      return this.id || createId();
    },
    // TODO: refactor component props to already match object necessary for switch component
    switchTabs() {
      return this.tabs.map((tab, index) => ({ value: tab, label: this.tabLabels[index] || tab }));
    },
    inputListeners() {
      return {
        // add all the listeners from the parent
        ...this.$listeners,
        // and add custom listeners
        ...{
          input: () => {
            /**
             * Event emitted on input, passing input string or input object
             *
             * @event input
             * @param {string, Object} - the altered field input
             */
            this.$emit('input', this.emitFieldContent());
          },
        },
      };
    },
    showFadeOut() {
      if (this.$refs && this.$refs.textarea) {
        return !this.isActive
          && this.$refs.textarea.scrollHeight > this.$refs.textareaWrapper.clientHeight;
      }
      return !this.isActive;
    },
  },
  watch: {
    // watch for input changes from outside
    input: {
      handler(val) {
        if ((typeof val === 'object' && JSON.stringify(val) !== JSON.stringify(this.fieldContent))
          || (typeof val === 'string' && val !== this.fieldContent[this.activeTabInt])) {
          // if input changes set internal fieldContent variable
          this.setFieldContent(val);
        }
      },
      immediate: true,
      deep: true,
    },
    // get updates for active tab from outside
    activeTab(val) {
      this.activeTabInt = val;
    },
  },
  methods: {
    setFieldContent(val) {
      if (this.tabs.length < 2) {
        const propName = this.activeTabInt || 'default';
        this.$set(this.fieldContent, propName, typeof val === 'string' ? val : val[propName]);
      } else {
        this.tabs.forEach(tab => this.$set(
          this.fieldContent,
          tab,
          val[tab],
        ));
      }
    },
    emitFieldContent() {
      if (typeof this.input === 'object') {
        return this.fieldContent;
      }
      return this.fieldContent[this.activeTabInt];
    },
    hasText(val) {
      return !!this.fieldContent[val];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.base-multiline-text-input {
  font-family: inherit;
  font-size: inherit;

  .base-multiline-text-input__additions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: -$spacing-small-half;

    .base-multiline-text-input__tabs {
      align-self: center;
      flex-shrink: 0;

      .base-multiline-text-input__text-icon {
        margin-left: $spacing-small;
        height: 10px;
        width: 10px;
        vertical-align: middle;
        margin-bottom: $spacing-small-half;
        color: $font-color-second;
        fill: $font-color-second;
      }
    }
  }

  .base-multiline-text-input__textarea-wrapper {
    width: 100%;

    &.base-multiline-text-input__textarea-wrapper__fade-out::after {
      content: '';
      width: 100%;
      height: $fade-out-width;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) , white);
      pointer-events: none;
    }

    .base-multiline-text-input__textarea {
      width: 100%;
      line-height: $line-height;
      padding: $spacing-small-half 0;
      margin: 0;
      height: 240px;
      appearance: none;
      resize: none;
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
        display: none;  /* Safari and Chrome */
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  .base-multiline-text-input {
    .base-multiline-text-input__additions {
      justify-content: flex-end;
    }
  }
}

@media screen and (max-width: $mobile) {
  .base-multiline-text-input
  .base-multiline-text-input__additions {
    margin-bottom: -$spacing-small;
  }
}

</style>
