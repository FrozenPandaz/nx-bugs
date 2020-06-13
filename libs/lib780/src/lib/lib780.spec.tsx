import React from 'react';
import { render } from '@testing-library/react';

import Lib780 from './lib780';

describe(' Lib780', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib780 />);
    expect(baseElement).toBeTruthy();
  });
});
