import React from 'react';
import { render } from '@testing-library/react';

import Lib708 from './lib708';

describe(' Lib708', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib708 />);
    expect(baseElement).toBeTruthy();
  });
});
