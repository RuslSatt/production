import React, { FC, memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ButtonLink.module.scss';

interface ButtonLinkProps extends LinkProps {
	children?: React.ReactNode;
}

export const ButtonLink = memo((props: ButtonLinkProps) => {
	const { children, to } = props;
	return (
		<Link className={classNames(style.Link, [])} to={to}>
			{children}
		</Link>
	);
});
