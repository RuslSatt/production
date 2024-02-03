import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';
import { Avatar, Heading, Icon, Text } from '@chakra-ui/react';
import { CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
	getArticleDetails,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import style from './Article.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';

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

	const createBlocks = useCallback((block: ArticleBlock) => {
		if (block.type === ArticleBlockType.TEXT) {
			return <ArticleTextBlock className={style.block} key={block.id} data={block} />;
		}

		if (block.type === ArticleBlockType.CODE) {
			return <ArticleCodeBlock className={style.block} key={block.id} data={block} />;
		}

		if (block.type === ArticleBlockType.IMAGE) {
			return <ArticleImageBlock className={style.block} key={block.id} data={block} />;
		}

		return null;
	}, []);

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

	if (!isLoading && data) {
		content = (
			<div className={style.article}>
				<div className={style.avatar}>
					<Avatar size='2xl' src={data?.img} />
				</div>

				<Heading>{data?.title}</Heading>
				<div className={style.info}>
					<Icon as={ViewIcon} />
					<Text>{data?.views}</Text>
				</div>
				<div className={style.info}>
					<Icon as={CalendarIcon} />
					<Text>{data?.createdAt}</Text>
				</div>
				{data.blocks.map(createBlocks)}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
			{content}
		</DynamicModuleLoader>
	);
});
