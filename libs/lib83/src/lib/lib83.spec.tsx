import React from 'react';
import { render } from '@testing-library/react';

import Lib83 from './lib83';

describe(' Lib83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib83 />);
    expect(baseElement).toBeTruthy();
  });
});
