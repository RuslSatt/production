import React, { FC, memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ButtonLink.module.scss';

interface ButtonLinkProps extends LinkProps {
	children?: React.ReactNode;
	className?: string;
}

export const ButtonLink = memo((props: ButtonLinkProps) => {
	const { children, to, className } = props;
	return (
		<Link className={classNames(style.Link, [className])} to={to}>
			{children}
		</Link>
	);
});
