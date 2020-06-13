import React from 'react';
import { render } from '@testing-library/react';

import Lib269 from './lib269';

describe(' Lib269', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib269 />);
    expect(baseElement).toBeTruthy();
  });
});
