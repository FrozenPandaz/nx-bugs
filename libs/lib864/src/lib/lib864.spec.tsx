import React from 'react';
import { render } from '@testing-library/react';

import Lib864 from './lib864';

describe(' Lib864', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib864 />);
    expect(baseElement).toBeTruthy();
  });
});
