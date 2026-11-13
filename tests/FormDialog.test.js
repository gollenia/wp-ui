import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Dialog, Button } from '../src';

describe('FormDialog', () => {
	test('supports controlled usage without an internal trigger', () => {
		const onOpenChange = jest.fn();

		render(
			<Dialog open={true} onOpenChange={onOpenChange}>
				<Dialog.Portal>
					<Dialog.Backdrop />
					<Dialog.Panel>
						<Dialog.Header>
							<Dialog.Title>Booking</Dialog.Title>
							<Dialog.Close>Close</Dialog.Close>
						</Dialog.Header>
						<Dialog.Description>Dialog content</Dialog.Description>
					</Dialog.Panel>
				</Dialog.Portal>
			</Dialog>,
		);

		expect(screen.getByRole('dialog')).toBeTruthy();
		expect(screen.getByRole('heading', { name: 'Booking' })).toBeTruthy();
		expect(screen.getByText('Dialog content')).toBeTruthy();

		fireEvent.click(screen.getByRole('button', { name: 'Close' }));
		expect(onOpenChange).toHaveBeenCalledWith(
			false,
			expect.objectContaining({ reason: 'close-press' }),
		);
	});

	test('opens from a detached trigger handle', () => {
		const handle = Dialog.createHandle();

		render(
			<>
				<Dialog.Trigger handle={handle} id="booking-trigger">
					Open booking
				</Dialog.Trigger>
				<Dialog handle={handle}>
					<Dialog.Portal>
						<Dialog.Backdrop />
						<Dialog.Panel>
							<Dialog.Title>Detached dialog</Dialog.Title>
							<Button>Action</Button>
						</Dialog.Panel>
					</Dialog.Portal>
				</Dialog>
			</>,
		);

		expect(screen.queryByRole('dialog')).toBeNull();

		fireEvent.click(screen.getByRole('button', { name: 'Open booking' }));

		expect(screen.getByRole('dialog')).toBeTruthy();
		expect(screen.getByRole('heading', { name: 'Detached dialog' })).toBeTruthy();
		expect(screen.getByRole('button', { name: 'Action' })).toBeTruthy();
	});

	test('supports a fullscreen panel variant', () => {
		render(
			<Dialog open={true}>
				<Dialog.Portal>
					<Dialog.Backdrop />
					<Dialog.Panel variant="fullscreen">
						<Dialog.Title>Fullscreen dialog</Dialog.Title>
					</Dialog.Panel>
				</Dialog.Portal>
			</Dialog>,
		);

		expect(screen.getByRole('dialog')).toHaveClass(
			'ctx2-form-dialog__panel--fullscreen',
		);
	});
});
