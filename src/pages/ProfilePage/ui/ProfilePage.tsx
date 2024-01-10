import { Profile, ProfileCard } from 'entities/Profile';
import React, { useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, getProfile, profileActions, profileReducer } from 'features/EditProfile';
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

	const onChangeName = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateForm({
					name: value || ''
				})
			);
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateForm({
					lastName: value || ''
				})
			);
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateForm({
					age: Number(value || 0)
				})
			);
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateForm({
					city: value || ''
				})
			);
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateForm({
					username: value || ''
				})
			);
		},
		[dispatch]
	);

	return (
		<div>
			<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
				<ProfilePageHeader />
				<ProfileCard
					onChangeName={onChangeName}
					onChangeLastName={onChangeLastName}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					data={data}
					readonly={readonly}
				/>
			</DynamicModuleLoader>
		</div>
	);
};

export default ProfilePage;
