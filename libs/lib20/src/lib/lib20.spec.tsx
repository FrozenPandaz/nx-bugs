import React from 'react';
import { render } from '@testing-library/react';

import Lib20 from './lib20';

describe(' Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
