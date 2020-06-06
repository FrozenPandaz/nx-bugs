import React from 'react';
import { render } from '@testing-library/react';

import Lib908 from './lib908';

describe(' Lib908', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib908 />);
    expect(baseElement).toBeTruthy();
  });
});
