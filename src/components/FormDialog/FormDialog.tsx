import { Dialog } from '@base-ui/react/dialog';
import type { ReactNode } from 'react';

function classNames(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ');
}

export type FormDialogProps<Payload = unknown> = {
	children: ReactNode;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (
		open: boolean,
		eventDetails: Dialog.Root.ChangeEventDetails,
	) => void;
	onOpenChangeComplete?: (open: boolean) => void;
	modal?: boolean | 'trap-focus';
	disablePointerDismissal?: boolean;
	handle?: Dialog.Trigger.Props<Payload>['handle'];
	triggerId?: string | null;
	defaultTriggerId?: string | null;
};

export type FormDialogTriggerProps<Payload = unknown> = Omit<
	Dialog.Trigger.Props<Payload>,
	'className'
> & {
	children: ReactNode;
	className?: string;
};

export type FormDialogPortalProps = Dialog.Portal.Props;

export type FormDialogBackdropProps = Omit<
	Dialog.Backdrop.Props,
	'className'
> & {
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

export type FormDialogDescriptionProps = Omit<
	Dialog.Description.Props,
	'className'
> & {
	children: ReactNode;
	className?: string;
};

export type FormDialogCloseProps = Omit<Dialog.Close.Props, 'className'> & {
	children?: ReactNode;
	className?: string;
};

function FormDialogRoot<Payload = unknown>({
	children,
	open,
	defaultOpen,
	onOpenChange,
	onOpenChangeComplete,
	modal = true,
	disablePointerDismissal = false,
	handle,
	triggerId,
	defaultTriggerId,
}: FormDialogProps<Payload>) {
	return (
		<Dialog.Root
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange}
			onOpenChangeComplete={onOpenChangeComplete}
			modal={modal}
			disablePointerDismissal={disablePointerDismissal}
			handle={handle}
			triggerId={triggerId}
			defaultTriggerId={defaultTriggerId}
		>
			{children}
		</Dialog.Root>
	);
}

export function FormDialogTrigger<Payload = unknown>({
	children,
	className,
	...props
}: FormDialogTriggerProps<Payload>) {
	return (
		<Dialog.Trigger
			className={classNames('ctx2-form-dialog__trigger', className)}
			{...props}
		>
			{children}
		</Dialog.Trigger>
	);
}

export function FormDialogPortal({
	children,
	keepMounted = false,
	...props
}: FormDialogPortalProps) {
	return (
		<Dialog.Portal keepMounted={keepMounted} {...props}>
			{children}
		</Dialog.Portal>
	);
}

export function FormDialogBackdrop({
	className,
	...props
}: FormDialogBackdropProps) {
	return (
		<Dialog.Backdrop
			className={classNames('ctx2-form-dialog__backdrop', className)}
			{...props}
		/>
	);
}

export function FormDialogPanel({
	children,
	variant = 'default',
	className,
	...props
}: FormDialogPanelProps) {
	return (
		<Dialog.Popup
			className={classNames(
				'ctx2-form-dialog__panel',
				variant === 'fullscreen' && 'ctx2-form-dialog__panel--fullscreen',
				className,
			)}
			{...props}
		>
			{children}
		</Dialog.Popup>
	);
}

export function FormDialogHeader({
	children,
	className,
}: FormDialogHeaderProps) {
	return (
		<div className={classNames('ctx2-form-dialog__header', className)}>
			{children}
		</div>
	);
}

export function FormDialogTitle({
	children,
	className,
	...props
}: FormDialogTitleProps) {
	return (
		<Dialog.Title
			className={classNames('ctx2-form-dialog__title', className)}
			{...props}
		>
			{children}
		</Dialog.Title>
	);
}

export function FormDialogDescription({
	children,
	className,
	...props
}: FormDialogDescriptionProps) {
	return (
		<Dialog.Description
			className={classNames('ctx2-form-dialog__description', className)}
			{...props}
		>
			{children}
		</Dialog.Description>
	);
}

export function FormDialogClose({
	children,
	className,
	type = 'button',
	...props
}: FormDialogCloseProps) {
	return (
		<Dialog.Close
			type={type}
			className={classNames('ctx2-form-dialog__close', className)}
			{...props}
		>
			{children}
		</Dialog.Close>
	);
}

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

export const FormDialog: FormDialogComponent = Object.assign(FormDialogRoot, {
	Trigger: FormDialogTrigger,
	Portal: FormDialogPortal,
	Backdrop: FormDialogBackdrop,
	Panel: FormDialogPanel,
	Header: FormDialogHeader,
	Title: FormDialogTitle,
	Description: FormDialogDescription,
	Close: FormDialogClose,
	createHandle: Dialog.createHandle,
});

export default FormDialog;
