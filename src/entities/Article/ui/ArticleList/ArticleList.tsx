import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesReducer } from 'entities/Article/model/slice/articlesSlice';
import style from './ArticleList.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

export interface ArticleListProps {
	className?: string;
	articles?: IArticle[];
	view?: ArticleView;
	isLoading?: boolean;
}

const reducersList = {
	articles: articlesReducer
};

export const ArticleList = memo((props: ArticleListProps) => {
	const { articles, view = ArticleView.LIST, className, isLoading } = props;

	const { t } = useTranslation();

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			<div className={classNames('', [className])}>
				{!!articles?.length && articles.map((item) => <ArticleListItem article={item} view={view} />)}
			</div>
		</DynamicModuleLoader>
	);
});
