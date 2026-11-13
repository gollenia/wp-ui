//jest.config.ts

module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': [
			'ts-jest',
			{
				tsconfig: './tsconfig.jest.json',
			},
		],
	},
	transformIgnorePatterns: ['node_modules/(?!troublesome-dependency/.*)'],
};
