import React from 'react';
import { render } from '@testing-library/react';

import Lib208 from './lib208';

describe(' Lib208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib208 />);
    expect(baseElement).toBeTruthy();
  });
});
