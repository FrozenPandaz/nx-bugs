import React from 'react';
import { render } from '@testing-library/react';

import Lib256 from './lib256';

describe(' Lib256', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib256 />);
    expect(baseElement).toBeTruthy();
  });
});
