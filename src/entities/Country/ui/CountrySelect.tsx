import React, { memo, useCallback } from 'react';
import { Select } from 'rs-custom-ui';
import { Country } from '../models/types/country';

interface CountrySelectProps {
	value?: Country;
	disabled?: boolean;
	onChange?: (value: Country) => void;
}

const items = [
	{ value: Country.Russia, content: Country.Russia },
	{ value: Country.USA, content: Country.USA }
];

export const CountrySelect = memo((props: CountrySelectProps) => {
	const { onChange, value, disabled } = props;

	const handlerOnChange = useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange]
	);

	return <Select disabled={disabled} value={value} id='currency' onChange={handlerOnChange} options={items} />;
});
