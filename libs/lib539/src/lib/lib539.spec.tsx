import React from 'react';
import { render } from '@testing-library/react';

import Lib539 from './lib539';

describe(' Lib539', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib539 />);
    expect(baseElement).toBeTruthy();
  });
});
