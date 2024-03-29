import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'rs-custom-ui';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import style from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

export const Sidebar = memo(() => {
	const [collapsed, setCollapsed] = useState(false);
	const SidebarItemList = useSelector(getSidebarItems);

	const handleToggle = () => {
		setCollapsed((value) => !value);
	};

	return (
		<div data-testid='sidebar' className={classNames(style.Sidebar, [], { [style.collapsed]: collapsed })}>
			<div>
				<Button data-testid='toggle' label={collapsed ? '>' : '<'} onClick={handleToggle} />
			</div>
			<div className={style.links}>
				{SidebarItemList.map(({ path, text }) => (
					<SidebarItem key={path} path={path} text={text} />
				))}
			</div>
		</div>
	);
});
