import React from 'react';
import { render } from '@testing-library/react';

import Lib154 from './lib154';

describe(' Lib154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib154 />);
    expect(baseElement).toBeTruthy();
  });
});
