import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from 'shared/ui/ButtonLink/ButtonLink';

const NavBar = () => {
	return (
		<nav>
			<div>
				<ButtonLink to={`/`}>Link to main page</ButtonLink>
				<ButtonLink to={`/about`}>Link to about page</ButtonLink>
			</div>
		</nav>
	);
};

export { NavBar };
