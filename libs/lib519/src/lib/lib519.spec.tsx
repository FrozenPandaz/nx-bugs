import React from 'react';
import { render } from '@testing-library/react';

import Lib519 from './lib519';

describe(' Lib519', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib519 />);
    expect(baseElement).toBeTruthy();
  });
});
