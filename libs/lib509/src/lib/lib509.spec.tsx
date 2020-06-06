import React from 'react';
import { render } from '@testing-library/react';

import Lib509 from './lib509';

describe(' Lib509', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib509 />);
    expect(baseElement).toBeTruthy();
  });
});
