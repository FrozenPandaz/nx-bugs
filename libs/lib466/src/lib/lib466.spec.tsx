import React from 'react';
import { render } from '@testing-library/react';

import Lib466 from './lib466';

describe(' Lib466', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib466 />);
    expect(baseElement).toBeTruthy();
  });
});
