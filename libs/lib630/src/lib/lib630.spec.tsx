import React from 'react';
import { render } from '@testing-library/react';

import Lib630 from './lib630';

describe(' Lib630', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib630 />);
    expect(baseElement).toBeTruthy();
  });
});
