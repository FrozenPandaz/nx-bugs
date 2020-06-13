import React from 'react';
import { render } from '@testing-library/react';

import Lib900 from './lib900';

describe(' Lib900', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib900 />);
    expect(baseElement).toBeTruthy();
  });
});
