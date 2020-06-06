import React from 'react';
import { render } from '@testing-library/react';

import Lib284 from './lib284';

describe(' Lib284', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib284 />);
    expect(baseElement).toBeTruthy();
  });
});
