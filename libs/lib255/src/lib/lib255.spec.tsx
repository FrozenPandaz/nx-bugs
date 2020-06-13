import React from 'react';
import { render } from '@testing-library/react';

import Lib255 from './lib255';

describe(' Lib255', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib255 />);
    expect(baseElement).toBeTruthy();
  });
});
