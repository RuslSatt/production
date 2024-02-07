import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { ISidebarItem } from 'widgets/Sidebar/model/types/sidebarItem';

export const SidebarItem = (props: ISidebarItem) => {
	const { path, text } = props;

	const { t } = useTranslation();

	return (
		<ButtonLink data-testid='link-main' to={path}>
			{t(text)}
		</ButtonLink>
	);
};
