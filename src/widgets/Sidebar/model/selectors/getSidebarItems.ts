import { createSelector } from '@reduxjs/toolkit';
import { routerPath } from 'app/providers/AppRouter/routerConfig/RouterConfig';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from '../types/sidebarItem';

export const getSidebarItems = createSelector(getUserAuthData, (user) => {
	const items: ISidebarItem[] = [
		{
			path: routerPath.main,
			text: 'Main'
		},
		{
			path: routerPath.about,
			text: 'About'
		}
	];

	if (user) {
		items.push(
			{
				path: routerPath.profile + user.id,
				text: 'Profile'
			},
			{
				path: routerPath.articles,
				text: 'Articles'
			}
		);
	}

	return items;
});
