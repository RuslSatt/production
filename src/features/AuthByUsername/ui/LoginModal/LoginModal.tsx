import React, { Suspense } from 'react';
import { Modal } from 'rs-custom-ui';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

export interface LoginModalProps {
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const { children, isOpen, onClose } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader />}>
				<LoginFormLazy onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
};
