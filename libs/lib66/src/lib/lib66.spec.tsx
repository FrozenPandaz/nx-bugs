import React from 'react';
import { render } from '@testing-library/react';

import Lib66 from './lib66';

describe(' Lib66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib66 />);
    expect(baseElement).toBeTruthy();
  });
});
