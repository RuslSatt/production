import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'rs-custom-ui';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
	const { t } = useTranslation();
	const count = useSelector(getCounterValue);
	const dispatch = useDispatch();

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<div>
				<Button data-testid='increment-btn' aria-label='Increment value' onClick={increment}>
					{t('Increment')}
				</Button>
				<span data-testid='value'>{count}</span>
				<Button data-testid='decrement-btn' aria-label='Decrement value' onClick={decrement}>
					{t('Decrement')}
				</Button>
			</div>
		</div>
	);
};
