import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleBlockType } from '../types/article';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';

describe('article details selector', () => {
	test('get article details data', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: false,
				error: undefined,
				data: {
					id: 1,
					title: 'Javascript news',
					subtitle: 'Что нового в JS за 2022 год?',
					img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
					views: 1022,
					createdAt: '26.02.2022',
					type: ['IT'],
					blocks: [
						{
							id: 1,
							type: ArticleBlockType.TEXT,
							title: 'Заголовок этого блока',
							paragraphs: ['Программа, которую по традиции называют «Hello, world!», очень проста']
						}
					]
				}
			}
		};
		expect(getArticleDetails(state as StateSchema)).toEqual({
			id: 1,
			title: 'Javascript news',
			subtitle: 'Что нового в JS за 2022 год?',
			img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
			views: 1022,
			createdAt: '26.02.2022',
			type: ['IT'],
			blocks: [
				{
					id: 1,
					type: ArticleBlockType.TEXT,
					title: 'Заголовок этого блока',
					paragraphs: ['Программа, которую по традиции называют «Hello, world!», очень проста']
				}
			]
		});
	});

	test('get article details isLoading', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
				error: undefined,
				data: undefined
			}
		};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
	});

	test('get article details error', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: false,
				error: 'Error',
				data: undefined
			}
		};
		expect(getArticleDetailsError(state as StateSchema)).toEqual('Error');
	});
});
