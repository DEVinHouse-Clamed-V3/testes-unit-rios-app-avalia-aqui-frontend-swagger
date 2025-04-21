module.exports = {
    preset: "jest-expo",
    transform: {
        "^.+\\.(js|ts|tsx)$": "babel-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
