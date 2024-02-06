import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentForm } from 'features/AddComment';
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/getArticleDetailsComments';
import { articleDetailsCommentsReducer, getArticleDetailsComments } from '../model/slice/articleDetailsComments';
import { addArticleDetailsComment } from '../model/services/addArticleDetailsComment';

const reducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = () => {
	const { t } = useTranslation();

	const { id } = useParams();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticleCommentsById(id));
	}, [dispatch, id]);

	const comments = useSelector(getArticleDetailsComments.selectAll);
	const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addArticleDetailsComment(text));
		},
		[dispatch]
	);

	if (!id) {
		return (
			<div>
				<p>{t('Статья не найдена')}</p>
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			<ArticleDetails id={id} />
			<AddCommentForm onSendComment={onSendComment} />
			<CommentList comments={comments} isLoading={isLoading} />
		</DynamicModuleLoader>
	);
};

export default ArticleDetailsPage;
