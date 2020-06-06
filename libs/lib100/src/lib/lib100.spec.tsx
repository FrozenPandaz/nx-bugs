import React from 'react';
import { render } from '@testing-library/react';

import Lib100 from './lib100';

describe(' Lib100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib100 />);
    expect(baseElement).toBeTruthy();
  });
});
