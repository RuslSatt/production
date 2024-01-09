import { ProfileCard } from 'entities/Profile';
import React, { useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, getProfile, profileReducer } from 'features/EditProfile';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'features/EditProfile/model/selectors/getProfileReadonly/getProfileReadonly';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
	profile: profileReducer
};

const ProfilePage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const data = useSelector(getProfile);
	const readonly = useSelector(getProfileReadonly);

	return (
		<div>
			<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
				<ProfilePageHeader />
				<ProfileCard data={data} readonly={readonly} />
			</DynamicModuleLoader>
		</div>
	);
};

export default ProfilePage;
