## 4.1.1 (2024-12-04)


### Chore

* update .gitignore to ignore built component.md files 

## 4.1.0 (2024-12-04)


### Changed

* **[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon):** redesigned icons for image_cropped and image_resized

## 4.0.1 (2024-11-21)


### Deprecated

* **[BaseHoverBox](https://base-angewandte.github.io/base-ui-components/components/BaseHoverBox):** add deprecation notice to BaseHoverBox and BaseChip prop `hoverBoxContent`.


### Fixed

* **[BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap), [BaseMapLocations](https://base-angewandte.github.io/base-ui-components/components/BaseMapLocations):** update demo map subdomains of basemap.at for styleguide.
* **[BaseMapLocations](https://base-angewandte.github.io/base-ui-components/components/BaseMapLocations):** component BaseExpandBox collapsing if a text list element is hovered.

## 4.0.0 (2024-11-11)

### ⚠ BREAKING CHANGE

* min required node version is now v18.
<br><br>
* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** move properties `addFilter`, `removeFilter`, `selectFilterLabel` and `searchLabel` from prop `advancedSearchText` to `assistiveText`. Also the option to use an key to a localization json file instead of a pure text string was removed.
* **[BaseButton](https://base-angewandte.github.io/base-ui-components/components/BaseButton):** set default value of prop `text` to an empty string instead of `'Submit'`.
* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):**
  * `list` and `selectedList` need to be an array of objects with at least an identifier and a label, no strings allowed anymore (property names for this object can be set via `identifierPropertyName` and `labelPropertyName` as before)
  * `identifierPropertyName` and `labelPropertyName` default values were changed from empty string to `id` and `label` respectively
* **[BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow):** The dropdown list now closes after an option is selected.   To prevent this new default behaviour, the new prop `closeDropdownOnOptionSelect` must be set to `false`.

* **[BaseExpandList](https://base-angewandte.github.io/base-ui-components/components/BaseExpandList), [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection):** prop `supportiveText` is renamed to `assistiveText`.

* **[BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator), [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** if field name was `keywords` the [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput) had the prop `sortable` set true per default up to now. This was removed and `sortable` needs to be set via `x-attrs` or `fieldProps` for EVERY field.

* **[BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink):**
  * The `chip-clicked` event has been removed for type chip links.
    Chips are now rendered as an `a` tag and a query param with the chip-object is added to the link.
    The URL params can be set with the new props `chipQueryName`, `identifierPropertyName` and `path`.
  * Use `identifierPropertyValue` property instead of `source` property.

* **[BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):**
  * prop `show` was removed, control component rendering with v-if instead.
  * Prop `isOpenFocus` was renamed to `initialFocusElement`.

* **[BaseSwitchButton](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton):** slot `right-of-text` was renamed to `right-of-content`.

* **[BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList):**
  * Boolean prop `cols2` was removed and replaced with prop `cols` which can now take a number defining the number of columns to be rendered.
  * Use prop `colsSingleTextObject` prop `data` is an array of objects with `label` and `data` properties, where the data type of `data` is `string` (see example 2 in the styleguide).


### Added

#### New Components:

* **[BaseInfoPanel](https://base-angewandte.github.io/base-ui-components/components/BaseInfoPanel):** new component BaseInfoPanel to display information.
* **[BaseImageGrid](https://base-angewandte.github.io/base-ui-components/components/BaseImageGrid)**: new component to render 1 to 4 images in a static grid.
* **[BaseNavigation](https://base-angewandte.github.io/base-ui-components/components/BaseNavigation)**:
* **[BaseTooltipBox](https://base-angewandte.github.io/base-ui-components/components/BaseTooltipBox)**: component to render tooltip boxes. Complete refactor of [BaseTooltip](https://base-angewandte.github.io/base-ui-components/components/BaseTooltip) with extended functionality:
  * improved position calculation based on preferred direction.
  * optional modal or fullscreen mode on mobile.
  * scrollable content with top and bottom fade outs.
  * new slot `header-title` for easier header customization and allow for customization of header id with new prop `headerId`.


#### Other
* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):**
  * new component mode `form` using a form instead of filter rows.
  * enable drop down option string match highlighting with new props `highlightAutocompleteMatch` and `highlightAutocompleteTags`.
  * improve usability for assistive technologies, expand functionality of prop `assistiveText`, e.g. to announce search results or autocomplete loading.
  * add slot `autocomplete-option` for easier customization of the options.

* **[BaseAutocompleteInput](https://base-angewandte.github.io/base-ui-components/components/BaseAutocompleteInput):**
  * enable drop down option string match highlighting with new props `highlightStringMatch` and `highlightStringTags`.
  * add new prop `assistiveText` to announce autocomplete loading and results retrieved.

* **[BaseBox](https://base-angewandte.github.io/base-ui-components/components/BaseBox):** add option `'none'` to prop `boxShadowSize` to enable boxes without box-shadow.

* **[BaseButton](https://base-angewandte.github.io/base-ui-components/components/BaseButton):** add new style to prop `buttonStyle` named `'circle'`.

* **[BaseChip](https://base-angewandte.github.io/base-ui-components/components/BaseChip):**  new prop `interpretTextAsHtml` applying the new directive `v-insert-text-as-html`.

* **[BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow):**
  * add new prop `closeDropdownOnOptionSelect` (default `true`!) to close dropdown after selection.
  * add new props `sortable` and `draggable` to make these component features optional.
  * add props `additionalPropAllowMultipleEntries`, `additionalPropRequired` to allow more control over the additional property input field. The latter can also be set via OpenAPI definition x-attrs `additional_prop_required`.
  * add validation for required fields.
  * add new prop `additionalPropDefaultOption` that will be added if selected list is empty as soon as component is rendered.
  * enable drop down option string match highlighting with new props `highlightStringMatch` and `highlightStringTags`.
  * add new prop `assistiveText` to announce autocomplete loading, results retrieved or adding and removal of chips.

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):**
  * add new prop `chipsRemovable` to make the display of the chip remove icon optional.
  * add new prop `defaultEntry` that will be added if the selected list is empty as soon as component is rendered.
  * add new prop `closeDropdownOnOptionSelect` to close dropdown after selection.
  * add prop `inputType` (possible values `'text', 'search'`) to be provided to the native HTML input field.
  * enable drop down option string match highlighting with new props `highlightStringMatch` and `highlightStringTags`.
  * new prop `interpretChipsLabelAsHtml` applying the directive `v-insert-text-as-html` to the selected chips.
  * extend prop `assistiveText` to also announce autocomplete loading, results retrieved or adding and removal of chips.

* **[BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField):**
  * also allow data type `number` for prop `linkedListOption`.
  * add prop `inputType` (possible values `'text', 'search'`) to be provided to the native HTML input field.
  * new prop `interpretChipsLabelAsHtml` applying the directive `v-insert-text-as-html` to the selected chips.
  * extend prop `assistiveText` to also announce autocomplete loading or adding and removal of chips

* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** allow negative dates and years with less than 4 digits.

* **[BaseDropDownList](https://base-angewandte.github.io/base-ui-components/components/BaseDropDownList):** add new props `useHighlightStringMatch`, `highlightStringMatch` and `highlightStringTags` to enable drop down option string match highlighting.

* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** add screen reader announcements for results loading and results found.

* **[BaseExpandBox](https://base-angewandte.github.io/base-ui-components/components/BaseExpandBox):**
  * add additional slot `header`.
  * add option `'none'` for prop `padding` to allow the padding to be 0.
  * calculate 'show more' button visibility on content change.
  * introduce prop `boxShadow` to enable boxes without box-shadow.

* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):**
  * support `timerange` only fields.
  * new event `input-complete` to only trigger when valid input was provided.
  * make drop down slot `drop-down-entry` available in form components for easier customization of drop down options.
  * add new prop `assistiveText` to enable adding assistive text for all form fields.
  * add new x-attrs field `additional_prop_required` to set the additional property of [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow) as required.

* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):**
  * add basic form validation.
  * add event `form-mounted` to be emitted after element was mounted and rendered
  * add new props `labelPropertyName` and `identifierPropertyName` (used for chips inputs and drop downs)
  * refactoring of BaseForm allowing 3 columns per row (can be set via `x-attrs` `field_format` with new value `'third'`).

* **[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon):** new icons: `'minus'`, `'fullscreen'`, `'fullscreen-exit'`, `'grid'`, `'separator-vertical'`, `'information-solo'`, `'image-cropped'`, `'image-resized'` and `'arrow-right'`.

* **[BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput):**
  * also allow data type `number` for prop `linkedListOption`.
  * add new assistive text feature for loader visibility via prop `assistiveText`.

* **[BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox):**
  * add additional slot `icon` that can be displayed and add a separator line between header and body if no image.
  * add additional title slot `title-right`.
  * add prop `titleRows` to specify number of title rows.
  * add prop `imageFooterMargin` to make the spacing of the footer to the box edge more flexible.
  * add prop `imageShadow` to set the shadow overlay visibility.
  * To enable showing of up to 4 images in the box new props `images` and `gridGap` added. `images` takes an array of image urls or srcsets to display up to 4 images instead of just one. (Prop `imageUrl` was still kept
    for backwards compatibility)`gridGap` specifies the spacing between the images.
  * new prop `interpretTextAsHtml` applying the new directive `v-insert-text-as-html` and also adding props `altTitle` and `altSubtext` to not display html tags on hover and for image alt text if `interpretTextAsHtml` is set `true`.

* **[BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink):**
  * add prop `tooltipTypeOnMobile` to specify how the [TooltipBox](https://base-angewandte.github.io/base-ui-components/components/TooltipBox) should be rendered on mobile devices.
  * add better support for screen readers.
  * enable setting of additional attributes on the link element with prop `additionalAttributes`.
  * add new slot `label` to improve styling options.
  * also allow data type `number` for prop `identifierPropertyValue`.
  * add prop `titleText` to allow configuration of the text shown on hover and `spaceAfter` to improve styling options for tooltip entries.
  * new prop `interpretTextAsHtml` applying the new directive `v-insert-text-as-html`. Also adding new prop `altTitle` to be used in case `value` contains HTML.
  * new prop `tooltipThresholdTop` to consider a threshold in tooltip position calculations.

* **[BaseLoader](https://base-angewandte.github.io/base-ui-components/components/BaseLoader):** accessibility improvement - read text on loader appearance.

* **[BaseOptions](https://base-angewandte.github.io/base-ui-components/components/BaseOptions):**
  * add new prop `optionsButtonDisabled`.
  * new option `'fitted'` for prop `useOptionsButtonOn` to switch to using options button as soon as the row does not fit the screen size anymore.
  * add new prop `disabled` to completely disable the options.
  * add possibility to disable single options buttons via prop `optionsConfig`.


* **[BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):**
  * add slot `header-title` for header customization.
  * add new prop `headerId` to allow for customization of the popup body id.
  * add prop `showButtonRow` to enable showing the popup without the bottom buttons.
  * add handler to focus specific HTML elements within the component using the tab keys. To specify elements that should be focused use new prop `focusableElements`.
  * new prop `overlayBackgroundVisible` to have a visible background overlay.
  * add prop `closeButtonDisabled` to disable the close button.

* **[BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection):** to announce results loading via screen reader, add property `loaderActive` to prop `supportiveText`.

* **[BaseSearch](https://base-angewandte.github.io/base-ui-components/components/BaseSearch):**
  * also allow data type `number` for prop `linkedListOption`.
  * add prop `assistiveText` option to announce search results or autocomplete loading.

* **[BaseSwitchButton](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton):**
  * add [BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon) component to display icons natively not only via slot (configurable via property `icon` to `options` prop).
  * new prop `mode` with possible values [`'normal'`](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton.html#type-normal) (the previous appearance, now default) and [`'prominent'`](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton.html#type-prominent).
  * also added new props `showLabel` to be able to display the label of the fieldset and `showButtonsLabel` (default `false` for type prominent) to show or hide the button label.
  * add prop `iconSize` (only for `type 'prominent'`).

* **[BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList):**
  * add property `identifierPropertyName` to be used as identifier instead of hardcoded `'source'`.
  * decide column render based on data structure (so either the number of columns specified in `cols` is used or just a single text block is rendered).
  * add the aria-labelledby attribute to the dialog box using the title.
  * new prop `interpretTextAsHtml` applying the new directive `v-insert-text-as-html` and prop `altTitle` for screen reader in case the title contains HTML.
  * new prop `tooltipThresholdTop` to consider a threshold in tooltip position calculations.


### Changed

* **build:**
  * update dependencies hls.js, commitlint, autoprefixer, concurrently, eslint, globby, gulp-conventional-changelog, husky, postcss, sass-loader, svgo, vite.
  * upgrade project to be compatible with >= node v18

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** move properties solely purposed for assistive technologies from prop `advancedSearchText` to `assistiveText`.

* **[BaseButton](https://base-angewandte.github.io/base-ui-components/components/BaseButton):** set text properties default value to an empty string.

* **[BaseChip](https://base-angewandte.github.io/base-ui-components/components/BaseChip):** add BaseChip to components available in styleguide.

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):** remove `dropDownActive` because the BaseDropDownList event does not exist anymore and unify all state handling with `chipsInputActive`.

* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** rework input event emit and get rid of double emit.

* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):**
  * focus first new menu list element after page change.
  * other accessibility improvements.

* **[BaseExpandBox](https://base-angewandte.github.io/base-ui-components/components/BaseExpandBox):** adaptions to better handle the visibility of the 'show more' button.

* **[BaseExpandList](https://base-angewandte.github.io/base-ui-components/components/BaseExpandList):** rename prop `supportiveText` to `assistiveText` for consistency.

* **[BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput):** `update:is-active` event should always be emitted from BaseInput.

* **[BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink):**
  * render chips as links instead of buttons.
  * replace [BaseTooltip](https://base-angewandte.github.io/base-ui-components/components/BaseTooltip) with [BaseTooltipBox](https://base-angewandte.github.io/base-ui-components/components/BaseTooltipBox).

* **[BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):**
  * rename prop `id` to `headerId` to clarify purpose and unify with [BaseTooltipBox](https://base-angewandte.github.io/base-ui-components/components/BaseTooltipBox).
  * rename prop `isOpenFocus` that defines the HTML element which should be focused after the popup opens to a more fitting name.

* **[BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection):** rename prop `supportiveText` to `assistiveText` for consistency.

* **[BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList):** refactor props for more flexibility in the object structure (e.g. define the identifier property name).


### Deprecated

* **[BaseTooltip](https://base-angewandte.github.io/base-ui-components/components/BaseTooltip):** this component is deprecated and replaced by [BaseTooltipBox](https://base-angewandte.github.io/base-ui-components/components/BaseTooltipBox).


### Removed

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):** remove option to specify an array of strings for selected options. Only array of objects allowed.
* **[BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):** remove unnecessary variables `show` and `showInt`.

### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):**
  * 'Add filter' button has `aria-describedby` attribute but no element with same id.
  * event `search` emitted params not using `identifierPropertyName` of filter but always `id`.
  * focus not on input on first drop down open.
  * search not triggered on main search blur.
  * if two options in different collections are the same both are highlighted.
  * main filter not updated if values change from outside.
  * search not triggered if string is removed from main search field.
  * reduce recalculation of `rowId`.
  * also fetch autocomplete results immediately on component render.
  * autocomplete results sometimes displayed incorrectly in styleguide demo.
  * also close drop down when all filter data are deleted.
  * propagate input listeners with correct directive (v-on not v-bind).
  * remove icon should be shown immediately on text enter.
  * search mode `list` mobile drop down close button not working.
  * search not triggered on mobile after blur + remove icon.
  * accessibility improvements.
  * drop-downs not closing on chips remove.

* **[BaseAutocompleteInput](https://base-angewandte.github.io/base-ui-components/components/BaseAutocompleteInput):** avoid doubled events from update:is-active (BaseInput).

* **[BaseBoxButton](https://base-angewandte.github.io/base-ui-components/components/BaseBoxButton):**
  * trigger event even when the icon is touched directly.
  * fix disabled state.

* **[BaseBreadCrumbs](https://base-angewandte.github.io/base-ui-components/components/BaseBreadCrumbs):**
  * deal with long labels.
  * add app-color on focus and hover to improve visual user experience.
  * enable aria-current attribute on currently active link.
  * icon shrinking if label is very long.

* **[BaseButton](https://base-angewandte.github.io/base-ui-components/components/BaseButton):**
  * `aria-describedby` id sometimes has no reference and button no label if only icon.
  * add animation for drop down icon.
  * remove button title attribute.

* **[BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow):** add missing slot `below-input`.

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):**
  * add id also to 'create entry' option of `allowUnknownEntries` so it is recognized by screen reader.
  * add missing slot `below-input`.
  * input string not cleared if focus to other input field.
  * propagate `internalId` of BaseChipsInput to BaseChipsInputField so they have the same id even if prop `id` has not been set.

* **[BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField):**
  * update:is-active event emitted twice.
  * rename variable `chipActiveForRemove` to `indexActiveForRemove` to reflect more accurately what it contains.
  * focus setting not always triggered on chips remove.

* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):**
  * copy & paste not possible.
  * if year starts with '0' it will be removed by Date.getFullYear().
  * `inputInt` computed variable changed event not working.
  * `labelRowSlotHasData()` not always calculated correctly because of whitespace issues.
  * time picker validation not working.
  * validity check on date picked not working.
  * validity check on input blur triggered twice for date picker.
  * keep `isActiveInt` variable up to date to emit correct state in event.
  * date/time from should set open if `isActive` prop is set `true`.
  * error on triggering clear input button.
  * keyboard tab navigation not possible on firefox.
  * make sure component always has a proper id assigned.
  * ios virtual keyboard arrow keys leave picker open.
  * picker not closed using virtual keyboard on mobile.

* **[BaseExpandBox](https://base-angewandte.github.io/base-ui-components/components/BaseExpandBox):** calculate an optional offset for the content inner height.

* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):**
  * `label-additions` slot only shown for first field if field is repeatable.
  * `field_type 'boolean'` styling wrong if full field.
  * remove icon not always displayed correctly.
  * slot bindings not shown in styleguide.

* **[BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):**
  * base date input time field event naming wrong.
  * chips drop down options not displayed with custom `labelPropertyName`.
  * `fieldValueInt`  variable not updated.
  * `fieldValueInt` variable not updated with `value-changed` event from subform.
  * sortable always true if field name is 'keywords'.
  * time fields do not use correct placeholder.
  * safeguard against dropDownList being null or undefined.

* **[BaseHlsVideo](https://base-angewandte.github.io/base-ui-components/components/BaseHlsVideo):** add demo to styleguide.

* **[BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput):**
  * \<input\> value not updated on event dispatch on some devices.
  * blur event not triggered when value empty.
  * make blur event available to outside again.
  * remove magnifier icon from input type=search in safari (since we have our own icon).
  * props `errorMessage` and `invalid` should trigger immediately.
  * `showLabelRow()` not always calculated correctly.
  * prevent error icon from shrinking.
  * set focus on input if `isActive` on mounted.
  * stop tab keydown event from being emitted twice.
  * ios virtual keyboard arrow keys leave dropdowns open.
  * chip not added on Android using virtual keyboard.

* **[BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink):**
  * fix word-breaks for comma separated links
  * clarify prop `tooltip` usage and improve slot `tooltip` documentation
  * render aria-label for type chip links
  * set link attributes depending on link type and router availability

* **[BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap):** props validator functions not working because of wrongful property name.

* **[BaseOptions](https://base-angewandte.github.io/base-ui-components/components/BaseOptions):**
  * wrong calculation of remaining space before row wrap.
  * improve options transition.

* **[BasePagination](https://base-angewandte.github.io/base-ui-components/components/BasePagination):** error if pagination is removed.

* **[BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):**
  * fixed `descriptionElementId` not being interpreted as variable on the `aria-describedby` attribute.
  * prevent scaling of the close icon on long titles.
  * limit the popup title to two lines and optional ellipsis.
  * enable scroll functionality on iOS.
  * refactor how initial focus element is set once when the component is opened.

* **[BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection):** pagination visible before boxes are rendered.

* **[BaseSearch](https://base-angewandte.github.io/base-ui-components/components/BaseSearch):**
  * avoid doubled events from update:is-active (BaseInput).
  * have iOS enter key on virtual keyboard displayed as 'search'.
  * on mobile blur input on keyboard enter so virtual keyboard is removed.
  * keep is-active prop in sync between BaseSearch and BaseAdvancedSearch.

* **[BaseSelectOptions](https://base-angewandte.github.io/base-ui-components/components/BaseSelectOptions):** styling broken on element wrap (small screen size).

* **[BaseSwitchButton](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton):** improve options transition.

* **[BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList):**
  * fix the `listType` prop if the component is used recursively.
  * remove unused event and non-existent method `chip-clicked` and `emitChipData`.
  * fix word-breaks for comma separated links.
  * comma moving to next line separately for link list (internal, external).
  * props validator functions not working because of wrongful property name.
  * refactor styling to BEM syntax.
  * fix chips margin-bottom.

* **docs:** fix README css import statements to structure determined in v3.
* **utils:**
  * improve `extractNestedPropertyValue()` code readability and documentation.
  * safeguard `extractNestedPropertyValue()` against property not existing in the object.
  * safeguard i18n term function against key not being provided.

## 3.1.2 (2024-01-03)


### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** add missing documentation for new filter type `chipssingle`
* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** fix default defaultFilter used if prop not set immediately
* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** include new type `chipssingle` in filter validation

## 3.1.1 (2023-10-02)


### Added

* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** add new prop `showOptionsRow` to allow for removing this element completely


### Fixed

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):** single select higher than multiselect
* saveguard i18n term function against key not being provided

## 3.1.0 (2023-09-05)


### Added

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch), [BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearchRow):** new filter config option `subsets` to indicate filter relations
* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** add `date_month_year` option to BaseDateInput
* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** make search field element optional
* **[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon):** add new icon 'institution'
* **[BaseMenuEntry](https://base-angewandte.github.io/base-ui-components/components/BaseMenuEntry), [BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList), [ BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** new slots `text-content` / `entry-text-content` and `right-side-elements` / `entry-right-side-elements`
* added new component **[BaseBreadCrumbs](https://base-angewandte.github.io/base-ui-components/components/BaseBreadCrumbs)**


### Changed

* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** improve ResizeObserver usage and disconnect unneeded observers


### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** loader set true on option select
* **[BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearchRow):** filter columns overflowing filter container
* **[BaseDropDown](https://base-angewandte.github.io/base-ui-components/components/BaseDropDown), [BaseOptions](https://base-angewandte.github.io/base-ui-components/components/BaseOptions), [ BasePagination](https://base-angewandte.github.io/base-ui-components/components/BasePagination):** add debounce to component resizeObservers
* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** 'select none' visibility incorrect
* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** add missing background in selection mode without thumbnails
* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** amount of selected entries by 'select all' button incorrect
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** field type number initial field value not set correctly
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** input field slots not working for group fields
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** use nested `dropDownLists` to allow for identical field names in field groups
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** form group field drop downs shifted to the left
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** margin of BaseToggle is not fitting all use cases
* **[BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** `showLabel` set via `fieldProps` is not working (if false)
* **styleguide:** link base-ui-icons.svg instead of copy


## 2.1.3 (2023-07-31)


### Added

* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/#basedateinput):** improvements for BaseDateInput format switch

## 2.1.2 (2023-07-24)


### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** do not switch filter on subset option select
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** OpenAPI data type `number`: initial field value not set correctly

## 2.1.1 (2023-07-13)


### Added

* **[BaseMenuEntry](https://base-angewandte.github.io/base-ui-components/components/BaseMenuEntry), [BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList), [BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** new slots `text-content` / `entry-text-content` and `right-side-elements` / `entry-right-side-elements`


## 2.1.0 (2023-07-12)


### Added

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch), [BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearchRow):** new filter config option `subsets` to indicate filter relations
* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** adding a month switch option to BaseDateInput, new prop `format` value `date_month_year`
* **[BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector):** make search field element optional with new prop `useSearch`
* **[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon):** add new icon 'institution'


### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):** loader set true on option select, causing it to never disappear
* **[BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearchRow):** filter columns overflowing filter container
* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** correct label and switch button overlap
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** use nested objects for prop `dropDownLists` to allow for identical field names in field groups
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** form group field dropdowns shifted to the left
* **[BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** date format switch label missing for new option month



## 3.0.2 (2023-06-12)

### Fixed

* **styleguide:** add base-ui-icons path for github pages


## 3.0.1 (2023-05-23)


### Fixed

* update README for css files front end project integration

## 3.0.0 (2023-05-17)

### ⚠ BREAKING CHANGE
* switch from [rollup.js](https://rollupjs.org/) and [Vue CLI](https://cli.vuejs.org/) to [Vite](https://vitejs.dev/) as build and development tool.
  In course of that, the build configuration was changed in a way that components don't need to be added as plugins via `Vue.use` anymore but can just be registered as regular components again. See [Readme](README.md) for further details on how to add components to a project.
* **[BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox):** Renaming of slots 'footerLeft' and 'footer' to 'footer-left', 'footer-right'.
* **[BaseMediaPreview](https://base-angewandte.github.io/base-ui-components/components/BaseMediaPreview):** removing the deprecated component - use [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel) instead.


### Added

* **[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon):** add new icon 'people-filled'.


### Changed
* switch from [rollup.js](https://rollupjs.org/) and [Vue CLI](https://cli.vuejs.org/) to [Vite](https://vitejs.dev/) as build and development tool.
* **styleguide:** implement new styleguide with [VuePress](https://vuepress.vuejs.org/) instead of [Vue Styleguidist](https://vue-styleguidist.github.io/).
* **[BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox):** rename footer slots
* update and rename `npm publish` pipeline
* add "exports" field to package.json.
* **[BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel), [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel):** update swiper from v6 to v9
* **[BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel), [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel):** load swiper api only when component is mounted
* **[BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel), [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel):** fix swiper init and use the native browser lazy loading feature for images
* **[BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap):** import leaflet and related plugins async
* **[BaseChip](https://base-angewandte.github.io/base-ui-components/components/BaseChip):** use BaseIcon component for remove icon


### Removed

* **[BaseMediaPreview](https://base-angewandte.github.io/base-ui-components/components/BaseMediaPreview):** remove deprecated component, use [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel) instead.
* remove obsolete update-package-exports build script.
* remove obsolete test setup and jest.config.


### Fixed

* **[BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList):** avoid separators for chip rendered links
* **[BaseBoxButton](https://base-angewandte.github.io/base-ui-components/components/BaseBoxButton):** built in plus icon not centered
* **[BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel):** no activeIndex on swiper hide
* **styleguide:** replace placeimg with picsum example images, since placeimg API not available anymore from June 2023.
* **[BaseEditControl](https://base-angewandte.github.io/base-ui-components/components/BaseEditControl):** styleguide error with `editMode` `done`
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** demo not working
* **[BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel), [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel):** clarify property descriptions
* **[BaseExpandList](https://base-angewandte.github.io/base-ui-components/components/BaseExpandList):** avoid text glitches with class 'supportive-text'
* **[BaseToolTip](https://base-angewandte.github.io/base-ui-components/components/BaseToolTip):** fix property type



## 2.0.11 (2023-05-08)


### Fixed

* **[BaseButton](https://base-angewandte.github.io/base-ui-components/#basebutton):** fix active state style in a base-button-row


## 2.0.10 (2023-05-08)


### Fixed

* **[BaseButton](https://base-angewandte.github.io/base-ui-components/#basebutton):** fix active state style


## 2.0.9 (2023-04-03)


### Added

* **[BaseChipsInput](https://base-angewandte.github.io/base-ui-components/#basechipsinput):** add additional prop `displayChipsRemove`
* **[BaseSearch](https://base-angewandte.github.io/base-ui-components/#basesearch), [BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/#baseadvancedsearchrow):** add new search type `chipssingle`


### Fixed

* **[BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/#baseadvancedsearch):** fix autocomplete malfunctioning (options not displayed, select in styleguide not working).
* **[BaseAdvancedSearchRow](https://base-angewandte.github.io/base-ui-components/#baseadvancedsearchrow):** open drop down on element click event.


## 2.0.8 (2023-03-27)

### Fixed

* **[BaseProgressBar](https://base-angewandte.github.io/base-ui-components/components/BaseProgressBar):** remove icon not emitting event

## 2.0.7 (2023-03-16)


### Fixed

* **[BaseFormGroups](https://base-angewandte.github.io/base-ui-components/components/BaseFormGroups):** add component to index file

## 2.0.6 (2023-03-07)


### Added

* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm), [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator):** handle new x-attributes for input fields , closes #2246
* **[BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput):** add/handle new properties for input fields type text/number , closes #2244
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** adding optional header element settable by new `x-attrs` field `form_group_title` and new prop `renderHeaderAs` , closes #2238
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** allow to set fieldProps per actual input field for repeatable fields , closes #1978
* **[BaseFormGroup](https://base-angewandte.github.io/base-ui-components/components/BaseFormGroup):** new wrapper component for [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) added , closes #2238


### Removed

* **[BaseDatePanel](https://base-angewandte.github.io/base-ui-components/components/BaseDatePanel):** hide component due to accessibility issues


### Fixed

* **[BaseBoxTooltip](https://base-angewandte.github.io/base-ui-components/components/BaseBoxTooltip):** also change icon color on focus and active
* **[BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel):** error if href missing in carousel list item , closes #1630
* **[BaseCheckmark](https://base-angewandte.github.io/base-ui-components/components/BaseCheckmark):** previous changes due to eslint errors now implemented correctly
* **[BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput):** remove keyboard event again added due to linter error
* **[BaseDropDown](https://base-angewandte.github.io/base-ui-components/components/BaseDropDown):** improve accessibility and existing problems with it
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** fix input field slot implementation , closes #1978
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** truly center plus icon of repeatable fields
* **[BaseFormGroups](https://base-angewandte.github.io/base-ui-components/components/BaseFormGroups):** add missing index.js file for build , closes #2238
* **[BaseHlsVideo](https://base-angewandte.github.io/base-ui-components/components/BaseHlsVideo), [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel):** accessibility improvements based on vuejs-accessibility
* **[BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput), [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput), [ BaseMapLocations](https://base-angewandte.github.io/base-ui-components/# basemaplocations):** improve and fix accessibility changes
* **[BaseSwitchButton](https://base-angewandte.github.io/base-ui-components/components/BaseSwitchButton):** fixing label input linting error


## 2.0.5 (2023-01-12)


### Added

* **[BaseToggle](https://base-angewandte.github.io/base-ui-components/components/BaseToggle)**: add prop id and internal id.
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) / [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator)**: expand prop fieldProps to take (nearly) all input component props.
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) / [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator)**: add input field slots to make BaseForm customizable + minor styling changes.
* Add automated changelog creation (via [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) set up.
* Improve documentation for [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) and [build setup](docs/development/Readme.md).

### Fixed

* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm):** remove button missing for repeatable fields.
* **[BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm)**: prioritize fieldProps set label over automated extraction from swagger json title attribute.
* **[BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList):** error on drag if list items without icon.
* [Styleguide](https://base-angewandte.github.io/base-ui-components/) is missing icons.


## 2.0.4 (2022-10-31)

### Features
* [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm): add compact view for field-groups.

### Improvements
* [BaseProgressBar](https://base-angewandte.github.io/base-ui-components/components/BaseProgressBar): display error message below progress bar.
* Decrease size of x in remove.svg to remove visual effect of it appearing larger than other icons.

### Bugfixes
* Fixing base-ui-icons path for styleguide on github pages.

## 2.0.3 (2022-10-06)

### Features
* [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel): add 'clicked' event to be able to manually trigger action on box click.

### Improvements
* [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel): improve documentation, removing unnecessary properties from example data.

### Bugfixes
* [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm): wrong default object for fieldProps, boolean field needs default value, improve adding of fieldProps to field properties.
* [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow): remove leftover test code.
* [BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput) / [BaseSearch](https://base-angewandte.github.io/base-ui-components/components/BaseSearch): prevent scaling of X remove icon.


## 2.0.2 (2022-09-28)

### Bugfixes
* [BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField): chips should not retain id (and therefore background color) after being edited.
* Fixing styleguide build linting issues.
* [BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList): drag image not displayed in Chrome.
* [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow): Drag & Drop sorting broken in Firefox.

## 2.0.1 (2022-09-21)

### Improvements

* Adding version number of base components to styleguide

### Bugfixes
* [BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch):
  * Filter row in mobile view not displayed correctly due to changes in [BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon).
  * Fixed controlled Vocabulary options row styling issues.

## 2.0.0 (2022-09-14)

### Breaking Changes
* Icons are now exchangeable and are loaded from a svg-sprite. A default sprite is shipped with the components, however the file `base-ui-icons.svg` (or a custom sprite with the icons that are used in your project, named like the icons listed in
[BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon)) must explicitly be copied to the front-end project `public` or `static` (NuxtJS) folder in order for icons to be displayed.<br>
 Also some icons were renamed:
  * `sheet-empty` --> `file-object`
  * `sheet-plus` --> `add-new-object`
* Removed deprecated component `BaseUploadBar`, please use improved component [BaseProgessBar](https://base-angewandte.github.io/base-ui-components/components/BaseProgessBar) instead.
* [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection): functionality was heavily refactored, including new dragging functionality and hiding options behind an 'Edit' button.<br>
  * Removed props because obsolete due to functionality changes: `optionButtonText`, `actionButtonText`, `cancelText`, `action`<br>
  * Also `events` were added, removed or renamed in the process, except for `submit-action`<br>
  * Button text and icon for activating/closing edit mode can be configured with `optionsButtonText` and `optionsButtonIcon`, respectively
  * Option buttons are now configurable via `actionButtonsConfig`, so if standard button elements should be used this can be used instead of the `option-buttons` slot.
  * Edit mode can be set from outside with boolean `editMode`, as can `draggable`.
  * `entryList` can now be handled via `v-model`
  * `showActionButtonBox` --> `showActionButtonBoxes`: since not one single action is active at the time but all actions may be triggered, so all buttons should be shown
  * The `.sync` modifier may now be used on `selectedList`.
  * `entryType` used for getting the `i18n` string was removed and the 'Select All/None' text needs to be set via `selectOptionsText`.
  * `usePagination` and `useExpandMode` as distinct props instead of determining pagination use and expand mode use via `maxRows` and `maxShowMoreRows` value set, respectively.
  * Slots were renamed from kebab-case to camel-case.
* [BaseOptions](https://base-angewandte.github.io/base-ui-components/components/BaseOptions): was also quite heavily refactored:
  * Boolean prop `alwaysShowOptionsButton` was removed and replaced with `useOptionsButtonOn` with the available options 'always', 'never' and 'mobile'.
  * `showAfterOptionsInline` was removed and replaced by `showAfterOptionsBelow`, thereby reversing the setting and making the display of slot `afterOptions` below the default behaviour.
  * `buttonText` was renamed to `optionsButtonText` to clarify purpose and now takes an array of object instead of a string with separate options for options hidden and options visible state.
  * Options displayed can now be configured via prop `optionsConfig` if slot is not used.
  * Options button icon is also configurable via `optionsButtonIcon`, taking an object with separate values for options visible and options hidden state.
  * Event `options-toggle` was renamed to `update:show-options` to emit to parent when options button is triggered. Can now be used with the `.sync` modifier.
  * New event `option-triggered` emits an event to the parent when an option button set via `optionsConfig` is triggered with the `optionsConfig` object in question provided as event value.
* [BaseExpandRow](https://base-angewandte.github.io/base-ui-components/components/BaseExpandRow):
  * Prop `label` --> `title`.
  * Removed default string 'Label' for prop `title` (former `label`).
* [BaseBox](https://base-angewandte.github.io/base-ui-components/components/BaseBox): improve prop naming `boxType` --> `renderElementAs`.
* [BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap): added support for multiple locations. `latLong` prop is now an array and was renamed to `marker`. Also numerous new props were added for improved configurability.
* [BaseAutocompleteInput](https://base-angewandte.github.io/base-ui-components/components/BaseAutocompleteInput): the component was refactored to reuse existing components like [BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput) and [BaseDropDownList](https://base-angewandte.github.io/base-ui-components/components/BaseDropDownList) and to unify events and slots with other input components.
  * Event `selected` was renamed to `fetch-drop-down-entries`.
  * Event `autocomplete` was renamed to `input`.
  * As for other components props `identifierPropertyName` and `labelPropertyName` are replacing `objectProp`.
  * Many additional props to improve usage and unify with other input elements.
* The `props` `objectProp` and `identifier` used to specify the relevant
properties in a passed object were replaced and unified across all components with `labelPropertyName` or `valuePropertyName` (depending on how the value is used) and
`identifierPropertyName` respectively.
* [BaseMultilineTextInput](https://base-angewandte.github.io/base-ui-components/components/BaseMultilineTextInput):
  * No `default` slot anymore but unification with other input components (see Features).
  * Event `text-input` removed and using `input` instead to unify with other input components.
* [BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox): `boxSize` default values changed to `auto`.
* [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow):
  * Up to now the data property `roles` was hardcoded in the component - now all references to `roles` was removed and prop `additionalPropertyName` now allows a custom property to be chosen as value for the additional chips input field.
  * Also props `roleOptions` and `rolesPlaceholder` were renamed to
  `additionalPropOptions` and `additionalPropPlaceholder` respectively.
  * Event `list-change` was renamed to `selected-changed` to harmonize it with other chips input components.
  * `valuePropertyName` was renamed to `labelPropertyName` to better reflect the use of the variable.
  * `identifierPropertyName` and `labelPropertyName` (former `valuePropertyName`) default string value was changed from emtpy string to 'id' and 'label' respectively.
* [BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList): rename misleading prop name `selected` to `selectActive`.
* [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):
  * Removed events `show-drop-down` and `hide-drop-down`.
  * Remove prop `chipsInline` that was replaced by `displayChipsInline` to clarify purpose previously.
  * Event `selected` was renamed to `selected-changed`.
* [BaseDropDownList](https://base-angewandte.github.io/base-ui-components/components/BaseDropDownList): remove default text string 'No options available' for prop `dropDownNoOptionsInfo`.
* Numerous internal CSS classes were renamed to fit the general naming structure. This should not be of any concern if you are just using the components in your project but in case you are targeting any of these classes directly, things might break.
### Features and Improvements

* New components:
  * [BaseAdvancedSearch](https://base-angewandte.github.io/base-ui-components/components/BaseAdvancedSearch): a component to allow for all kind of searches, fulltext, controlled vocabulary, autocomplete, dates with the help of filters.
  * [BaseEntrySelector](https://base-angewandte.github.io/base-ui-components/components/BaseEntrySelector): A component to select options from a list, including search, options and pagination elements.
  * [BaseMapLocations](https://base-angewandte.github.io/base-ui-components/components/BaseMapLocations): a component using [BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap) for displaying locations on a map, a list of addresses and allows for interactions between both.
  * [BaseExpandList](https://base-angewandte.github.io/base-ui-components/components/BaseExpandList): render a list in with sublists in expandable containers.
  * [BaseEditControl](https://base-angewandte.github.io/base-ui-components/components/BaseEditControl): header with control buttons for edit mode functionality.
  * [BaseImage](https://base-angewandte.github.io/base-ui-components/components/BaseImage): component to render an image and optional lazy loading.
  * [BaseMediaCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseMediaCarousel): Component allowing sliding through images, audio, video (currently only hls format) and files.
  * [BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink): component to render different kind of links.
  * [BaseToolTip](https://base-angewandte.github.io/base-ui-components/components/BaseToolTip): a tooltip box.
  * [BaseUploadPopUp](https://base-angewandte.github.io/base-ui-components/components/BaseUploadPopUp): pop up component for upload functionality.
* All form input components (e.g. [BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput)) received additional `props` for handling errors/invalid input and disabled state:
`disabled`, `invalid`, `errorMessage`, `showErrorIcon`, `clearable`. These properties can also be conveyed via [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator) and [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) respectively,
either directly for all input fields (`clearable`, `showErrorIcon`) or for individual fields via `fieldProps` (`required`, `invalid`, `errorMessage`).
* Form input components received `slots` for additional customization possibilities: `label-addition`, `pre-input-field`, `input-field-addition-before`, `input-field-inline-before`, `input-field-addition-after`, `post-input-field`, `error-icon`, `remove-icon`, `below-input`.<br>
  For a demonstration see [BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField).
* [BaseDropDownList](https://base-angewandte.github.io/base-ui-components/components/BaseDropDownList): add `prop` `hasSubOptions` to allow for nested lists.
* [BaseSearch](https://base-angewandte.github.io/base-ui-components/components/BaseSearch):
  * Make input element exchangeable with prop `type` which takes the values `text`, `date`, `daterange`, `chips` and `controlled`. This also comes with number of new props (e.g. `labelPropertyName`, `identifierPropertyName`, `isLoading`).
  * Add `language` prop to be able to pass it through to nested components.
* [BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput): new prop `useFormFieldStyling` (default: `true`) to make form field styling optional.
* [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection):
  * Add 'Show More'/'Show less' boxes functionality.
  * Added props `usePaginationLinkElement` to be able to use framework specific link elements
  and `editModeWhiteBackground` to have a white background in edit mode.
* [BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField): new slot `chip` to allow for custom chips.
* [BaseChipsInputField](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInputField) / [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput):
new prop `chipsEditable` to allow chips to be edited. (CAVEAT: if this prop is set `true` chips can not be `draggable` and info box pop up can not be used anymore).
* [BaseIcon](https://base-angewandte.github.io/base-ui-components/components/BaseIcon): new icons in default icon library (e.g. 'share', 'archive-*', 'subscribe').
* New SCSS variables `--app-color-secondary` and `--keyboard-active-color`.
* [BaseMenuList](https://base-angewandte.github.io/base-ui-components/components/BaseMenuList) / [BaseMenuEntry](https://base-angewandte.github.io/base-ui-components/components/BaseMenuEntry):
  * New slot `thumbnails` for custom and in number unlimited icon choices.
  * Add new prop `disabled` to show single entries disabled.
* [BaseExpandBox](https://base-angewandte.github.io/base-ui-components/components/BaseExpandBox): extended props, events and slots for improved usability.
* Lazy loading of images in [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel) and [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection) and optional in [BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox).
* [BaseButton](https://base-angewandte.github.io/base-ui-components/components/BaseButton):
  * New option for `iconPosition`: `top`.
  * Improve visibility of disabled secondary button.
  * Allow for button text to be optional and add `text` slot for improved customization.
  * Option to set the `svg` `title` attribute with prop `iconTitle`.
* [BaseInput](https://base-angewandte.github.io/base-ui-components/components/BaseInput):
  * New input types available: `password`, `email`, `url`.
  * New slot `input` to provide a custom input element.
  * Additional prop `inputClass` to ease custom input field styling.
  * New prop `loadable` to reserve space for loader of components based on this component.
* [BaseToggle](https://base-angewandte.github.io/base-ui-components/components/BaseToggle):
  * Adding a `disabled` state, settable via prop.
  * Prop `hideLabel` to hide the toggle label.
  * New slot (`default`) to add elements below the toggle and added prop `bindSlotToState` to only show slot
  content if component is in checked state.
* [BaseMap](https://base-angewandte.github.io/base-ui-components/components/BaseMap): add support for TMS, WMS services, can be specified via prop `tileLayerService`.
* [BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox):
  * Add props for adding icons visible if no text (`icon`) or if on hover if medium is playable (audio, video) (`playIcon`).
  * Add prop `iconSize`.
  * Add option to only display title on hover (prop `showTitleOnHover`).
  * Additional slots `footer` and `footerLeft` to add additional elements like icons.
  * Add props `renderElementAs` and `linkTo` in order to use framework specific link elements.
  * Have `title` covering two lines if there is no subtitle.
  * Add prop `draggable` to improve styling when elements are draggable.
* [BaseBox](https://base-angewandte.github.io/base-ui-components/components/BaseBox):
  * Additional prop `boxShadowSize` with values `small` or `large` to increase shadow when used it edit mode in different components.
  * Added prop `additionalAttributes` to be able to add additional element HTML attributes.
* [BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList): several additional props to improve customizability and added functionality:
  * Display can be rendered in 2 columns.
  * Value - label pairs can be displayed vertically or horizontally (`listType`).
  * Prop `renderLinkAs` to specify if a specialized framework element should be used.
  * Improved ability to display different kind of links or tooltips (see also [BaseLink](https://base-angewandte.github.io/base-ui-components/components/BaseLink) and [BaseToolTip](https://base-angewandte.github.io/base-ui-components/components/BaseToolTip)).
  * Slot `tooltip` to add tooltip content.
  * Improved documentation on how data is rendered based on data structure.
  * Also allow the `data` property in the data structure rendered as `<dt>` element to be a single object instead of an array.
  * `label` property of the `data` prop can now be a string or an object with ISO 639-1 strings as object properties (e.g. { en: 'x', de: 'y' }).
* [BasePagination](https://base-angewandte.github.io/base-ui-components/components/BasePagination):
  * Additional prop `useLinkElement` to specify a framework specific element that should be used.
  * Switch from window `resize` event listener to `ResizeObserver` to calculate correct number of displayed numbers.
* [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel):
  * Add prop `renderLinkElementAs` and use framework specific link elements instead of native link element.
  * Emit an event `initialized` as soon as [swiper](https://swiperjs.com) is initialized.
* [BaseExpandRow](https://base-angewandte.github.io/base-ui-components/components/BaseExpandRow): additional props added for improved usability and new functionality like selectability.
* [BaseForm](https://base-angewandte.github.io/base-ui-components/components/BaseForm) / [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator): adding [BaseToggle](https://base-angewandte.github.io/base-ui-components/components/BaseToggle) to `fieldType` options (`boolean`).
* [BaseFormFieldCreator](https://base-angewandte.github.io/base-ui-components/components/BaseFormFieldCreator): adding slot content to [BaseToggle](https://base-angewandte.github.io/base-ui-components/components/BaseToggle) based on `x-attrs` property `subtext`, which will display an URL link when toggle is `true`.
* [BaseSelectOptions](https://base-angewandte.github.io/base-ui-components/components/BaseSelectOptions):
  * Additional props `reverse` to show relevant elements in reverse order
  and `selectAllDisabled` to disable the 'Select All' button.
  * Add hover/focus state to select all/none button.
* [BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp):
  * Add prop `buttonRightDisabled` to be able to disable the e.g. save button.
  * Prop `fullscreenOnMobile` to render component fullscreen on mobile.
* [BaseLoader](https://base-angewandte.github.io/base-ui-components/components/BaseLoader): adding prop `hide` to hide the actual loader element.
* [BaseHlsVideo](https://base-angewandte.github.io/base-ui-components/components/BaseHlsVideo): adding prop `startLevel` to define initial video size.
* [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow): additional prop `addNewChipText` to have same functionality as  in [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput) available.
* Added lazy loading of components when they are only used conditionally.
* Updated dependencies and refactored sass incompatible division operator.
* Make `package.json` `npm run` commands using shell scripts executable on windows.
* Adding deprecation notice to [BaseMediaPreview](https://base-angewandte.github.io/base-ui-components/components/BaseMediaPreview).
* Use `KeyboardEvent` `key` property instead of `code` in all relevant components.
* Remove leftover `KeyboardEvent` `keyCode` property used in [BaseAutocompleteInput](https://base-angewandte.github.io/base-ui-components/components/BaseAutocompleteInput) and [BasePagination](https://base-angewandte.github.io/base-ui-components/components/BasePagination) since
  this is [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
* Accessibility related improvements:
  * [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection): make drag functionality accessible and improve screen reader text
  * For all form input components the boolean prop `required` was added used in `aria-required`.
  * [BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput): use custom input element to be able to add aria related attributes.


### Bug Fixes

* [BaseCarousel](https://base-angewandte.github.io/base-ui-components/components/BaseCarousel):
  * Show pagination only when needed.
  * Add subtext array handling.
  * Update [swiper](https://swiperjs.com) component when data change.
* [BaseTextList](https://base-angewandte.github.io/base-ui-components/components/BaseTextList): minor styling adaptions.
* [BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput): add fadeout.
* [BaseChipsInput](https://base-angewandte.github.io/base-ui-components/components/BaseChipsInput): make single select arrow clickable to open/close drop down
* [BasePagination](https://base-angewandte.github.io/base-ui-components/components/BasePagination): upgrade to Vue 2.6.13 which solves warning with `.native` modifier and revert changes made due to this issue.
* [BaseResultBoxSection](https://base-angewandte.github.io/base-ui-components/components/BaseResultBoxSection): fix incorrect margin between entries in ssr-mode.
* [BasePopUp](https://base-angewandte.github.io/base-ui-components/components/BasePopUp): optimize for mobile view.
* [BaseCheckMark](https://base-angewandte.github.io/base-ui-components/components/BaseCheckMark): fix radio button functionality and styling.
* [BaseImageBox](https://base-angewandte.github.io/base-ui-components/components/BaseImageBox): text-only, multiple line text breaks oddly (Safari 15.4).
* [BaseDateInput](https://base-angewandte.github.io/base-ui-components/components/BaseDateInput) / [BaseDatePanel](https://base-angewandte.github.io/base-ui-components/components/BaseDatePanel): fix missing picker localization.
* [BaseDropDownList](https://base-angewandte.github.io/base-ui-components/components/BaseDropDownList): fix styling of no options slot.
* [BaseChipsBelow](https://base-angewandte.github.io/base-ui-components/components/BaseChipsBelow): dragging only working once on Safari.
