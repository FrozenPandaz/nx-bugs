import React from 'react';
import { render } from '@testing-library/react';

import Lib869 from './lib869';

describe(' Lib869', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib869 />);
    expect(baseElement).toBeTruthy();
  });
});
