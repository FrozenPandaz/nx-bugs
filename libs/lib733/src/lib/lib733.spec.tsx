import React from 'react';
import { render } from '@testing-library/react';

import Lib733 from './lib733';

describe(' Lib733', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib733 />);
    expect(baseElement).toBeTruthy();
  });
});
