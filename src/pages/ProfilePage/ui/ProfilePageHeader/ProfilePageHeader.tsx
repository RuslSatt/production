import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'rs-custom-ui';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly, profileActions, updateProfileData } from 'features/EditProfile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import style from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	id?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
	const { id } = props;

	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const authData = useSelector(getUserAuthData);
	const canEdit = authData?.id === id;

	const readonly = useSelector(getProfileReadonly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSaveEdit = useCallback(() => {
		if (id) dispatch(updateProfileData(id));
	}, [dispatch, id]);

	let content;

	if (readonly) {
		content = <Button onClick={onEdit} label={t('Edit')} />;
	} else {
		content = (
			<div className={style.buttonGroup}>
				<Button onClick={onCancelEdit} label={t('Cancel')} />
				<Button onClick={onSaveEdit} label={t('Save')} />
			</div>
		);
	}

	if (!canEdit) content = null;

	return (
		<div className={style.header}>
			<h1>{t('Profile Card')}</h1>
			{content}
		</div>
	);
});
