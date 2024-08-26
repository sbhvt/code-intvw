import * as subject from './app';

describe('subject', () => {
  it('should return hello world', () => {
    const result = subject.helloWorld();
    expect(result).toBe('hello world');
  });
});
