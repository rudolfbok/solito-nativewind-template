/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

// Get Expo defaults
const defaultConfig = getDefaultConfig(projectRoot, { isCSSEnabled: true });

// Merge defaults with custom settings
const config = {
	...defaultConfig,
	watchFolders: [
		...defaultConfig.watchFolders, // keep Expo defaults
		workspaceRoot, // add your monorepo root
	],
	resolver: {
		...defaultConfig.resolver,
		nodeModulesPaths: [
			path.resolve(projectRoot, 'node_modules'),
			path.resolve(workspaceRoot, 'node_modules'),
		],
		disableHierarchicalLookup: false, // match Expo default
	},
	transformer: {
		...defaultConfig.transformer,
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
	},
};

// Wrap with NativeWind
module.exports = withNativeWind(config, {
	input: './global.css',
	projectRoot,
	inlineRem: false,
});
