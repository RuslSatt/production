import React from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './PageLoader.module.scss';

export const PageLoader = () => (
	<div className={classNames(style.PageLoader)}>
		<Loader />
	</div>
);
