import React from 'react';
import { render } from '@testing-library/react';

import Lib247 from './lib247';

describe(' Lib247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib247 />);
    expect(baseElement).toBeTruthy();
  });
});
