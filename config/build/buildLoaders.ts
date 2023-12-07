import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';

// * Порядок расположения loaders важно.

export function getLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};

	const styleLoader = buildStyleLoader(options.isDev);

	return [tsLoader, styleLoader];
}
