import React from 'react';
import { render } from '@testing-library/react';

import Lib592 from './lib592';

describe(' Lib592', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib592 />);
    expect(baseElement).toBeTruthy();
  });
});
