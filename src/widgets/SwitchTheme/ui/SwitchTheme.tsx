import { useTheme } from 'app/providers/ThemeProvider';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './SwitchTheme.module.scss';

const SwitchTheme = memo(() => {
	const { toggleTheme } = useTheme();

	return (
		<div className={classNames(style.switchTheme, [])} onClick={toggleTheme}>
			<div className={classNames(style.switchTheme__toggle, [])}></div>
		</div>
	);
});

export { SwitchTheme };
