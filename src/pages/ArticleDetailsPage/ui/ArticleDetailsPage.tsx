import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails';
import { useParams } from 'react-router-dom';
import styles from './ArticlesPage.module.scss';

const ArticleDetailsPage = () => {
	const { t } = useTranslation();

	const { id } = useParams();

	if (!id) {
		return (
			<div>
				<p>{t('Статья не найдена')}</p>
			</div>
		);
	}

	return (
		<div>
			<ArticleDetails id={id} />
		</div>
	);
};

export default ArticleDetailsPage;
