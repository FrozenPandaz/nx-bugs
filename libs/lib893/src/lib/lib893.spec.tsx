import React from 'react';
import { render } from '@testing-library/react';

import Lib893 from './lib893';

describe(' Lib893', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib893 />);
    expect(baseElement).toBeTruthy();
  });
});
