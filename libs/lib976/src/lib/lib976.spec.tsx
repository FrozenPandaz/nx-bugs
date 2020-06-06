import React from 'react';
import { render } from '@testing-library/react';

import Lib976 from './lib976';

describe(' Lib976', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib976 />);
    expect(baseElement).toBeTruthy();
  });
});
