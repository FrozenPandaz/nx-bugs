import React from 'react';
import { render } from '@testing-library/react';

import Lib502 from './lib502';

describe(' Lib502', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib502 />);
    expect(baseElement).toBeTruthy();
  });
});
