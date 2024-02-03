import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading, Text } from '@chakra-ui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleTextBlock.module.scss';
import { IArticleTextBlock } from '../../model/types/article';

export interface ArticleTextProps {
	className?: string;
	data: IArticleTextBlock;
}

export const ArticleTextBlock = memo((props: ArticleTextProps) => {
	const { data, className } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames('', [className])}>
			{data.title && <Heading size='md'>{data.title}</Heading>}

			{data?.paragraphs?.map((text) => <Text key={text}>{text}</Text>)}
		</div>
	);
});
