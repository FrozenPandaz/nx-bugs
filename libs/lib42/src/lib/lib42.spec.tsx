import React from 'react';
import { render } from '@testing-library/react';

import Lib42 from './lib42';

describe(' Lib42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib42 />);
    expect(baseElement).toBeTruthy();
  });
});
