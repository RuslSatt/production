import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';

export interface ArticleListItemProps {
	className?: string;
	article: IArticle;
	view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { article, view, className } = props;

	const { t } = useTranslation();

	const renderItem = () => {
		if (view === ArticleView.CARD) {
			return <div>{article.title}</div>;
		}

		return <div>{article.title}</div>;
	};

	return <div className={classNames(style.item, [className])}>{renderItem()}</div>;
});
