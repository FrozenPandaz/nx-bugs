import React from 'react';
import { render } from '@testing-library/react';

import Lib815 from './lib815';

describe(' Lib815', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib815 />);
    expect(baseElement).toBeTruthy();
  });
});
