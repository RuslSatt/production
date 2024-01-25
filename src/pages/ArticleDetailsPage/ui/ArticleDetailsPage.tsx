import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

const ArticleDetailsPage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<p>{t('ArticleDetailsPage')}</p>
		</div>
	);
};

export default ArticleDetailsPage;
