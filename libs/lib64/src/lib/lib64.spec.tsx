import React from 'react';
import { render } from '@testing-library/react';

import Lib64 from './lib64';

describe(' Lib64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib64 />);
    expect(baseElement).toBeTruthy();
  });
});
