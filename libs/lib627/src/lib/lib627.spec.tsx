import React from 'react';
import { render } from '@testing-library/react';

import Lib627 from './lib627';

describe(' Lib627', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib627 />);
    expect(baseElement).toBeTruthy();
  });
});
