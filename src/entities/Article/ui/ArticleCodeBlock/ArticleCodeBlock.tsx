import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Article.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

export interface ArticleCodeProps {
	data?: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo((props: ArticleCodeProps) => {
	const { data } = props;

	const { t } = useTranslation();

	return <div className={style.article}></div>;
});
