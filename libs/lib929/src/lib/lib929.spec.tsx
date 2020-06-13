import React from 'react';
import { render } from '@testing-library/react';

import Lib929 from './lib929';

describe(' Lib929', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib929 />);
    expect(baseElement).toBeTruthy();
  });
});
