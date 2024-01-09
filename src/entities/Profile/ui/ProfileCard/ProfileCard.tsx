import { Profile } from 'entities/Profile/model/types/profile';
import React, { memo } from 'react';

import { Input } from 'rs-custom-ui';

export interface ProfileCardProps {
	data?: Profile;
	readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
	const { data, readonly } = props;

	return (
		<div>
			<Input readOnly={readonly} value={data?.name} />
			<Input readOnly={readonly} value={data?.lastName} />
		</div>
	);
});
