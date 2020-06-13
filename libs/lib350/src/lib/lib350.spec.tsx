import React from 'react';
import { render } from '@testing-library/react';

import Lib350 from './lib350';

describe(' Lib350', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib350 />);
    expect(baseElement).toBeTruthy();
  });
});
