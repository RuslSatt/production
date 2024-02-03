type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export enum ArticleBlockType {
	TEXT = 'TEXT',
	CODE = 'CODE',
	IMAGE = 'IMAGE'
}

interface ArticleBlockBase {
	id: number;
	type: ArticleBlockType;
}

export interface IArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	title: string;
	paragraphs: string[];
}

export interface IArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}

export interface IArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	title: string;
	src: string;
}

export type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock;

export interface IArticle {
	id: number;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
	isLoading: boolean;
	error?: string;
	data?: IArticle;
}
