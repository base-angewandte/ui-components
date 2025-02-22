<template>
  <div
    class="base-collapsed-filter-row">
    <!-- Container to add fade out effect -->
    <div
      ref="filterListContainer"
      :class="['base-collapsed-filter-row__filter-list-container',
               {
                 'base-collapsed-filter-row__filter-list-container__fade-right':
                   filterFade.right,
               },
               {
                 'base-collapsed-filter-row__filter-list-container__fade-left':
                   filterFade.left,
               }]">
      <!-- the actual list of filters -->
      <ul
        ref="filterList"
        :aria-description="assistiveText.appliedFiltersLabel"
        :class="[
          'base-collapsed-filter-row__filter-list',
          { 'base-collapsed-filter-row__filter-list__scrollable': filterListScrollable },
          { 'base-collapsed-filter-row__filter-list__scrolling': isScrolling }
        ]"
        @mousedown="mouseDownHandler"
        @touchstart="mouseDownHandler">
        <li
          v-for="(filter, filterIndex) in filtersInt"
          :key="filter.idInternal"
          :aria-describedby="`${filter.idInternal}-label`"
          role="listitem"
          tabindex="0"
          :class="['base-collapsed-filter-row__filter',
                   { 'base-collapsed-filter-row__filter__boolean': filter.filter_values
                     .fieldType === 'boolean' }]">
          <template v-if="filter.filter_values && filterValuesHaveData(filter.filter_values.values)">
            <div
              :id="`${filter.idInternal}-label`"
              class="base-collapsed-filter-row__filter-label">
              {{ filter.labelInternal }}
            </div>
            <!-- the chips for each filter -->
            <ul
              class="base-collapsed-filter-row__chips-list">
              <!-- iterate through the filter values list -->
              <template
                v-for="(value, valueIndex) in filter.filter_values?.values">
                <!-- check if filter.fieldType is an array to determine if it belongs to a field group -->
                <template v-if="filter.filter_values.fieldType === 'group'">
                  <!-- if yes - also iterate through those values -->
                  <template v-for="(groupValue, groupIndex) in value.values">
                    <BaseCollapsedFilterItem
                      v-if="groupValue.labelInternal"
                      :key="groupValue.idInternal
                        || `${groupValue.labelInternal}-${valueIndex}-${groupIndex}`"
                      :value="groupValue"
                      :type="value.fieldType"
                      :range-indicator="getRangeIndicator(value, groupIndex)"
                      :scrollable="filterListScrollable"
                      :is-scrolling="isScrolling"
                      :date-time-text="dateTimeText"
                      :interpret-label-as-html="(typeof interpretLabelAsHtml === 'boolean'
                        && interpretLabelAsHtml) || (typeof interpretLabelAsHtml === 'object'
                        && calcSubFormChipHtmlRender(filter.idInternal, value.fieldId))"
                      :assistive-text="{
                        booleanFilterLabel: assistiveText.booleanFilterLabel
                          ? assistiveText.booleanFilterLabel
                            .replace('{label}', filter.labelInternal) : groupValue.labelInternal.toString(),
                        optionToRemoveSelected: assistiveText.optionToRemoveSelected,
                      }"
                      @remove-chip="removeChip(filterIndex, valueIndex, groupIndex)" />
                  </template>
                </template>
                <template v-else>
                  <BaseCollapsedFilterItem
                    v-if="value.labelInternal"
                    :key="value.idInternal || `${value.labelInternal}-${valueIndex}`"
                    :value="value"
                    :type="filter.filter_values.fieldType"
                    :range-indicator="getRangeIndicator(filter.filter_values, valueIndex)"
                    :scrollable="filterListScrollable"
                    :is-scrolling="isScrolling"
                    :date-time-text="dateTimeText"
                    :interpret-label-as-html="(typeof interpretLabelAsHtml === 'boolean'
                      && interpretLabelAsHtml) || (typeof interpretLabelAsHtml === 'object'
                      && interpretLabelAsHtml.includes(filter.idInternal))"
                    :assistive-text="{
                      booleanFilterLabel: assistiveText.booleanFilterLabel
                        ? assistiveText.booleanFilterLabel
                          .replace('{label}', filter.labelInternal) : value.labelInternal.toString(),
                      optionToRemoveSelected: assistiveText.optionToRemoveSelected,
                    }"
                    @remove-chip="removeChip(filterIndex, valueIndex)" />
                </template>
              </template>
            </ul>
          </template>
        </li>
      </ul>
    </div>
    <span
      v-if="chipRemovedAssistiveText"
      aria-live="assertive"
      class="assistive-text">
      {{ chipRemovedAssistiveText }}
    </span>

    <!-- remove all filters button -->
    <button
      :title="assistiveText.removeFiltersLabel"
      class="base-collapsed-filter-row__remove"
      @click="removeFilters">
      <BaseIcon
        name="remove"
        class="base-collapsed-filter-row__remove-icon" />
    </button>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon/BaseIcon';
