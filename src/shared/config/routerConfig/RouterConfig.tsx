import React from 'react';

import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotPageFound } from 'pages/NotPageFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_PAGE = 'not_page',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details'
}

export const routerPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',

	[AppRoutes.NOT_PAGE]: '*'
};

export type AppRoutesProps = RouteProps & {
	auth?: boolean;
};

type RouterConfig = Record<AppRoutes, AppRoutesProps>;

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
		element: <ProfilePage />,
		auth: true
	},
	[AppRoutes.ARTICLES]: {
		path: routerPath.articles,
		element: <ArticlesPage />,
		auth: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${routerPath.article_details}:id`,
		element: <ArticleDetailsPage />,
		auth: true
	},
	[AppRoutes.NOT_PAGE]: {
		path: routerPath.not_page,
		element: <NotPageFound />
	}
};
