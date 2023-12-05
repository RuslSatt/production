/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'\\.(scss|css)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	rootDir: '../../'
};
