import React from 'react';
import { render } from '@testing-library/react';

import Lib551 from './lib551';

describe(' Lib551', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib551 />);
    expect(baseElement).toBeTruthy();
  });
});
