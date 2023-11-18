import React from 'react';

import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about'
}

export const routerPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
};

type RouterConfig = Record<AppRoutes, RouteProps>;

export const routerConfig: RouterConfig = {
	[AppRoutes.MAIN]: {
		path: routerPath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: routerPath.about,
		element: <AboutPage />
	}
};
