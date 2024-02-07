import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, getArticles } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from 'entities/Article/model/services/fetchArticles';
import { useSelector } from 'react-redux';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	const articles = useSelector(getArticles);

	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
};

export default ArticlesPage;
