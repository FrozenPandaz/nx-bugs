import React from 'react';
import { render } from '@testing-library/react';

import Lib802 from './lib802';

describe(' Lib802', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib802 />);
    expect(baseElement).toBeTruthy();
  });
});
