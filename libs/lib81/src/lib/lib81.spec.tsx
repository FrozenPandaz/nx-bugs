import React from 'react';
import { render } from '@testing-library/react';

import Lib81 from './lib81';

describe(' Lib81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib81 />);
    expect(baseElement).toBeTruthy();
  });
});
