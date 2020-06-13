import React from 'react';
import { render } from '@testing-library/react';

import Lib194 from './lib194';

describe(' Lib194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib194 />);
    expect(baseElement).toBeTruthy();
  });
});
