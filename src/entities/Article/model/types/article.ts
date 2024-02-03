type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE';

interface ArticleBlockBase {
	id: number;
	type: ArticleBlockType;
}

export interface IArticleTextBlock extends ArticleBlockBase {
	title: string;
	paragraphs: string[];
}

export interface IArticleCodeBlock extends ArticleBlockBase {
	code: string;
}

export interface IArticleImageBlock extends ArticleBlockBase {
	title: string;
	src: string;
}

type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock;

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
