import React, { memo, useCallback } from 'react';
import { Select } from 'rs-custom-ui';
import { Currency } from '../models/types/currency';

interface CurrencySelectProps {
	value?: Currency;
	disabled?: boolean;
	onChange?: (value: Currency) => void;
}

const items = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const { onChange, value, disabled } = props;

	const handlerOnChange = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange]
	);

	return <Select disabled={disabled} value={value} id='currency' onChange={handlerOnChange} options={items} />;
});
