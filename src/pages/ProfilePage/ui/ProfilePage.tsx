import { profileReducer } from 'entities/Profile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
	profile: profileReducer
};

const ProfilePage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
				<h1>{t('Profile Page')}</h1>
			</DynamicModuleLoader>
		</div>
	);
};

export default ProfilePage;
