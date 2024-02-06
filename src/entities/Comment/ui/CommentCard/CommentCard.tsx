import React, { memo } from 'react';
import { Avatar, Box, Card, CardBody, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { routerPath } from 'app/providers/AppRouter/routerConfig/RouterConfig';
import { IComment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentProps {
	className?: string;
	data?: IComment;
	isLoading?: boolean;
}

export const CommentCard = memo((props: CommentProps) => {
	const { className, data, isLoading } = props;

	if (isLoading) {
		return (
			<Box padding='3' boxShadow='lg' bg='white'>
				<SkeletonCircle size='10' />
				<SkeletonText mt='2' noOfLines={2} spacing='2' skeletonHeight='2' />
			</Box>
		);
	}

	return (
		<Card className={styles.card}>
			<CardBody>
				<ButtonLink to={`${routerPath.profile}${data?.user.id}`} className={styles.user}>
					{data && <Avatar src={data?.user.avatar} />}
					{data && <Text>{data?.user.username}</Text>}
				</ButtonLink>
				{data && <Text>{data?.text}</Text>}
			</CardBody>
		</Card>
	);
});
