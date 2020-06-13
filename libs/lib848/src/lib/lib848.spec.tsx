import React from 'react';
import { render } from '@testing-library/react';

import Lib848 from './lib848';

describe(' Lib848', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib848 />);
    expect(baseElement).toBeTruthy();
  });
});
