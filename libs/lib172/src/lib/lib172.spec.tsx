import React from 'react';
import { render } from '@testing-library/react';

import Lib172 from './lib172';

describe(' Lib172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib172 />);
    expect(baseElement).toBeTruthy();
  });
});
