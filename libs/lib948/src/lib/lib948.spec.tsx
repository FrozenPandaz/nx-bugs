import React from 'react';
import { render } from '@testing-library/react';

import Lib948 from './lib948';

describe(' Lib948', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib948 />);
    expect(baseElement).toBeTruthy();
  });
});
