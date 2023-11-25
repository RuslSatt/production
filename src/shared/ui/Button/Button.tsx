import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = (props) => {
	const { children, ...otherProps } = props;

	return (
		<button className={style.button} {...otherProps} type='button'>
			{children}
		</button>
	);
};
