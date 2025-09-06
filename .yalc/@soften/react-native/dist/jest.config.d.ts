export let preset: string;
export let moduleFileExtensions: string[];
export let testMatch: string[];
export let transform: {
    '^.+\\.(js|jsx|ts|tsx)$': string;
};
export let collectCoverageFrom: string[];
export let setupFilesAfterEnv: never[];
export let testEnvironment: string;
