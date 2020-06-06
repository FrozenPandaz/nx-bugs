import React from 'react';
import { render } from '@testing-library/react';

import Lib94 from './lib94';

describe(' Lib94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib94 />);
    expect(baseElement).toBeTruthy();
  });
});
