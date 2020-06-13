import React from 'react';
import { render } from '@testing-library/react';

import Lib626 from './lib626';

describe(' Lib626', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib626 />);
    expect(baseElement).toBeTruthy();
  });
});
