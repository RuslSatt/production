import React from 'react';

import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotPageFound } from 'pages/NotPageFound';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_PAGE = 'not_page'
}

export const routerPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_PAGE]: '*'
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
	},
	[AppRoutes.NOT_PAGE]: {
		path: routerPath.not_page,
		element: <NotPageFound />
	}
};
