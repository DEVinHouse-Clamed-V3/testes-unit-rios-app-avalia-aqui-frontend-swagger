import { helloWorld } from '../src/helloWorld';

describe('helloWorld function', () => {
    test('should return "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});