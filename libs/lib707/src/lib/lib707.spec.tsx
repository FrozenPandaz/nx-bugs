import React from 'react';
import { render } from '@testing-library/react';

import Lib707 from './lib707';

describe(' Lib707', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib707 />);
    expect(baseElement).toBeTruthy();
  });
});
