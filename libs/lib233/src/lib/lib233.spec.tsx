import React from 'react';
import { render } from '@testing-library/react';

import Lib233 from './lib233';

describe(' Lib233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib233 />);
    expect(baseElement).toBeTruthy();
  });
});
