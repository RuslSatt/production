import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/RouterConfig';

const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			{Object.values(routerConfig).map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	</Suspense>
);

export { AppRouter };
