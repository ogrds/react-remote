export const mfConfig = {
	name: 'react_remote',
	filename: 'remoteEntry.js',
	exposes: {
		'./IncrementButton': './src/IncrementButton',
	},
	shared: ['react', 'react-dom'],
};
