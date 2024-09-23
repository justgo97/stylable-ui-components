/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  testEnvironment: "jest-environment-jsdom",

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  preset: "ts-jest",
};
