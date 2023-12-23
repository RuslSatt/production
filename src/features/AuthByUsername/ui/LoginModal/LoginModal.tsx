import React from 'react';
import { Modal } from 'rs-custom-ui';
import { LoginForm } from '../LoginForm/LoginForm';

export interface LoginModalProps {
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const { children, isOpen, onClose } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<LoginForm />
		</Modal>
	);
};
