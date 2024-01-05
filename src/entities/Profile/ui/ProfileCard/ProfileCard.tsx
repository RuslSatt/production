import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';
import { Button, Input } from 'rs-custom-ui';

export const ProfileCard = memo(() => {
	const { t } = useTranslation();

	const data = useSelector(getProfile);

	return (
		<div>
			<h1>{t('Profile Card')}</h1>
			<Input value={data?.name} />
			<Input value={data?.lastName} />
			<Button label={t('Edit')} />
		</div>
	);
});
