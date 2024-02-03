import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Article.module.scss';
import { IArticleTextBlock } from '../../model/types/article';

export interface ArticleTextProps {
	data?: IArticleTextBlock;
}

export const ArticleTextBlock = memo((props: ArticleTextProps) => {
	const { data } = props;

	const { t } = useTranslation();

	return <div className={style.article}></div>;
});
