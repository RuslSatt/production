import { routerPath } from 'shared/config/routerConfig/RouterConfig';

export interface ISidebarItem {
	path: string;
	text: string;
}

export const SidebarItemList: ISidebarItem[] = [
	{
		path: routerPath.main,
		text: 'Main'
	},
	{
		path: routerPath.about,
		text: 'About'
	},
	{
		path: routerPath.profile,
		text: 'Profile'
	}
];
