import { privateLib } from './private-lib';

describe('privateLib', () => {
  it('should work', () => {
    expect(privateLib()).toEqual('private-lib');
  });
});
