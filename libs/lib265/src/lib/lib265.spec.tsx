import React from 'react';
import { render } from '@testing-library/react';

import Lib265 from './lib265';

describe(' Lib265', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib265 />);
    expect(baseElement).toBeTruthy();
  });
});
