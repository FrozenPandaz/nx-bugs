import React from 'react';
import { render } from '@testing-library/react';

import Lib87 from './lib87';

describe(' Lib87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib87 />);
    expect(baseElement).toBeTruthy();
  });
});
