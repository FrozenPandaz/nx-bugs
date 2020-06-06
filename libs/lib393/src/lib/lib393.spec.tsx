import React from 'react';
import { render } from '@testing-library/react';

import Lib393 from './lib393';

describe(' Lib393', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib393 />);
    expect(baseElement).toBeTruthy();
  });
});
