import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import style from './Sidebar.module.scss';

export const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
		setCollapsed((value) => !value);
	};

	return (
		<div className={classNames(style.Sidebar, [], { [style.collapsed]: collapsed })}>
			<button onClick={handleToggle}>Toggle</button>
		</div>
	);
};
