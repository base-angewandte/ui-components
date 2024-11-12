(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1451:function(t,e,n){"use strict";n.r(e);var i=n(34),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"basedropdownlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basedropdownlist"}},[t._v("#")]),t._v(" BaseDropDownList")]),t._v(" "),e("blockquote",[e("p",[t._v("a multipurpose drop down list")])]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dropDownOptions")]),t._v(" "),e("td",[t._v("list of options to select from")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("identifierPropertyName")]),t._v(" "),e("td",[t._v("specify the name of a property that can be used as identifier"),e("br"),t._v("// TODO: need handling if no identifier provided!!")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'id'")])]),t._v(" "),e("tr",[e("td",[t._v("labelPropertyName")]),t._v(" "),e("td",[t._v("specify the name of the property that should be displayed")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'value'")])]),t._v(" "),e("tr",[e("td",[t._v("activeOption")]),t._v(" "),e("td",[t._v("specify the currently active option (will have gray background"),e("br"),t._v("if not disabled by setting "),e("code",[t._v("activeStyled")]),t._v(" "),e("code",[t._v("false")]),t._v(") for example for"),e("br"),t._v("combination with input and keyboard use")]),t._v(" "),e("td",[t._v("object|string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("() => ({})")])]),t._v(" "),e("tr",[e("td",[t._v("selectedOption")]),t._v(" "),e("td",[t._v("specify the currently selected option (will appear in app color if not disabled"),e("br"),t._v("by setting "),e("code",[t._v("selectStyled")]),t._v(" "),e("code",[t._v("false")]),t._v(", but also used for "),e("code",[t._v("aria-selected")]),t._v(")."),e("br"),t._v(" the "),e("code",[t._v(".sync")]),t._v(" modifier can be used here")]),t._v(" "),e("td",[t._v("object|string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("() => ({})")])]),t._v(" "),e("tr",[e("td",[t._v("listId")]),t._v(" "),e("td",[t._v("in order to link the drop down body to an <input> element specify a list"),e("br"),t._v("id and use the "),e("code",[t._v("list")]),t._v(" attribute on the input")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("listBodyStyle")]),t._v(" "),e("td",[t._v("add styling to the list body (e.g. max-height)")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("{}")])]),t._v(" "),e("tr",[e("td",[t._v("activeStyled")]),t._v(" "),e("td",[t._v("flag if the currently active element should be styled"),e("br"),t._v("(gray background)")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("selectStyled")]),t._v(" "),e("td",[t._v("flag if the currently selected entry should be styled"),e("br"),t._v("(only makes sense for single select, color: app-color)")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("displayAsDropDown")]),t._v(" "),e("td",[t._v("if "),e("code",[t._v("true")]),t._v(" the element will be styled as a drop down element with"),e("br"),t._v("box-shadow")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("dropDownNoOptionsInfo")]),t._v(" "),e("td",[t._v("message displayed when no selectable options are available")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("language")]),t._v(" "),e("td",[t._v("specify a language (ISO 639-1) (used for label if label is language specific object"),e("br"),t._v("e.g. "),e("code",[t._v("{ de: 'xxx', en: 'yyy' }")])]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("hasSubOptions")]),t._v(" "),e("td",[t._v("this adds the possibility of nested options (thus a second list nested within the first one),"),e("br"),t._v("if this is set "),e("code",[t._v("true")]),t._v(" this will have consequences for scroll adjustment of list on keyboard use"),e("br"),t._v("and how the active option is determined (the identifier property will be used)")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("useCustomOptionActiveBackgroundColor")]),t._v(" "),e("td",[t._v("in case a custom option background should be set to the currently active option"),e("br"),t._v(" (this will also apply if "),e("code",[t._v("activeStyled")]),t._v(" is set "),e("code",[t._v("false")]),t._v(")."),e("br"),t._v("if you want to use this option please set the css variable "),e("code",[t._v("--option-background")]),e("br"),t._v("in your app")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("useHighlightStringMatch")]),t._v(" "),e("td",[t._v("set true if option characters matching a string provided in "),e("code",[t._v("highlightStringMatch")]),e("br"),t._v(" should be highlighted")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("highlightStringMatch")]),t._v(" "),e("td",[t._v("if "),e("code",[t._v("useHighlightStringMatch")]),t._v(" is set to "),e("code",[t._v("true")]),t._v(", provide a string to match with the"),e("br"),t._v(" option label here")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("highlightStringTags")]),t._v(" "),e("td",[t._v("provide tag names to style the matched characters"),e("br"),t._v(" (without '<' and '>', e.g. ['b'] for <b>)")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[]")])])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event name")]),t._v(" "),e("th",[t._v("Properties")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("update:selected-option")]),t._v(" "),e("td",[e("strong",[t._v("undefined")]),t._v(" "),e("code",[t._v("Object")]),t._v(" - the selected option")]),t._v(" "),e("td",[t._v("inform parent if option was selected by mouse click"),e("br"),t._v("(the .sync modifier on prop selectedOption can be used)")])])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("before-list")]),t._v(" "),e("td",[t._v("for adding elements before the options list")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("option")]),t._v(" "),e("td",[t._v("a slot to customize every single option (e.g. display of information other than "),e("code",[t._v("[valuePropertyName]")]),t._v(")")]),t._v(" "),e("td",[e("strong",[t._v("option")]),t._v(" "),e("code",[t._v("Object")]),t._v(" - the current option in the options list")])]),t._v(" "),e("tr",[e("td",[t._v("no-options")]),t._v(" "),e("td",[t._v("customize what is displayed when no drop down options are available")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("after-list")]),t._v(" "),e("td",[t._v("to add elements after the options list")]),t._v(" "),e("td")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("p",[t._v("A list in drop down style. Click the button to display!")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div class="drop-down-test">\n    <div class="button-display-area">\n      <BaseButton\n        text="toggle Dropdown"\n        @clicked="showDropDown = !showDropDown"\n      />\n      <div>\n        {{ "Selected Option: " + selected.value }}\n      </div>\n    </div>\n\n    <BaseDropDownList\n      v-if="showDropDown"\n      :selected-option.sync="selected"\n      :select-styled="true"\n      :drop-down-options="list"\n      list-id="aSimpleTestList"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      showDropDown: false,\n      selected: {},\n      list: [\n        {\n          value: "Test 1",\n          id: "1",\n        },\n        {\n          value: "Test 12",\n          id: "12",\n        },\n        {\n          value: "Test 13",\n          id: "13",\n        },\n        {\n          value: "Test 14",\n          id: "14",\n        },\n      ],\n    };\n  },\n};\n<\/script>\n\n<style>\n.drop-down-test {\n  background: white;\n}\n.button-display-area {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n</style>\n',requires:{}}})],1),e("p",[t._v("An example connected with an input field (displayAsDropDown: false)")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div>\n    <BaseChipsInputField\n      v-model="input"\n      :show-label="false"\n      :selected-list.sync="selectedList"\n      drop-down-list-id="aSimpleTestList"\n      identifier-property-name="id"\n      label-property-name="value"\n      placeholder="Add new chips via enter"\n      label="A basic input for drop down"\n      @keydown.up.down.prevent="navigate"\n      @keydown.enter.prevent="addChipByKeyboard"\n    />\n    <BaseDropDownList\n      :active-option.sync="active"\n      :drop-down-options="optionsListInt"\n      :display-as-drop-down="false"\n      list-id="aSimpleTestList"\n      class="base-drop-down-list-example"\n      @update:selected-option="addChipByClick"\n    >\n      <template #before-list>\n        <div class="slot">This is a slot before the list</div>\n      </template>\n      <template #after-list>\n        <div class="slot">This is a slot after the list</div>\n      </template>\n      <template #no-options>\n        Add a custom text or elements when no options are available via\n        \'no-options\' slot\n      </template>\n      <template #option="items">\n        <div class="option">\n          {{ items.option.value\n          }}<span class="customized-option"\n            >this is customized via option slot!\'</span\n          >\n        </div>\n      </template>\n    </BaseDropDownList>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      input: "",\n      active: {},\n      selectedList: [],\n      optionsList: [\n        {\n          value: "Lion",\n          id: "1",\n        },\n        {\n          value: "Lioness",\n          id: "12",\n        },\n        {\n          value: "Tiger",\n          id: "13",\n        },\n        {\n          value: "Elephant",\n          id: "14",\n        },\n      ],\n    };\n  },\n  computed: {\n    optionsListInt() {\n      return this.optionsList\n        .filter(\n          (option) =>\n            !this.selectedList.map((sel) => sel.id).includes(option.id)\n        )\n        .filter((option) =>\n          option.value.toLowerCase().includes(this.input.toLowerCase())\n        );\n    },\n  },\n  watch: {\n    optionsListInt() {\n      if (this.active && Object.keys(this.active).length) {\n        this.active = this.optionsListInt.length\n          ? this.optionsListInt[0]\n          : null;\n      }\n    },\n  },\n  methods: {\n    addChipByKeyboard() {\n      if (this.active) {\n        this.selectedList.push(this.active);\n        this.input = "";\n      }\n    },\n    addChipByClick(option) {\n      this.selectedList.push(option);\n      this.input = "";\n    },\n    navigate(event) {\n      const currentIndex = this.optionsListInt.indexOf(this.active);\n      const listLength = this.optionsListInt.length;\n      if (event.key === "ArrowUp") {\n        const newIndex = currentIndex - 1;\n        this.active =\n          newIndex >= 0\n            ? this.optionsListInt[currentIndex - 1]\n            : this.optionsListInt[listLength - 1];\n      } else if (event.key === "ArrowDown") {\n        const newIndex = currentIndex + 1;\n        this.active = this.optionsListInt[newIndex < listLength ? newIndex : 0];\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.base-drop-down-list-example {\n  max-width: 100%;\n  border: 1px solid lightgrey;\n}\n.slot {\n  background: lightblue;\n  padding: 0 16px;\n  line-height: 32px;\n}\n.option {\n  padding: 0 16px;\n}\n.customized-option {\n  color: red;\n  margin-left: 16px;\n}\n</style>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);