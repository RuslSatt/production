import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Article.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

export interface ArticleImageProps {
	data?: IArticleImageBlock;
}

export const ArticleImageBlock = memo((props: ArticleImageProps) => {
	const { data } = props;

	const { t } = useTranslation();

	return <div className={style.article}></div>;
});
