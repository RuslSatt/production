import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from '@chakra-ui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleCodeBlock.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

export interface ArticleCodeProps {
	className?: string;
	data: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo((props: ArticleCodeProps) => {
	const { data, className } = props;

	const { t } = useTranslation();

	return <div className={classNames('', [className])}>{data.code && <Code>{data.code}</Code>}</div>;
});
