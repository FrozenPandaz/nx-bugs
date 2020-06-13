import React from 'react';
import { render } from '@testing-library/react';

import Lib413 from './lib413';

describe(' Lib413', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib413 />);
    expect(baseElement).toBeTruthy();
  });
});
