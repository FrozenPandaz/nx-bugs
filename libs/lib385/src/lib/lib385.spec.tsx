import React from 'react';
import { render } from '@testing-library/react';

import Lib385 from './lib385';

describe(' Lib385', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib385 />);
    expect(baseElement).toBeTruthy();
  });
});
