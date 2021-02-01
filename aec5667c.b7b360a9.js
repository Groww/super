(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),c=a(6),r=(a(0),a(155)),b={id:"checkbox",title:"CheckBox",sidebar_label:"CheckBox"},i={id:"checkbox",isDocsHomePage:!1,title:"CheckBox",description:"Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses react-native-vector-icons",source:"@site/docs/checkbox.md",permalink:"/frontatish/docs/checkbox",editUrl:"https://github.com/Groww/frontatish/edit/alpha/docs/documentation/docs/checkbox.md",sidebar_label:"CheckBox",sidebar:"someSidebar",previous:{title:"Button",permalink:"/frontatish/docs/button"},next:{title:"NumPad",permalink:"/frontatish/docs/numpad"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"checkColor",id:"checkcolor",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"checked",id:"checked",children:[]},{value:"size",id:"size",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"containerStyle",id:"containerstyle",children:[]}]}],l={rightToc:o};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-vector-icons"}),"react-native-vector-icons")),Object(r.b)("div",{className:"image-horizontal-preview"},Object(r.b)("figure",null,Object(r.b)("img",{src:"/frontatish/img/checkbox_1.png",alt:"checkbox"})),Object(r.b)("figure",null,Object(r.b)("img",{src:"/frontatish/img/checkbox_2.png",alt:"checkbox"}))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// react base imports\n\nimport { Checkbox } from 'frontatish';\n\n\n  <CheckBox\n    isDark={true}\n    checked={true}\n    onPress={() => void}\n    containerStyle={{ marginRight: 20 }}\n  />\n\n")),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"checkcolor"},"checkColor"),Object(r.b)("p",null,"Color of check icon inside the checkbox,you can pass whatever color you like and control the overall checkbox style by using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#containerstyle"}),"containerStyle")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(r.b)("img",{width:"500"}))))),Object(r.b)("h3",{id:"onpress"},"onPress"),Object(r.b)("p",null,"Callback function that needed to be passed which updates the state of checkbox,to hanle both checked and unchecked state of a checkbox."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"None",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(r.b)("img",{width:"500"}))))),Object(r.b)("h3",{id:"checked"},"checked"),Object(r.b)("p",null,"checked will be a state variable which hold the state of the checkbox,on which checkbox will decide when to show check icon and when to not"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(r.b)("img",{width:"500"}))))),Object(r.b)("h3",{id:"size"},"size"),Object(r.b)("p",null,"you can control the size of the checkbox and the icon inside by using this props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"enum('sm', 'md', 'lg') ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'sm' ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(r.b)("img",{width:"500"}))))),Object(r.b)("h3",{id:"disabled"},"disabled"),Object(r.b)("p",null,"disabled make sure if its true then user won't be able to click it and the onPress would not get called"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(r.b)("img",{width:"500"}))))),Object(r.b)("h3",{id:"containerstyle"},"containerStyle"),Object(r.b)("p",null,"A react native style object which gives flexibility to alter the styles of checkbox container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none ",Object(r.b)("img",{width:"500"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"No ",Object(r.b)("img",{width:"500"}))))))}d.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=d(a),h=n,j=O["".concat(b,".").concat(h)]||O[h]||p[h]||r;return a?c.a.createElement(j,i(i({ref:t},l),{},{components:a})):c.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<r;l++)b[l]=a[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);