module.exports = {
	testEnvironment: 'node',
	testMatch: [
		'<rootDir>/test/**/*.test.js',
		'<rootDir>/tests/**/*.test.js',
		'<rootDir>/__test__/**/*.test.js',
		'<rootDir>/__tests__/**/*.test.js'
	],
	testPathIgnorePatterns: ['node_modules/'],
	collectCoverageFrom: ['<rootDir>/controllers/**/*'],
	coveragePathIgnorePatterns: ['node_modules/'],
	coverageReporters: ['text', 'html'],
	clearMocks: true,
	testTimeout: 0
}