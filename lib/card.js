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

// src/card.ts
var card_exports = {};
__export(card_exports, {
  Card: () => Card
});
module.exports = __toCommonJS(card_exports);

// src/components/Card/Card.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Card = (0, import_react.forwardRef)(function Card2({ className, hover, ...props }, ref) {
  const classes = ["ctx-ui-card", hover && `ctx-ui-card--hover-${hover}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: classes, ...props });
});
//# sourceMappingURL=card.js.map
