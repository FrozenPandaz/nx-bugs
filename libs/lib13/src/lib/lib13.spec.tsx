import React from 'react';
import { render } from '@testing-library/react';

import Lib13 from './lib13';

describe(' Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
