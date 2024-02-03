import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading, Image } from '@chakra-ui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ArticleImageBlock.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

export interface ArticleImageProps {
	className?: string;
	data: IArticleImageBlock;
}

export const ArticleImageBlock = memo((props: ArticleImageProps) => {
	const { data, className } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames('', [className])}>
			{data.title && <Heading size='md'>{data.title}</Heading>}

			{data.src && <Image src={data.src}></Image>}
		</div>
	);
});
