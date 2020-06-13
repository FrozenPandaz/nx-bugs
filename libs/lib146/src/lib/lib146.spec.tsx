import React from 'react';
import { render } from '@testing-library/react';

import Lib146 from './lib146';

describe(' Lib146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib146 />);
    expect(baseElement).toBeTruthy();
  });
});
