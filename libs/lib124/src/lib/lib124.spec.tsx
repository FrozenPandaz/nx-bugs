import React from 'react';
import { render } from '@testing-library/react';

import Lib124 from './lib124';

describe(' Lib124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib124 />);
    expect(baseElement).toBeTruthy();
  });
});
