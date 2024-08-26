import * as subject from './app';

describe('subject', () => {
  it('should return hello world', async () => {
    const result = await subject.processHoldsForUser();
    expect(result.data).toEqual({ hello: 'World' });
  });
});
