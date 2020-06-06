import React from 'react';
import { render } from '@testing-library/react';

import Lib148 from './lib148';

describe(' Lib148', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib148 />);
    expect(baseElement).toBeTruthy();
  });
});
