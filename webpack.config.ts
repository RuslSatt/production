import webpack from 'webpack';
import path from 'path';
import { getWebpackConfig } from './config/build/buildWebpackConfiguration';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	};

	const mode = env.mode || 'development';
	const port = env.port || 5000;
	const isDev = mode === 'development';

	const config: webpack.Configuration = getWebpackConfig({
		mode,
		paths,
		isDev,
		port
	});

	return config;
};
