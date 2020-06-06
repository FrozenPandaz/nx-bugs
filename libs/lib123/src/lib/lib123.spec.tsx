import React from 'react';
import { render } from '@testing-library/react';

import Lib123 from './lib123';

describe(' Lib123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib123 />);
    expect(baseElement).toBeTruthy();
  });
});
