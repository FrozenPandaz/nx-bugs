import React from 'react';
import { render } from '@testing-library/react';

import Lib881 from './lib881';

describe(' Lib881', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib881 />);
    expect(baseElement).toBeTruthy();
  });
});
