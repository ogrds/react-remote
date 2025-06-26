export const mfConfig = {
	name: 'react_remote',
	filename: 'remoteEntry.js',
	exposes: {
		'./IncrementButton': './src/IncrementButton',
	},
	shared: {
		react: {
			singleton: true,
		},
		'react-dom': {
			singleton: true,
		},
	},
};
