import React from 'react';
import { render } from '@testing-library/react';

import Lib95 from './lib95';

describe(' Lib95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib95 />);
    expect(baseElement).toBeTruthy();
  });
});
