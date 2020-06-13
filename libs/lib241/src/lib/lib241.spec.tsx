import React from 'react';
import { render } from '@testing-library/react';

import Lib241 from './lib241';

describe(' Lib241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib241 />);
    expect(baseElement).toBeTruthy();
  });
});
