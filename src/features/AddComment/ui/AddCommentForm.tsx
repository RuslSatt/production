import React, { ChangeEvent, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';
import styles from './AddCommentForm.module.scss';
import { getNewCommentText } from '../model/selectors/getNewComment';

const reducersList = {
	addComment: addCommentReducer
};

interface AddCommentFormProps {
	onSendComment: (text: string) => void;
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { onSendComment } = props;

	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const handlerInput = useCallback(
		(text: string) => {
			dispatch(addCommentActions.setText(text));
		},
		[dispatch]
	);

	const text = useSelector(getNewCommentText);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		handlerInput('');
	}, [handlerInput, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			<div className={styles.form}>
				<Input
					value={text || ''}
					onChange={(e: ChangeEvent<HTMLInputElement>) => handlerInput(e.target.value)}
					// eslint-disable-next-line react/jsx-closing-tag-location
				></Input>
				<Button onClick={onSendHandler}>{t('Добавить')}</Button>
			</div>
		</DynamicModuleLoader>
	);
});
