import React from 'react';
import { render } from '@testing-library/react';

import Lib670 from './lib670';

describe(' Lib670', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib670 />);
    expect(baseElement).toBeTruthy();
  });
});
