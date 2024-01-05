import { fetchProfileData, profileReducer } from 'entities/Profile';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
	profile: profileReducer
};

const ProfilePage = () => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData);
	}, [dispatch]);

	return (
		<div>
			<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
				<h1>{t('Profile Page')}</h1>
			</DynamicModuleLoader>
		</div>
	);
};

export default ProfilePage;
