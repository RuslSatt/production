import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';

// * Порядок расположения loaders важно.

export function getLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					]
				]
			}
		}
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};

	const styleLoader = buildStyleLoader(options.isDev);

	return [babelLoader, tsLoader, styleLoader];
}
