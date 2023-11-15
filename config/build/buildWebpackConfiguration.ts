import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { getPlugins } from './buildPlugins';
import { getLoaders } from './buildLoaders';
import { getResolvers } from './buildResolve';
import { getDevServer } from './buildDevServer';

export function getWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? getDevServer(options) : undefined,
		plugins: getPlugins(paths),
		module: {
			rules: getLoaders(options)
		},
		resolve: getResolvers()
	};
}
