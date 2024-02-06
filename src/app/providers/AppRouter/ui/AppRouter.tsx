import React, { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, routerConfig } from 'app/providers/AppRouter/routerConfig/RouterConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
	const RouteElement = useCallback(
		(route: AppRoutesProps) => (
			<Route
				key={route.path}
				path={route.path}
				element={route.auth ? <RequireAuth>{route.element}</RequireAuth> : route.element}
			/>
		),
		[]
	);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>{Object.values(routerConfig).map((route: AppRoutesProps) => RouteElement(route))}</Routes>
		</Suspense>
	);
};
