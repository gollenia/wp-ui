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

// src/dialog.ts
var dialog_exports = {};
__export(dialog_exports, {
  Dialog: () => FormDialog_default,
  FormDialog: () => FormDialog,
  FormDialogBackdrop: () => FormDialogBackdrop,
  FormDialogClose: () => FormDialogClose,
  FormDialogDescription: () => FormDialogDescription,
  FormDialogHeader: () => FormDialogHeader,
  FormDialogPanel: () => FormDialogPanel,
  FormDialogPortal: () => FormDialogPortal,
  FormDialogTitle: () => FormDialogTitle,
  FormDialogTrigger: () => FormDialogTrigger,
  default: () => FormDialog_default
});
module.exports = __toCommonJS(dialog_exports);

// src/components/FormDialog/FormDialog.tsx
var import_dialog = require("@base-ui/react/dialog");
var import_jsx_runtime = require("react/jsx-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FormDialogRoot({
  children,
  open,
  defaultOpen,
  onOpenChange,
  onOpenChangeComplete,
  modal = true,
  disablePointerDismissal = false,
  handle,
  triggerId,
  defaultTriggerId
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Root,
    {
      open,
      defaultOpen,
      onOpenChange,
      onOpenChangeComplete,
      modal,
      disablePointerDismissal,
      handle,
      triggerId,
      defaultTriggerId,
      children
    }
  );
}
function FormDialogTrigger({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Trigger,
    {
      className: classNames("ctx2-form-dialog__trigger", className),
      ...props,
      children
    }
  );
}
function FormDialogPortal({
  children,
  keepMounted = false,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Portal, { keepMounted, ...props, children });
}
function FormDialogBackdrop({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Backdrop,
    {
      className: classNames("ctx2-form-dialog__backdrop", className),
      ...props
    }
  );
}
function FormDialogPanel({
  children,
  variant = "default",
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Popup,
    {
      className: classNames(
        "ctx2-form-dialog__panel",
        variant === "fullscreen" && "ctx2-form-dialog__panel--fullscreen",
        className
      ),
      ...props,
      children
    }
  );
}
function FormDialogHeader({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: classNames("ctx2-form-dialog__header", className), children });
}
function FormDialogTitle({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Title,
    {
      className: classNames("ctx2-form-dialog__title", className),
      ...props,
      children
    }
  );
}
function FormDialogDescription({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Description,
    {
      className: classNames("ctx2-form-dialog__description", className),
      ...props,
      children
    }
  );
}
function FormDialogClose({
  children,
  className,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Close,
    {
      type,
      className: classNames("ctx2-form-dialog__close", className),
      ...props,
      children
    }
  );
}
var FormDialog = Object.assign(FormDialogRoot, {
  Trigger: FormDialogTrigger,
  Portal: FormDialogPortal,
  Backdrop: FormDialogBackdrop,
  Panel: FormDialogPanel,
  Header: FormDialogHeader,
  Title: FormDialogTitle,
  Description: FormDialogDescription,
  Close: FormDialogClose,
  createHandle: import_dialog.Dialog.createHandle
});
var FormDialog_default = FormDialog;
//# sourceMappingURL=dialog.js.map
