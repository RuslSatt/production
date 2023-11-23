import React, { FC } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import style from './ButtonLink.module.scss';

interface ButtonLinkProps extends LinkProps {}

const ButtonLink: FC<ButtonLinkProps> = (props) => {
	const { children, to } = props;
	return (
		<Link className={classNames(style.Link, [])} to={to}>
			{children}
		</Link>
	);
};

export default ButtonLink;
