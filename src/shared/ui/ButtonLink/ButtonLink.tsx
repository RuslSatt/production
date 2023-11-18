import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ButtonLinkProps extends LinkProps {}

const ButtonLink: FC<ButtonLinkProps> = (props) => {
	const { children, to } = props;
	return <Link to={to}>{children}</Link>;
};

export default ButtonLink;
