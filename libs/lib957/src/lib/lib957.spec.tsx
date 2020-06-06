import React from 'react';
import { render } from '@testing-library/react';

import Lib957 from './lib957';

describe(' Lib957', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib957 />);
    expect(baseElement).toBeTruthy();
  });
});
