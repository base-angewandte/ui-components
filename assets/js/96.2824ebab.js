(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1218:function(i,s){},1278:function(i,s,r){"use strict";r(650)},1294:function(i,s,r){"use strict";r(1279),r(1280);var t={data:function(){return{showCode:!1}},methods:{clicked:function(){this.showCode=!this.showCode}}},n=(r(1278),r(34)),e=Object(n.a)(t,(function(){var i=this._self._c;return i("div",{staticClass:"preview-code"},[i("div",{staticClass:"preview block"},[this._t("preview")],2),this._v(" "),i("div",{staticClass:"editor block"},[i("BaseButton",{staticClass:"editor__button",attrs:{text:"".concat(this.showCode?"Hide":"Show"," code"),icon:"drop-down","icon-position":"right"},on:{clicked:this.clicked}}),this._v(" "),this.showCode?[this._t("editor")]:this._e()],2)])}),[],!1,null,"06267c72",null);s.a=e.exports},552:function(i,s){function r(i){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}r.keys=function(){return[]},r.resolve=r,i.exports=r,r.id=552},650:function(i,s,r){},769:function(i,s,r){var t={"./Binary_Property/ASCII.js":770,"./Binary_Property/ASCII_Hex_Digit.js":771,"./Binary_Property/Alphabetic.js":772,"./Binary_Property/Any.js":773,"./Binary_Property/Assigned.js":774,"./Binary_Property/Bidi_Control.js":775,"./Binary_Property/Bidi_Mirrored.js":776,"./Binary_Property/Case_Ignorable.js":777,"./Binary_Property/Cased.js":778,"./Binary_Property/Changes_When_Casefolded.js":779,"./Binary_Property/Changes_When_Casemapped.js":780,"./Binary_Property/Changes_When_Lowercased.js":781,"./Binary_Property/Changes_When_NFKC_Casefolded.js":782,"./Binary_Property/Changes_When_Titlecased.js":783,"./Binary_Property/Changes_When_Uppercased.js":784,"./Binary_Property/Dash.js":785,"./Binary_Property/Default_Ignorable_Code_Point.js":786,"./Binary_Property/Deprecated.js":787,"./Binary_Property/Diacritic.js":788,"./Binary_Property/Emoji.js":789,"./Binary_Property/Emoji_Component.js":790,"./Binary_Property/Emoji_Modifier.js":791,"./Binary_Property/Emoji_Modifier_Base.js":792,"./Binary_Property/Emoji_Presentation.js":793,"./Binary_Property/Extended_Pictographic.js":794,"./Binary_Property/Extender.js":795,"./Binary_Property/Grapheme_Base.js":796,"./Binary_Property/Grapheme_Extend.js":797,"./Binary_Property/Hex_Digit.js":798,"./Binary_Property/IDS_Binary_Operator.js":799,"./Binary_Property/IDS_Trinary_Operator.js":800,"./Binary_Property/ID_Continue.js":801,"./Binary_Property/ID_Start.js":802,"./Binary_Property/Ideographic.js":803,"./Binary_Property/Join_Control.js":804,"./Binary_Property/Logical_Order_Exception.js":805,"./Binary_Property/Lowercase.js":806,"./Binary_Property/Math.js":807,"./Binary_Property/Noncharacter_Code_Point.js":808,"./Binary_Property/Pattern_Syntax.js":809,"./Binary_Property/Pattern_White_Space.js":810,"./Binary_Property/Quotation_Mark.js":811,"./Binary_Property/Radical.js":812,"./Binary_Property/Regional_Indicator.js":813,"./Binary_Property/Sentence_Terminal.js":814,"./Binary_Property/Soft_Dotted.js":815,"./Binary_Property/Terminal_Punctuation.js":816,"./Binary_Property/Unified_Ideograph.js":817,"./Binary_Property/Uppercase.js":818,"./Binary_Property/Variation_Selector.js":819,"./Binary_Property/White_Space.js":820,"./Binary_Property/XID_Continue.js":821,"./Binary_Property/XID_Start.js":822,"./General_Category/Cased_Letter.js":823,"./General_Category/Close_Punctuation.js":824,"./General_Category/Connector_Punctuation.js":825,"./General_Category/Control.js":826,"./General_Category/Currency_Symbol.js":827,"./General_Category/Dash_Punctuation.js":828,"./General_Category/Decimal_Number.js":829,"./General_Category/Enclosing_Mark.js":830,"./General_Category/Final_Punctuation.js":831,"./General_Category/Format.js":832,"./General_Category/Initial_Punctuation.js":833,"./General_Category/Letter.js":834,"./General_Category/Letter_Number.js":835,"./General_Category/Line_Separator.js":836,"./General_Category/Lowercase_Letter.js":837,"./General_Category/Mark.js":838,"./General_Category/Math_Symbol.js":839,"./General_Category/Modifier_Letter.js":840,"./General_Category/Modifier_Symbol.js":841,"./General_Category/Nonspacing_Mark.js":842,"./General_Category/Number.js":843,"./General_Category/Open_Punctuation.js":844,"./General_Category/Other.js":845,"./General_Category/Other_Letter.js":846,"./General_Category/Other_Number.js":847,"./General_Category/Other_Punctuation.js":848,"./General_Category/Other_Symbol.js":849,"./General_Category/Paragraph_Separator.js":850,"./General_Category/Private_Use.js":851,"./General_Category/Punctuation.js":852,"./General_Category/Separator.js":853,"./General_Category/Space_Separator.js":854,"./General_Category/Spacing_Mark.js":855,"./General_Category/Surrogate.js":856,"./General_Category/Symbol.js":857,"./General_Category/Titlecase_Letter.js":858,"./General_Category/Unassigned.js":859,"./General_Category/Uppercase_Letter.js":860,"./Property_of_Strings/Basic_Emoji.js":861,"./Property_of_Strings/Emoji_Keycap_Sequence.js":862,"./Property_of_Strings/RGI_Emoji.js":863,"./Property_of_Strings/RGI_Emoji_Flag_Sequence.js":864,"./Property_of_Strings/RGI_Emoji_Modifier_Sequence.js":865,"./Property_of_Strings/RGI_Emoji_Tag_Sequence.js":866,"./Property_of_Strings/RGI_Emoji_ZWJ_Sequence.js":867,"./Script/Adlam.js":868,"./Script/Ahom.js":869,"./Script/Anatolian_Hieroglyphs.js":870,"./Script/Arabic.js":871,"./Script/Armenian.js":872,"./Script/Avestan.js":873,"./Script/Balinese.js":874,"./Script/Bamum.js":875,"./Script/Bassa_Vah.js":876,"./Script/Batak.js":877,"./Script/Bengali.js":878,"./Script/Bhaiksuki.js":879,"./Script/Bopomofo.js":880,"./Script/Brahmi.js":881,"./Script/Braille.js":882,"./Script/Buginese.js":883,"./Script/Buhid.js":884,"./Script/Canadian_Aboriginal.js":885,"./Script/Carian.js":886,"./Script/Caucasian_Albanian.js":887,"./Script/Chakma.js":888,"./Script/Cham.js":889,"./Script/Cherokee.js":890,"./Script/Chorasmian.js":891,"./Script/Common.js":892,"./Script/Coptic.js":893,"./Script/Cuneiform.js":894,"./Script/Cypriot.js":895,"./Script/Cypro_Minoan.js":896,"./Script/Cyrillic.js":897,"./Script/Deseret.js":898,"./Script/Devanagari.js":899,"./Script/Dives_Akuru.js":900,"./Script/Dogra.js":901,"./Script/Duployan.js":902,"./Script/Egyptian_Hieroglyphs.js":903,"./Script/Elbasan.js":904,"./Script/Elymaic.js":905,"./Script/Ethiopic.js":906,"./Script/Georgian.js":907,"./Script/Glagolitic.js":908,"./Script/Gothic.js":909,"./Script/Grantha.js":910,"./Script/Greek.js":911,"./Script/Gujarati.js":912,"./Script/Gunjala_Gondi.js":913,"./Script/Gurmukhi.js":914,"./Script/Han.js":915,"./Script/Hangul.js":916,"./Script/Hanifi_Rohingya.js":917,"./Script/Hanunoo.js":918,"./Script/Hatran.js":919,"./Script/Hebrew.js":920,"./Script/Hiragana.js":921,"./Script/Imperial_Aramaic.js":922,"./Script/Inherited.js":923,"./Script/Inscriptional_Pahlavi.js":924,"./Script/Inscriptional_Parthian.js":925,"./Script/Javanese.js":926,"./Script/Kaithi.js":927,"./Script/Kannada.js":928,"./Script/Katakana.js":929,"./Script/Kawi.js":930,"./Script/Kayah_Li.js":931,"./Script/Kharoshthi.js":932,"./Script/Khitan_Small_Script.js":933,"./Script/Khmer.js":934,"./Script/Khojki.js":935,"./Script/Khudawadi.js":936,"./Script/Lao.js":937,"./Script/Latin.js":938,"./Script/Lepcha.js":939,"./Script/Limbu.js":940,"./Script/Linear_A.js":941,"./Script/Linear_B.js":942,"./Script/Lisu.js":943,"./Script/Lycian.js":944,"./Script/Lydian.js":945,"./Script/Mahajani.js":946,"./Script/Makasar.js":947,"./Script/Malayalam.js":948,"./Script/Mandaic.js":949,"./Script/Manichaean.js":950,"./Script/Marchen.js":951,"./Script/Masaram_Gondi.js":952,"./Script/Medefaidrin.js":953,"./Script/Meetei_Mayek.js":954,"./Script/Mende_Kikakui.js":955,"./Script/Meroitic_Cursive.js":956,"./Script/Meroitic_Hieroglyphs.js":957,"./Script/Miao.js":958,"./Script/Modi.js":959,"./Script/Mongolian.js":960,"./Script/Mro.js":961,"./Script/Multani.js":962,"./Script/Myanmar.js":963,"./Script/Nabataean.js":964,"./Script/Nag_Mundari.js":965,"./Script/Nandinagari.js":966,"./Script/New_Tai_Lue.js":967,"./Script/Newa.js":968,"./Script/Nko.js":969,"./Script/Nushu.js":970,"./Script/Nyiakeng_Puachue_Hmong.js":971,"./Script/Ogham.js":972,"./Script/Ol_Chiki.js":973,"./Script/Old_Hungarian.js":974,"./Script/Old_Italic.js":975,"./Script/Old_North_Arabian.js":976,"./Script/Old_Permic.js":977,"./Script/Old_Persian.js":978,"./Script/Old_Sogdian.js":979,"./Script/Old_South_Arabian.js":980,"./Script/Old_Turkic.js":981,"./Script/Old_Uyghur.js":982,"./Script/Oriya.js":983,"./Script/Osage.js":984,"./Script/Osmanya.js":985,"./Script/Pahawh_Hmong.js":986,"./Script/Palmyrene.js":987,"./Script/Pau_Cin_Hau.js":988,"./Script/Phags_Pa.js":989,"./Script/Phoenician.js":990,"./Script/Psalter_Pahlavi.js":991,"./Script/Rejang.js":992,"./Script/Runic.js":993,"./Script/Samaritan.js":994,"./Script/Saurashtra.js":995,"./Script/Sharada.js":996,"./Script/Shavian.js":997,"./Script/Siddham.js":998,"./Script/SignWriting.js":999,"./Script/Sinhala.js":1e3,"./Script/Sogdian.js":1001,"./Script/Sora_Sompeng.js":1002,"./Script/Soyombo.js":1003,"./Script/Sundanese.js":1004,"./Script/Syloti_Nagri.js":1005,"./Script/Syriac.js":1006,"./Script/Tagalog.js":1007,"./Script/Tagbanwa.js":1008,"./Script/Tai_Le.js":1009,"./Script/Tai_Tham.js":1010,"./Script/Tai_Viet.js":1011,"./Script/Takri.js":1012,"./Script/Tamil.js":1013,"./Script/Tangsa.js":1014,"./Script/Tangut.js":1015,"./Script/Telugu.js":1016,"./Script/Thaana.js":1017,"./Script/Thai.js":1018,"./Script/Tibetan.js":1019,"./Script/Tifinagh.js":1020,"./Script/Tirhuta.js":1021,"./Script/Toto.js":1022,"./Script/Ugaritic.js":1023,"./Script/Vai.js":1024,"./Script/Vithkuqi.js":1025,"./Script/Wancho.js":1026,"./Script/Warang_Citi.js":1027,"./Script/Yezidi.js":1028,"./Script/Yi.js":1029,"./Script/Zanabazar_Square.js":1030,"./Script_Extensions/Adlam.js":1031,"./Script_Extensions/Ahom.js":1032,"./Script_Extensions/Anatolian_Hieroglyphs.js":1033,"./Script_Extensions/Arabic.js":1034,"./Script_Extensions/Armenian.js":1035,"./Script_Extensions/Avestan.js":1036,"./Script_Extensions/Balinese.js":1037,"./Script_Extensions/Bamum.js":1038,"./Script_Extensions/Bassa_Vah.js":1039,"./Script_Extensions/Batak.js":1040,"./Script_Extensions/Bengali.js":1041,"./Script_Extensions/Bhaiksuki.js":1042,"./Script_Extensions/Bopomofo.js":1043,"./Script_Extensions/Brahmi.js":1044,"./Script_Extensions/Braille.js":1045,"./Script_Extensions/Buginese.js":1046,"./Script_Extensions/Buhid.js":1047,"./Script_Extensions/Canadian_Aboriginal.js":1048,"./Script_Extensions/Carian.js":1049,"./Script_Extensions/Caucasian_Albanian.js":1050,"./Script_Extensions/Chakma.js":1051,"./Script_Extensions/Cham.js":1052,"./Script_Extensions/Cherokee.js":1053,"./Script_Extensions/Chorasmian.js":1054,"./Script_Extensions/Common.js":1055,"./Script_Extensions/Coptic.js":1056,"./Script_Extensions/Cuneiform.js":1057,"./Script_Extensions/Cypriot.js":1058,"./Script_Extensions/Cypro_Minoan.js":1059,"./Script_Extensions/Cyrillic.js":1060,"./Script_Extensions/Deseret.js":1061,"./Script_Extensions/Devanagari.js":1062,"./Script_Extensions/Dives_Akuru.js":1063,"./Script_Extensions/Dogra.js":1064,"./Script_Extensions/Duployan.js":1065,"./Script_Extensions/Egyptian_Hieroglyphs.js":1066,"./Script_Extensions/Elbasan.js":1067,"./Script_Extensions/Elymaic.js":1068,"./Script_Extensions/Ethiopic.js":1069,"./Script_Extensions/Georgian.js":1070,"./Script_Extensions/Glagolitic.js":1071,"./Script_Extensions/Gothic.js":1072,"./Script_Extensions/Grantha.js":1073,"./Script_Extensions/Greek.js":1074,"./Script_Extensions/Gujarati.js":1075,"./Script_Extensions/Gunjala_Gondi.js":1076,"./Script_Extensions/Gurmukhi.js":1077,"./Script_Extensions/Han.js":1078,"./Script_Extensions/Hangul.js":1079,"./Script_Extensions/Hanifi_Rohingya.js":1080,"./Script_Extensions/Hanunoo.js":1081,"./Script_Extensions/Hatran.js":1082,"./Script_Extensions/Hebrew.js":1083,"./Script_Extensions/Hiragana.js":1084,"./Script_Extensions/Imperial_Aramaic.js":1085,"./Script_Extensions/Inherited.js":1086,"./Script_Extensions/Inscriptional_Pahlavi.js":1087,"./Script_Extensions/Inscriptional_Parthian.js":1088,"./Script_Extensions/Javanese.js":1089,"./Script_Extensions/Kaithi.js":1090,"./Script_Extensions/Kannada.js":1091,"./Script_Extensions/Katakana.js":1092,"./Script_Extensions/Kawi.js":1093,"./Script_Extensions/Kayah_Li.js":1094,"./Script_Extensions/Kharoshthi.js":1095,"./Script_Extensions/Khitan_Small_Script.js":1096,"./Script_Extensions/Khmer.js":1097,"./Script_Extensions/Khojki.js":1098,"./Script_Extensions/Khudawadi.js":1099,"./Script_Extensions/Lao.js":1100,"./Script_Extensions/Latin.js":1101,"./Script_Extensions/Lepcha.js":1102,"./Script_Extensions/Limbu.js":1103,"./Script_Extensions/Linear_A.js":1104,"./Script_Extensions/Linear_B.js":1105,"./Script_Extensions/Lisu.js":1106,"./Script_Extensions/Lycian.js":1107,"./Script_Extensions/Lydian.js":1108,"./Script_Extensions/Mahajani.js":1109,"./Script_Extensions/Makasar.js":1110,"./Script_Extensions/Malayalam.js":1111,"./Script_Extensions/Mandaic.js":1112,"./Script_Extensions/Manichaean.js":1113,"./Script_Extensions/Marchen.js":1114,"./Script_Extensions/Masaram_Gondi.js":1115,"./Script_Extensions/Medefaidrin.js":1116,"./Script_Extensions/Meetei_Mayek.js":1117,"./Script_Extensions/Mende_Kikakui.js":1118,"./Script_Extensions/Meroitic_Cursive.js":1119,"./Script_Extensions/Meroitic_Hieroglyphs.js":1120,"./Script_Extensions/Miao.js":1121,"./Script_Extensions/Modi.js":1122,"./Script_Extensions/Mongolian.js":1123,"./Script_Extensions/Mro.js":1124,"./Script_Extensions/Multani.js":1125,"./Script_Extensions/Myanmar.js":1126,"./Script_Extensions/Nabataean.js":1127,"./Script_Extensions/Nag_Mundari.js":1128,"./Script_Extensions/Nandinagari.js":1129,"./Script_Extensions/New_Tai_Lue.js":1130,"./Script_Extensions/Newa.js":1131,"./Script_Extensions/Nko.js":1132,"./Script_Extensions/Nushu.js":1133,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":1134,"./Script_Extensions/Ogham.js":1135,"./Script_Extensions/Ol_Chiki.js":1136,"./Script_Extensions/Old_Hungarian.js":1137,"./Script_Extensions/Old_Italic.js":1138,"./Script_Extensions/Old_North_Arabian.js":1139,"./Script_Extensions/Old_Permic.js":1140,"./Script_Extensions/Old_Persian.js":1141,"./Script_Extensions/Old_Sogdian.js":1142,"./Script_Extensions/Old_South_Arabian.js":1143,"./Script_Extensions/Old_Turkic.js":1144,"./Script_Extensions/Old_Uyghur.js":1145,"./Script_Extensions/Oriya.js":1146,"./Script_Extensions/Osage.js":1147,"./Script_Extensions/Osmanya.js":1148,"./Script_Extensions/Pahawh_Hmong.js":1149,"./Script_Extensions/Palmyrene.js":1150,"./Script_Extensions/Pau_Cin_Hau.js":1151,"./Script_Extensions/Phags_Pa.js":1152,"./Script_Extensions/Phoenician.js":1153,"./Script_Extensions/Psalter_Pahlavi.js":1154,"./Script_Extensions/Rejang.js":1155,"./Script_Extensions/Runic.js":1156,"./Script_Extensions/Samaritan.js":1157,"./Script_Extensions/Saurashtra.js":1158,"./Script_Extensions/Sharada.js":1159,"./Script_Extensions/Shavian.js":1160,"./Script_Extensions/Siddham.js":1161,"./Script_Extensions/SignWriting.js":1162,"./Script_Extensions/Sinhala.js":1163,"./Script_Extensions/Sogdian.js":1164,"./Script_Extensions/Sora_Sompeng.js":1165,"./Script_Extensions/Soyombo.js":1166,"./Script_Extensions/Sundanese.js":1167,"./Script_Extensions/Syloti_Nagri.js":1168,"./Script_Extensions/Syriac.js":1169,"./Script_Extensions/Tagalog.js":1170,"./Script_Extensions/Tagbanwa.js":1171,"./Script_Extensions/Tai_Le.js":1172,"./Script_Extensions/Tai_Tham.js":1173,"./Script_Extensions/Tai_Viet.js":1174,"./Script_Extensions/Takri.js":1175,"./Script_Extensions/Tamil.js":1176,"./Script_Extensions/Tangsa.js":1177,"./Script_Extensions/Tangut.js":1178,"./Script_Extensions/Telugu.js":1179,"./Script_Extensions/Thaana.js":1180,"./Script_Extensions/Thai.js":1181,"./Script_Extensions/Tibetan.js":1182,"./Script_Extensions/Tifinagh.js":1183,"./Script_Extensions/Tirhuta.js":1184,"./Script_Extensions/Toto.js":1185,"./Script_Extensions/Ugaritic.js":1186,"./Script_Extensions/Vai.js":1187,"./Script_Extensions/Vithkuqi.js":1188,"./Script_Extensions/Wancho.js":1189,"./Script_Extensions/Warang_Citi.js":1190,"./Script_Extensions/Yezidi.js":1191,"./Script_Extensions/Yi.js":1192,"./Script_Extensions/Zanabazar_Square.js":1193,"./index.js":1194,"./unicode-version.js":1195};function n(i){var s=e(i);return r(s)}function e(i){if(!r.o(t,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return t[i]}n.keys=function(){return Object.keys(t)},n.resolve=e,i.exports=n,n.id=769}}]);