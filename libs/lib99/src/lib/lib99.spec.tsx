import React from 'react';
import { render } from '@testing-library/react';

import Lib99 from './lib99';

describe(' Lib99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib99 />);
    expect(baseElement).toBeTruthy();
  });
});
