"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/list.ts
var list_exports = {};
__export(list_exports, {
  List: () => List,
  ListItem: () => ListItem
});
module.exports = __toCommonJS(list_exports);

// src/components/List/List.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function List({ as: Tag = "ul", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: ["ctx-ui-list", className].filter(Boolean).join(" "), ...props });
}
function ListItem({
  as: Tag = "li",
  className,
  leading,
  action,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, { className: ["ctx-ui-list-item", className].filter(Boolean).join(" "), ...props, children: [
    leading != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ctx-ui-list-item__leading", children: leading }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ctx-ui-list-item__content", children }),
    action != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ctx-ui-list-item__action", children: action })
  ] });
}
//# sourceMappingURL=list.js.map
