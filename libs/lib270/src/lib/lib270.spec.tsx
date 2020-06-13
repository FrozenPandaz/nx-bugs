import React from 'react';
import { render } from '@testing-library/react';

import Lib270 from './lib270';

describe(' Lib270', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib270 />);
    expect(baseElement).toBeTruthy();
  });
});
