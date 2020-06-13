import React from 'react';
import { render } from '@testing-library/react';

import Lib357 from './lib357';

describe(' Lib357', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib357 />);
    expect(baseElement).toBeTruthy();
  });
});
