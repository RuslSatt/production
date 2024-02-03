import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import {
	getArticleDetails,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/getArticleDetails';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';
import style from './Article.module.scss';

export interface ArticleProps {
	id: string;
}

const reducersList = {
	articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleProps) => {
	const { id } = props;

	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch, id]);

	const data = useSelector(getArticleDetails);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	let content;

	if (isLoading) {
		content = (
			<div>
				<SkeletonCircle size='10' />
				<SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
			</div>
		);
	}

	if (error) {
		content = <div>{t('Ошибка')}</div>;
	}

	if (!isLoading) {
		content = (
			<div className={style.article}>
				<p>{t('Article Details')}</p>
				<p>{data?.title}</p>
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			{content}
		</DynamicModuleLoader>
	);
});
