import React from 'react';
import { render } from '@testing-library/react';

import Lib731 from './lib731';

describe(' Lib731', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib731 />);
    expect(baseElement).toBeTruthy();
  });
});
