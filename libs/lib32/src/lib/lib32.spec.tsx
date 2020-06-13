import React from 'react';
import { render } from '@testing-library/react';

import Lib32 from './lib32';

describe(' Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
