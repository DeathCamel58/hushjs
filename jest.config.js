// jest.config.js
module.exports = {
    testMatch: [
        '**/tests/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
};
