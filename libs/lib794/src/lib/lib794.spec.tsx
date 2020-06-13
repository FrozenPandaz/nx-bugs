import React from 'react';
import { render } from '@testing-library/react';

import Lib794 from './lib794';

describe(' Lib794', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib794 />);
    expect(baseElement).toBeTruthy();
  });
});
