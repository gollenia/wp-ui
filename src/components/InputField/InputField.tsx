import { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';
import type { FieldRenderProps } from '../../types';
import Checkbox from '../Fields/Checkbox/Checkbox';
import Hidden from '../Fields/Hidden/Hidden';
import Input from '../Fields/Input/Input';
import Radio from '../Fields/Radio/Radio';
import Submit from '../Fields/Submit/Submit';
import TextArea from '../Fields/TextArea/TextArea';
import HTMLBlock from '../HtmlBlock/HtmlBlock';

type LazyFieldModule = {
	default: ComponentType<any>;
};

const getLazyFieldComponent = (module: unknown): ComponentType<any> => {
	if (typeof module === 'function') {
		return module as ComponentType<any>;
	}

	if (
		module &&
		typeof module === 'object' &&
		'default' in module
	) {
		return getLazyFieldComponent(module.default);
	}

	throw new TypeError('Lazy field module did not resolve to a component');
};

const loadLazyField = (
	loader: () => Promise<unknown>,
) =>
	lazy(async (): Promise<LazyFieldModule> => ({
		default: getLazyFieldComponent(await loader()),
	}));

const Combobox = loadLazyField(() => import('../Fields/Combobox/Combobox.js'));
const Country = loadLazyField(() => import('../Fields/Country/Country.js'));
const RangeInput = loadLazyField(() => import('../Fields/Range/Range.js'));
const Select = loadLazyField(() => import('../Fields/Select/Select.js'));

const withSuspense = (children: JSX.Element) => (
	<Suspense fallback={null}>{children}</Suspense>
);

const InputField = (props: FieldRenderProps): JSX.Element | null => {
	const { type, onChange, disabled } = props;

	const base = {
		name: props.name,
		label: props.label ?? '',
		width: props.width ?? 6,
		required: props.required ?? false,
		disabled: disabled ?? false,
		formTouched: props.formTouched ?? false,
		customErrorMessage: props.customErrorMessage,
		placeholder: props.placeholder ?? '',
	};

		switch (type) {
		case 'select':
			return withSuspense(
				<Select
					{...base}
					options={props.options}
					hasEmptyOption={props.hasEmptyOption}
					help={props.help}
					hint={props.hint}
					error={props.error}
					value={props.value as string}
					onChange={onChange}
				/>,
			);
		case 'combobox':
			return withSuspense(
				<Combobox
					{...base}
					options={Array.isArray(props.options) ? props.options : []}
					help={props.help ?? ''}
					value={props.value as string}
					onChange={onChange}
				/>,
			);
		case 'radio':
		case 'options':
			return (
				<Radio
					{...base}
					options={Array.isArray(props.options) ? props.options : []}
					value={props.value as string}
					onChange={onChange}
				/>
			);
		case 'textarea':
			return (
				<TextArea
					{...base}
					rows={props.rows ?? 3}
					error={props.error}
					value={props.value as string}
					onChange={onChange}
				/>
			);
		case 'checkbox':
		case 'toggle':
			return (
				<Checkbox
					{...base}
					help={props.help}
					error={props.error}
					variant={type === 'toggle' ? 'toggle' : 'checkbox'}
					value={props.value as boolean}
					onChange={onChange}
				/>
			);
		case 'country':
			return withSuspense(
				<Country
					{...base}
					autoComplete={props.autoComplete}
					region={props.region ?? 'world'}
					help={props.help}
					customError={props.customError ?? ''}
					error={props.error}
					value={props.value as string}
					onChange={onChange}
				/>,
			);
		case 'number':
		case 'range':
		case 'numberpicker':
			return withSuspense(
				<RangeInput
					{...base}
					type={type}
					min={props.min ?? 0}
					max={props.max ?? 100}
					hasTicks={props.hasTicks ?? false}
					hasLabels={props.hasLabels ?? false}
					showValue={props.showValue ?? true}
					value={props.value as string}
					onChange={onChange}
				/>,
			);
		case 'html':
			return <HTMLBlock content={props.content} width={props.width} />;
		case 'hidden':
			return (
				<Hidden
					name={props.name}
					defaultValue={
						typeof props.defaultValue === 'string'
							? props.defaultValue
							: undefined
					}
				/>
			);
		case 'submit':
			return (
				<Submit
					label={props.label ?? ''}
					width={props.width ?? 6}
					alignment={props.alignment ?? 'left'}
					placeholder={props.placeholder}
					disabled={!!disabled}
					type="submit"
				/>
			);
		default:
			return (
				<Input
					{...base}
					type={type as import('../Fields/Input/Input').InputFieldTypes}
					min={props.min}
					max={props.max}
					pattern={props.pattern ?? null}
					autoComplete={props.autoComplete ?? ''}
					customError={props.customError ?? ''}
					help={props.help}
					error={props.error}
					unit={props.unit}
					value={props.value as string}
					onChange={onChange}
				/>
			);
	}
};

export default InputField;
