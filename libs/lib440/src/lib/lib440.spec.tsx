import React from 'react';
import { render } from '@testing-library/react';

import Lib440 from './lib440';

describe(' Lib440', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib440 />);
    expect(baseElement).toBeTruthy();
  });
});
