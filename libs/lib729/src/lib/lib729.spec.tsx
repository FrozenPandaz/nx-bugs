import React from 'react';
import { render } from '@testing-library/react';

import Lib729 from './lib729';

describe(' Lib729', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib729 />);
    expect(baseElement).toBeTruthy();
  });
});
