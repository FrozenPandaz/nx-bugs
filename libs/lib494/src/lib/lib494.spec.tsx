import React from 'react';
import { render } from '@testing-library/react';

import Lib494 from './lib494';

describe(' Lib494', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib494 />);
    expect(baseElement).toBeTruthy();
  });
});
