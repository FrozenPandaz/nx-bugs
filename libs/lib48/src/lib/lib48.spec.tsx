import React from 'react';
import { render } from '@testing-library/react';

import Lib48 from './lib48';

describe(' Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
