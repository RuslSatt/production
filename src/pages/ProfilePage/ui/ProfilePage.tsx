import { ProfileCard } from 'entities/Profile';
import React, { useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, getProfile, getProfileErrors, profileActions, profileReducer } from 'features/EditProfile';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'features/EditProfile/model/selectors/getProfileReadonly/getProfileReadonly';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import styles from './ProfilePage.module.scss';

const initialReducers: ReducersList = {
	profile: profileReducer
};

const ProfilePage = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { id } = useParams();

	useEffect(() => {
		if (id) dispatch(fetchProfileData(id));
	}, [dispatch, id]);

	const data = useSelector(getProfile);
	const readonly = useSelector(getProfileReadonly);
	const errors = useSelector(getProfileErrors);

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

	const onChangeCurrency = useCallback(
		(value?: Currency) => {
			dispatch(
				profileActions.updateForm({
					currency: value
				})
			);
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(value?: Country) => {
			dispatch(
				profileActions.updateForm({
					country: value
				})
			);
		},
		[dispatch]
	);

	return (
		<div>
			<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
				<ProfilePageHeader id={id} />
				{!!errors?.length && errors.map((message) => <span className={styles.error}>{t(message)}</span>)}
				<ProfileCard
					onChangeName={onChangeName}
					onChangeLastName={onChangeLastName}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
					data={data}
					readonly={readonly}
				/>
			</DynamicModuleLoader>
		</div>
	);
};

export default ProfilePage;
