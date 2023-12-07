import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		entry: '',
		output: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');
	config.module?.rules?.push(buildStyleLoader(true));
	return config;
};

//
