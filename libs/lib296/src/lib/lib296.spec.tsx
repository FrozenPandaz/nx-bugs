import React from 'react';
import { render } from '@testing-library/react';

import Lib296 from './lib296';

describe(' Lib296', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib296 />);
    expect(baseElement).toBeTruthy();
  });
});
