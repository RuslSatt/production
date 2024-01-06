import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/loginByUsername',
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue, extra } = thunkApi;

		try {
			const response = await extra.api.post('/login', authData);

			if (!response.data) throw new Error();
			extra.navigate?.('/about');
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (e) {
			return rejectWithValue('error login');
		}
	}
);
