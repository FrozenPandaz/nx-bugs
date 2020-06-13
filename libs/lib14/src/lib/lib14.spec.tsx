import React from 'react';
import { render } from '@testing-library/react';

import Lib14 from './lib14';

describe(' Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
