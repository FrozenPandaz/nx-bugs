import React from 'react';
import { render } from '@testing-library/react';

import Lib599 from './lib599';

describe(' Lib599', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib599 />);
    expect(baseElement).toBeTruthy();
  });
});
