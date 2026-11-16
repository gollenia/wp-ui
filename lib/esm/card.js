// src/components/Card/Card.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Card = forwardRef(function Card2({ className, hover, ...props }, ref) {
  const classes = ["ctx-ui-card", hover && `ctx-ui-card--hover-${hover}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("div", { ref, className: classes, ...props });
});
export {
  Card
};
//# sourceMappingURL=card.js.map