import BaseCollapsedFilterItem from '@/components/BaseAdvancedSearch/BaseCollapsedFilterItem';
import { hasData } from '@/utils/utils';

/**
 * component for BaseAdvancedSearch 'form' mode to display form filter values efficiently
 */
export default {
  name: 'BaseCollapsedFilterRow',
  components: {
    BaseCollapsedFilterItem,
    BaseIcon,
  },
  props: {
    /**
     * provide a list of filters in array form, every array object that needs the following properties:
     *  **idInternal** `string` - a filter identifier
     *  **labelInternal** `string` - a label shown for the filter
     *  **filter_values** `{
     *    values: { labelInternal: string|boolean, idInternal: string? }[]|{ values: {}, fieldId: string, fieldType: string }[]
     *    fieldId: string,
     *    fieldType: string,
     *   }[]` - the values that were selected for the filter (set by BaseAdvancedSearch internally), this is again
     *    an array of objects with the properties
     *      `values` - either containing the actual values to display (with `labelInternal` and `idInternal` (optional) properties)
     *      OR in case of field groups to have nested another object array with `fieldType`, `fieldId` and `values` properties
     *      again (see below for description)
     *    `fieldId`: the property of the form field in question
     *    `fieldType`: the type of the field in question
     */
    filters: {
      type: Array,
      default: () => ([]),
      validator: (val) => {
        // define all required props here
        const requiredProps = ['idInternal', 'labelInternal', 'filter_values'];
        const requiredFilterValueProps = ['values', 'fieldType', 'fieldId'];
        // iterate through the filter array - return true if NO prop is missing
        return !val.some((filter) => {
          // get the properties the filter has
          const filterProps = Object.keys(filter);
          const filterValueProps = Object.keys(filter.filter_values);
          // check if any of those is missing
          let propMissing = requiredProps.some(prop => !filterProps.includes(prop));
          // only continue checking if all props were found so far
          if (!propMissing) {
            propMissing = requiredFilterValueProps.some(prop => !filterValueProps.includes(prop));
            // only continue checking if all props were found so far
            if (!propMissing) {
              // now also check if all filter.filter_values have a label to display
              propMissing = filter.filter_values.values.some((filterValue) => {
                // check for special case field groups where filter_values has nested arrays - so
                // if filterValue has a length it is a nested array
                if (filterValue?.values?.length >= 0) {
                  const groupFilterValueProps = Object.keys(filterValue);
                  // if yes check for each array if it has content and if yes, if it has the labelInternal property
                  return filterValue.values.length !== 0
                    && requiredFilterValueProps.some(prop => !groupFilterValueProps.includes(prop))
                    && filterValue.values
                      // also account here for special case boolean which does not need a labelInternal
                      .some(nestedFilterValue => !Object.keys(nestedFilterValue).includes('labelInternal'));
                }
                // else check for each filterValue if labelInternal property is there
                return !Object.keys(filterValue).includes('labelInternal');
              });
            }
          }
          // return boolean value if prop is missing
          return propMissing;
        });
      },
    },
    /**
     * set the text displayed for date or time values of ranges where only one field is
     * filled.
     */
    dateTimeText: {
      type: Object,
      default: () => ({
        from: 'from',
        until: 'until',
        range: 'to',
      }),
      validator: val => !['from', 'until', 'range'].some(property => !Object.keys(val).includes(property)),
    },
    /**
     * if necessary selected chip text can be rendered as v-html directive
     * can be `true` (all fields will have html rendering enabled) `false` or a list
     *  of field names for which rendering should be enabled, for nested fields
     *  specify an object with a list of child field names.
     *  e.g. :interpretLabelAsHtml="['field1', { [field2]: ['childField1'] }]"
     */
    interpretLabelAsHtml: {
      type: [Boolean, Array],
      default: false,
    },
    /**
     * **removeFiltersLabel**: add a descriptive label used for the remove all
     *  filters icon in collapsed row
     * **filterRemovedNotification**: notification that is read by screenreaders when a filter
     *  value was removed. Add the string {value} to read the filter value that was removed and
     *  {label} to read the label of the filter from which the value was removed.
     * **appliedFiltersLabel**: description for the filters in the collapsed filter row.
     * **booleanFilterLabel**: Set text that should be read for a boolan filter value. You may add
     *      the string {label} which will be replaced by the filter label.
     * **optionToRemoveSelected**: text read when an option is focused (and thus selected), should
     *  announce to the screen reader user that option can now be removed via Backspace or Delete.
     */
    assistiveText: {
      type: Object,
      default: () => ({
        removeFiltersLabel: 'Remove all filters.',
        filterRemovedNotification: 'Filter value {value} was removed from filter {label}.',
        appliedFiltersLabel: 'Currently applied Filters',
        booleanFilterLabel: 'Filter {label} was set',
        optionToRemoveSelected: 'Press delete or backspace to remove.',
      }),
    },
  },
  data() {
    return {
      /**
       * internal representation of filters list, for a list of object properties see
       *  prop `filters`
       * @type Object[]
       */
      filtersInt: [],
      /**
       * variable to steer filter mobile display fade outs
       * also if element is scrollable is determined from this variable (see computed
       * prop filterListScrollable)
       * @type {Object}
       * @property {boolean} filterFade.left - left fade out
       * @property {boolean} filterFade.right - right fade out
       */
      filterFade: {
        left: false,
        right: true,
      },
      /**
       * store the element scroll and mouse cursor position, needed for drag scrolling
       * @type {Object}
       * @property {number} top - element scrollTop value
       * @property {number} left - element scrollLeft value
       * @property {number} x - cursor x position
       * @property {number} y - cursor y position
       */
      pos: { top: 0, left: 0, x: 0, y: 0 },
      /**
       * store the scroll drag element
       * @type {?HTMLElement}
       */
      scrollContainer: null,
      /**
       * set cursor styling according to current scroll state
       * use variable instead of setting css class directly so child component
       *  BaseCollapsedFilter item can also be steered easily
       */
      isScrolling: false,
      /**
       * Resize Observer to trigger fade out calculations
       * @type {?ResizeObserver}
       */
      resizeObserver: null,
      /**
       * assistive text set when a chip was removed to be read
       * by screenreader
       * @type {string}
       */
      chipRemovedAssistiveText: '',
    };
  },
  computed: {
    /**
     * determine from fade out calculations if element is scrollable
     * @returns {boolean}
     */
    filterListScrollable() {
      return this.filterFade.right || this.filterFade.left;
    },
  },
  watch: {
    /**
     * keep filters in sync with parent component and vice versa
     */
    filters: {
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.filtersInt)) {
          this.filtersInt = JSON.parse(JSON.stringify(val));
        }
      },
      immediate: true,
    },
    /**
     * keep filters in sync with parent component and vice versa
     */
    filtersInt: {
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.filters)) {
          this.$emit('update:filters', [...val]);
        }
        this.$nextTick(() => this.calcFadeOut());
      },
      deep: true,
    },
  },
  mounted() {
    // check if filter list exists (which it should since element only displayed
    // if filter values are present)
    if (this.$refs.filterList) {
      // store the filter list element (which is the scroll container)
      this.scrollContainer = this.$refs.filterList;
    }
    // add a resize observer for the fade out and scroll functionalities
    this.initResizeObserver();
  },
  beforeDestroy() {
    // remove resize observer from element
    if (this.resizeObserver) this.resizeObserver.unobserve(this.$refs.filterList);
  },
  methods: {
    /**
     * if 'remove all' icon was triggered just emit event to parent to take care of this
     */
    removeFilters() {
      /**
       * event emitted on remove icon click to remove all filters
       * @event remove-all
       */
      this.$emit('remove-all');
    },
    /**
     * function to remove one specific value from a filter in the filters list
     * @param {number} filterIndex - the index of the filter
     * @param {number} valueIndex - the index of the specific value
     * @param {number?} groupIndex - in case filter is from form group, this is the index of the field
     *  within the group
     */
    removeChip(filterIndex, valueIndex, groupIndex) {
      const { fieldType, values } = this.filtersInt[filterIndex].filter_values;
      const filterLabel = this.filtersInt[filterIndex].labelInternal;
      // get the filter value label and assume it is not a group
      const filterValue = fieldType === 'group' ? values[valueIndex].values[groupIndex].labelInternal
        : values[valueIndex].labelInternal;
      // first check special case group
      if (fieldType === 'group') {
        // get all the concatenated values within the group
        const concatValuesArray = values.reduce((prev, { values: groupFilterValues }) => prev
          .concat(groupFilterValues.filter(val => hasData(val))), []);
        // check if more than 1 value is left in the whole row
        if (concatValuesArray.length < 2 && this.filtersInt.length < 2) {
          this.removeFilters();
          // now check if more than one value is left for the group
        } else if (concatValuesArray.length > 1) {
          // check for special case date and time fields
          if (values[valueIndex].fieldType.includes('date') || values[valueIndex].fieldType.includes('time')) {
            // for date arrays just remove the labelInternal so the order of the date_from and date_to does not
            // get mixed up by removing the complete value
            this.filtersInt[filterIndex].filter_values.values[valueIndex].values[groupIndex].labelInternal = '';
          } else {
            // if its not a date just splice the value out of the array
            this.filtersInt[filterIndex].filter_values.values[valueIndex].values.splice(groupIndex, 1);
          }
          // else this means there is only 1 value in the group left and the whole filter group can be
          // spliced away
        } else {
          // if no - just splice the complete filter group away
          this.filtersInt.splice(filterIndex, 1);
        }
        // check if this is the last (or only) filter value currently selected
      } else if (this.filtersInt.length === 1 && values.length === 1) {
        // if yes - remove the complete row
        this.removeFilters();
        // else check if this is the only value for a specific filter
      } else if (values.length === 1) {
        // if yes - remove the complete filter
        this.filtersInt.splice(filterIndex, 1);
        // special case date object
      } else if (fieldType.includes('date') || fieldType.includes('time')) {
        if (values.filter(value => hasData(value)).length < 2) {
          // if yes - remove the complete filter
          this.filtersInt.splice(filterIndex, 1);
        } else {
          this.filtersInt[filterIndex].filter_values.values[valueIndex].labelInternal = '';
        }
      } else {
        this.filtersInt[filterIndex].filter_values.values.splice(valueIndex, 1);
      }
      // set the assistive text so it is read by screenreader
      this.chipRemovedAssistiveText = this.assistiveText.filterRemovedNotification
        .replace('{label}', filterLabel)
        .replace('{value}', filterValue);
      // and remove it again afterward
      setTimeout(() => {
        this.chipRemovedAssistiveText = '';
      }, 300);
    },

    /** SCROLL RELATED FUNCTIONALITIES */

    /**
     * set up resize observer for filterList to be able to adjust filter fade out
     * and scroll functionality
     */
    initResizeObserver() {
      const tempResizeObserver = new ResizeObserver(this.calcFadeOut);
      tempResizeObserver.observe(this.$refs.filterList);
      this.resizeObserver = tempResizeObserver;
    },
    /**
     * function triggered by mouse down on filter list, triggering scroll functionality
     * @param {MouseEvent} event - the mouse down event
     */
    mouseDownHandler(event) {
      // check if filterList is actually scrollable
      if (this.filterListScrollable) {
        // save the current element scroll state and mouse position
        this.pos = {
          // The current scroll
          left: this.scrollContainer.scrollLeft,
          top: this.scrollContainer.scrollTop,
          // Get the current mouse position
          x: event.clientX ?? (event.touches ? event.touches[0]?.clientX : 0),
          y: event.clientY ?? (event.touches ? event.touches[0]?.clientY : 0),
        };
        // add event listeners for mousemove and mouseup to be able to trigger scroll
        // for touch devices add touch event listeners
        if (event.type === 'touchstart') {
          document.addEventListener('touchmove', this.mouseMoveHandler);
          document.addEventListener('touchend', this.mouseUpHandler);
        } else {
          // else add mouse events
          document.addEventListener('mousemove', this.mouseMoveHandler);
          document.addEventListener('mouseup', this.mouseUpHandler);
        }
        // Change the cursor and prevent user from selecting the text
        this.isScrolling = true;
      }
    },
    /**
     * function triggered by document mouse move after event listeners were added
     * in mouse down filter list element event
     * @param {MouseEvent} e
     */
    mouseMoveHandler(e) {
      // get event position - touch event does not have clientX/clientY - fallback
      // to touches position
      const eventXPosition = e.clientX ?? (e.touches ? e.touches[0]?.clientX : 0);
      const eventYPosition = e.clientY ?? (e.touches ? e.touches[0]?.clientY : 0);
      // How far the mouse has been moved
      const dx = eventXPosition - this.pos.x;
      const dy = eventYPosition - this.pos.y;

      // Scroll the element
      this.scrollContainer.scrollTop = this.pos.top - dy;
      this.scrollContainer.scrollLeft = this.pos.left - dx;
      // check if fade out needs to be shown / has changed
      this.calcFadeOut();
    },
    /**
     * function triggered by document mouse up after event listeners were added
     * in mouse down filter list element event
     */
    mouseUpHandler() {
      // remove all the event listeners again
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      document.removeEventListener('mouseup', this.mouseUpHandler);
      document.removeEventListener('touchmove', this.mouseMoveHandler);
      document.removeEventListener('touchend', this.mouseUpHandler);

      // change the styling of the element back to normal
      this.isScrolling = false;
    },
    /**
     * function to calculate if filterList fade out should be shown on element left and/or right border
     */
    calcFadeOut() {
      // get current element scroll position
      const scrollPosition = Math.floor(this.scrollContainer.scrollLeft);
      // get element max scroll position
      const scrollMax = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth;
      // set filter fade variables
      this.filterFade = {
        // show fade out left as soon as scroll position is different from 0
        left: scrollPosition !== 0,
        // show fade out right as soon as scroll position is different from maximum position
        // but only if element exceeds available space
        right: scrollMax !== 0 && scrollPosition !== scrollMax,
      };
    },

    /** OTHER METHODS */

    /**
     * determine if the provided filter values array has any label data in it
     * (could be kept in the filter values list even if empty in order to be able
     * to map again to the original formFieldValues)
     * @param {Object[]} filterValues
     * @returns {boolean}
     */
    filterValuesHaveData(filterValues) {
      return hasData(filterValues);
    },
    getRangeIndicator(filterValues, index) {
      // check if it is a filter with an array of exactly two values
      if (filterValues.values.length === 2
        && ['date', 'time'].includes(filterValues.fieldType)) {
        if (!!filterValues.values[0].labelInternal
          && !!filterValues.values[1].labelInternal && index === 1) {
          return this.dateTimeText.range;
        }
        if (!filterValues.values[1].labelInternal && filterValues.values[0].labelInternal) {
          return this.dateTimeText.from;
        }
        if (!filterValues.values[0].labelInternal && filterValues.values[1].labelInternal) {
          return this.dateTimeText.until;
        }
      }
      return '';
    },
    /**
     * we need to check if `interpretLabelAsHtml` was set true for a subform field when
     *  the prop was provided as [{ [parentField]: ['subfield1'] }]
     * @param {string} filterId - the filter id as provided to this component (in the form
     *  [fieldname]-group-[index])
     * @param {string} valueId - the property name of the actual subformfield
     * @returns {boolean}
     */
    calcSubFormChipHtmlRender(filterId, valueId) {
      // get the correct filter property name from the id
      // e.g. 'weekday-date-group-0' -> 'weekday-date'
      const filterPropertyName = filterId.split('-').slice(0, 1).join('-');
      // find the correct object in the `interpretLabelAsHtml` array
      const subFormList = this.interpretLabelAsHtml
        .find(id => typeof id === 'object' && Object.keys(id).includes(filterPropertyName));
      // check if a value was found and if the field name is included in the list of that value
      return !!subFormList && subFormList[filterPropertyName].includes(valueId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.base-collapsed-filter-row {
  position: relative;
  height: $row-height-large;
  align-items: center;
  padding-left: $spacing;
  border-top: $separation-line;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  .base-collapsed-filter-row__filter-list-container {
    position: relative;
    flex: 1 1 auto;
    overflow: hidden;

    &.base-collapsed-filter-row__filter-list-container__fade-left::before {
      content: '';
      width: $fade-out-width;
      height: 100%;
      position: absolute;
      top: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      z-index: map-get($zindex, chips-fadeout);
      pointer-events: none;
    }

    &.base-collapsed-filter-row__filter-list-container__fade-right::after {
      content: '';
      width: $fade-out-width;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255));
      z-index: map-get($zindex, chips-fadeout);
      pointer-events: none;
    }

    .base-collapsed-filter-row__filter-list {
      display: flex;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* Internet Explorer 10+ */

      &::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
      }

      &.base-collapsed-filter-row__filter-list__scrollable {
        cursor: grab;
      }

      &.base-collapsed-filter-row__filter-list__scrolling {
        cursor: grabbing;
        user-select: none;
      }

      .base-collapsed-filter-row__filter {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: 0 0 auto;
        overflow-y: hidden;

        + .base-collapsed-filter-row__filter {
          margin-left: $spacing;
        }

        &.base-collapsed-filter-row__filter__boolean {
          flex: 0 1 auto;
          min-width: 150px;
          overflow: hidden;
        }

        .base-collapsed-filter-row__filter-label {
          font-size: $font-size-small;
          color: $font-color-second;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .base-collapsed-filter-row__chips-list {
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          align-items: center;
          flex: 1 0 auto;
          height: calc(#{$line-height} + #{$spacing-small});

          .base-collapsed-filter-row__group-chip--spacing-right {
            margin-right: $spacing-small;
          }
        }
      }
    }
  }

  .base-collapsed-filter-row__remove {
    background: white;
    display: flex;
    flex: 0 0 auto;
    padding: 0 $spacing;
    height: 100%;
    align-items: center;

    &:hover, &:active, &:focus {
      color: $app-color;
    }

    .base-collapsed-filter-row__remove-icon {
      height: $icon-medium;
      width: $icon-medium;
      cursor: pointer;
    }
  }
}
</style>
