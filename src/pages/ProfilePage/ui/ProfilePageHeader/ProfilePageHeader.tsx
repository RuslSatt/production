import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'rs-custom-ui';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly, profileActions } from 'features/EditProfile';
import { useSelector } from 'react-redux';
import style from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const readonly = useSelector(getProfileReadonly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	// const onSaveEdit = useCallback(() => {
	// 	dispatch(profileActions.cancelEdit());
	// }, [dispatch]);

	return (
		<div className={style.header}>
			<h1>{t('Profile Card')}</h1>
			{readonly ? (
				<Button onClick={onEdit} label={t('Edit')} />
			) : (
				<div className={style.buttonGroup}>
					<Button onClick={onCancelEdit} label={t('Cancel')} />
					<Button label={t('Save')} />
				</div>
			)}
		</div>
	);
});
