import React from 'react';
import { render } from '@testing-library/react';

import Lib206 from './lib206';

describe(' Lib206', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib206 />);
    expect(baseElement).toBeTruthy();
  });
});
