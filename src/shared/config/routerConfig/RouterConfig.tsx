import React from 'react';

import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotPageFound } from 'pages/NotPageFound';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_PAGE = 'not_page'
}

export const routerPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
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
	[AppRoutes.PROFILE]: {
		path: routerPath.profile,
		element: <ProfilePage />
	},
	[AppRoutes.NOT_PAGE]: {
		path: routerPath.not_page,
		element: <NotPageFound />
	}
};
