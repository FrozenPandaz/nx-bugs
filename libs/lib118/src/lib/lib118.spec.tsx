import React from 'react';
import { render } from '@testing-library/react';

import Lib118 from './lib118';

describe(' Lib118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib118 />);
    expect(baseElement).toBeTruthy();
  });
});
