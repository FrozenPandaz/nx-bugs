import React from 'react';
import { render } from '@testing-library/react';

import Lib334 from './lib334';

describe(' Lib334', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib334 />);
    expect(baseElement).toBeTruthy();
  });
});
