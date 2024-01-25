import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/AppRouter';
import { useTheme } from 'app/providers/ThemeProvider';

import '../shared/config/i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';
import { getInitUserData } from 'entities/User';

function App() {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	const initUser = useSelector(getInitUserData);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<Suspense fallback='loading...'>
			<div className={classNames('app', [theme])}>
				<NavBar />
				<div className='wrapper'>
					<Sidebar />
					<div className='page'>{initUser && <AppRouter />}</div>
				</div>
			</div>
		</Suspense>
	);
}

export default App;
