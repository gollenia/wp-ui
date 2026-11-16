// src/components/List/List.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function List({ as: Tag = "ul", className, ...props }) {
  return /* @__PURE__ */ jsx(Tag, { className: ["ctx-ui-list", className].filter(Boolean).join(" "), ...props });
}
function ListItem({
  as: Tag = "li",
  className,
  leading,
  action,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Tag, { className: ["ctx-ui-list-item", className].filter(Boolean).join(" "), ...props, children: [
    leading != null && /* @__PURE__ */ jsx("div", { className: "ctx-ui-list-item__leading", children: leading }),
    /* @__PURE__ */ jsx("div", { className: "ctx-ui-list-item__content", children }),
    action != null && /* @__PURE__ */ jsx("div", { className: "ctx-ui-list-item__action", children: action })
  ] });
}
export {
  List,
  ListItem
};
//# sourceMappingURL=list.js.map
