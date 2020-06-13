import React from 'react';
import { render } from '@testing-library/react';

import Lib408 from './lib408';

describe(' Lib408', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib408 />);
    expect(baseElement).toBeTruthy();
  });
});
