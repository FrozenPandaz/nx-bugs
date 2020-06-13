import React from 'react';
import { render } from '@testing-library/react';

import Lib792 from './lib792';

describe(' Lib792', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib792 />);
    expect(baseElement).toBeTruthy();
  });
});
