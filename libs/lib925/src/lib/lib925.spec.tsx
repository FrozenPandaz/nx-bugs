import React from 'react';
import { render } from '@testing-library/react';

import Lib925 from './lib925';

describe(' Lib925', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib925 />);
    expect(baseElement).toBeTruthy();
  });
});
