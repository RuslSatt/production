import { getUserAuthData } from 'entities/User';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routerConfig/RouterConfig';

export function RequireAuth({ children }: { children: React.ReactNode }) {
	const auth = useSelector(getUserAuthData);
	const navigate = useNavigate();

	if (!auth) {
		navigate(routerPath.main);
		return <MainPage />;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
