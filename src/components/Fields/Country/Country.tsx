import { useMemo } from 'react';
import { getCountryOptions } from '../../../modules/countries';
import type { CountryRegion, FieldValue } from '../../../types';
import Combobox from '../Combobox/Combobox';

type CountryProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	region: CountryRegion;
	disabled: boolean;
	customError: string;
	help?: string;
	formTouched: boolean;
	customErrorMessage?: string;
	error?: string;
	onChange: (value: FieldValue) => void;
	value: string;
	autoComplete?: string;
};

const browserLocale = navigator.language;

const Country = (props: CountryProps) => {
	const {
		onChange,
		disabled,
		required,
		name,
		label,
		width,
		region,
		help,
		customErrorMessage,
		error,
		value,
		placeholder,
		formTouched,
		autoComplete,
	} = props;

	const countries = useMemo(
		() => getCountryOptions(region, browserLocale),
		[region],
	);

	const labelToValueMap = useMemo(() => {
		return new Map(countries.map((country) => [country.label, country.value]));
	}, [countries]);

	const valueToLabelMap = useMemo(() => {
		return new Map(countries.map((country) => [country.value, country.label]));
	}, [countries]);

	const selectedLabel = value ? (valueToLabelMap.get(value) ?? '') : '';

	const handleChange = (selectedLabel: FieldValue) => {
		if (typeof selectedLabel !== 'string') {
			onChange('');
			return;
		}

		const selectedValue = labelToValueMap.get(selectedLabel) ?? '';
		onChange(selectedValue);
	};

	const handleInputChange = (input: string) => {
		const normalized = input.trim().toLocaleLowerCase(browserLocale);
		const country = countries.find(({ label, value }) =>
			label.toLocaleLowerCase(browserLocale) === normalized || value.toLowerCase() === normalized,
		);
		if (country) onChange(country.value);
	};

	return (
		<Combobox
			label={label}
			name={name}
			required={required}
			width={width}
			options={countries.map((country) => country.label)}
			help={help ?? 'Make a selection'}
			disabled={disabled}
			formTouched={formTouched}
			customErrorMessage={customErrorMessage}
			error={error}
			placeholder={placeholder}
			value={selectedLabel}
			onChange={handleChange}
			allowClear={!required}
			commitOnInput={false}
			autoComplete={autoComplete ?? 'country-name'}
			onInputChange={handleInputChange}
			clearLabel={help ?? 'Make a selection'}
			noResultsLabel="No matching country"
		/>
	);
};

export default Country;
export type { CountryProps };
