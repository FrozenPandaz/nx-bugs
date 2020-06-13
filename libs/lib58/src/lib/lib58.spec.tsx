import React from 'react';
import { render } from '@testing-library/react';

import Lib58 from './lib58';

describe(' Lib58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib58 />);
    expect(baseElement).toBeTruthy();
  });
});
