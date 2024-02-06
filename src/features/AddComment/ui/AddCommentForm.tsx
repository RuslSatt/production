import React, { ChangeEvent, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';
import styles from './AddCommentForm.module.scss';
import { addNewComment } from '../model/services/addNewComment';
import { getNewCommentText } from '../model/selectors/getNewComment';

const reducersList = {
	addComment: addCommentReducer
};

export const AddCommentForm = memo((props) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const handlerInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			dispatch(addCommentActions.setComment(e.target.value));
		},
		[dispatch]
	);

	const handlerClick = useCallback(() => {
		dispatch(addNewComment());
	}, [dispatch]);

	const text = useSelector(getNewCommentText);

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			<div className={styles.form}>
				<Input value={text || ''} onChange={(e) => handlerInput(e)}></Input>
				<Button onClick={() => handlerClick()}>{t('Добавить')}</Button>
			</div>
		</DynamicModuleLoader>
	);
});
