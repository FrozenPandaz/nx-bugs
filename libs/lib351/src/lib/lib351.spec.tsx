import React from 'react';
import { render } from '@testing-library/react';

import Lib351 from './lib351';

describe(' Lib351', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib351 />);
    expect(baseElement).toBeTruthy();
  });
});
