import * as subject from './app';

describe('subject', () => {
  it('should return hello world', async () => {
    const result = await subject.helloWorldAsync();
    expect(result.data).toEqual({ hello: 'World' });
  });
});
