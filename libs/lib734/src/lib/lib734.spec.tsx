import React from 'react';
import { render } from '@testing-library/react';

import Lib734 from './lib734';

describe(' Lib734', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib734 />);
    expect(baseElement).toBeTruthy();
  });
});
