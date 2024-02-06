import React, { memo } from 'react';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
	comments?: IComment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const { comments, isLoading } = props;

	return (
		<div>
			{comments?.length
				? comments.map((comment) => <CommentCard key={comment.id} data={comment} isLoading={isLoading} />)
				: undefined}
		</div>
	);
});
