import React from 'react';
import { render } from '@testing-library/react';

import Lib283 from './lib283';

describe(' Lib283', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib283 />);
    expect(baseElement).toBeTruthy();
  });
});
