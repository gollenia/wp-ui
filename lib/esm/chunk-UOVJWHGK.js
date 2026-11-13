// src/components/FormDialog/FormDialog.tsx
import { Dialog } from "@base-ui/react/dialog";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    Dialog.Root,
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
  return /* @__PURE__ */ jsx(
    Dialog.Trigger,
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
  return /* @__PURE__ */ jsx(Dialog.Portal, { keepMounted, ...props, children });
}
function FormDialogBackdrop({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog.Backdrop,
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
  return /* @__PURE__ */ jsx(
    Dialog.Popup,
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
  return /* @__PURE__ */ jsx("div", { className: classNames("ctx2-form-dialog__header", className), children });
}
function FormDialogTitle({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog.Title,
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
  return /* @__PURE__ */ jsx(
    Dialog.Description,
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
  return /* @__PURE__ */ jsx(
    Dialog.Close,
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
  createHandle: Dialog.createHandle
});
var FormDialog_default = FormDialog;

export {
  FormDialogTrigger,
  FormDialogPortal,
  FormDialogBackdrop,
  FormDialogPanel,
  FormDialogHeader,
  FormDialogTitle,
  FormDialogDescription,
  FormDialogClose,
  FormDialog,
  FormDialog_default
};
//# sourceMappingURL=chunk-UOVJWHGK.js.map
