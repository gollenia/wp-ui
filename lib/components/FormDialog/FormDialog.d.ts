import { Dialog } from '@base-ui/react/dialog';
import type { ReactNode } from 'react';
export type FormDialogProps<Payload = unknown> = {
    children: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean, eventDetails: Dialog.Root.ChangeEventDetails) => void;
    onOpenChangeComplete?: (open: boolean) => void;
    modal?: boolean | 'trap-focus';
    disablePointerDismissal?: boolean;
    handle?: Dialog.Trigger.Props<Payload>['handle'];
    triggerId?: string | null;
    defaultTriggerId?: string | null;
};
export type FormDialogTriggerProps<Payload = unknown> = Omit<Dialog.Trigger.Props<Payload>, 'className'> & {
    children: ReactNode;
    className?: string;
};
export type FormDialogPortalProps = Dialog.Portal.Props;
export type FormDialogBackdropProps = Omit<Dialog.Backdrop.Props, 'className'> & {
    className?: string;
};
export type FormDialogPanelProps = Omit<Dialog.Popup.Props, 'className'> & {
    children: ReactNode;
    variant?: 'default' | 'fullscreen';
    className?: string;
};
export type FormDialogHeaderProps = {
    children: ReactNode;
    className?: string;
};
export type FormDialogTitleProps = Omit<Dialog.Title.Props, 'className'> & {
    children: ReactNode;
    className?: string;
};
export type FormDialogDescriptionProps = Omit<Dialog.Description.Props, 'className'> & {
    children: ReactNode;
    className?: string;
};
export type FormDialogCloseProps = Omit<Dialog.Close.Props, 'className'> & {
    children?: ReactNode;
    className?: string;
};
declare function FormDialogRoot<Payload = unknown>({ children, open, defaultOpen, onOpenChange, onOpenChangeComplete, modal, disablePointerDismissal, handle, triggerId, defaultTriggerId, }: FormDialogProps<Payload>): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogTrigger<Payload = unknown>({ children, className, ...props }: FormDialogTriggerProps<Payload>): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogPortal({ children, keepMounted, ...props }: FormDialogPortalProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogBackdrop({ className, ...props }: FormDialogBackdropProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogPanel({ children, variant, className, ...props }: FormDialogPanelProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogHeader({ children, className, }: FormDialogHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogTitle({ children, className, ...props }: FormDialogTitleProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogDescription({ children, className, ...props }: FormDialogDescriptionProps): import("react/jsx-runtime").JSX.Element;
export declare function FormDialogClose({ children, className, type, ...props }: FormDialogCloseProps): import("react/jsx-runtime").JSX.Element;
export type FormDialogComponent = typeof FormDialogRoot & {
    Trigger: typeof FormDialogTrigger;
    Portal: typeof FormDialogPortal;
    Backdrop: typeof FormDialogBackdrop;
    Panel: typeof FormDialogPanel;
    Header: typeof FormDialogHeader;
    Title: typeof FormDialogTitle;
    Description: typeof FormDialogDescription;
    Close: typeof FormDialogClose;
    createHandle: typeof Dialog.createHandle;
};
export declare const FormDialog: FormDialogComponent;
export default FormDialog;
//# sourceMappingURL=FormDialog.d.ts.map