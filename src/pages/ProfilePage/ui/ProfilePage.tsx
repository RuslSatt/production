import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t('Profile Page')}</h1>
		</div>
	);
};

export default ProfilePage;
