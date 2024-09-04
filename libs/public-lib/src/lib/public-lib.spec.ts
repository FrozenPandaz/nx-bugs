import { publicLib } from './public-lib';

describe('publicLib', () => {
  it('should work', () => {
    expect(publicLib()).toEqual('public-lib');
  });
});
