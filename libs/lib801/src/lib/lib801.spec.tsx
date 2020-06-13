import React from 'react';
import { render } from '@testing-library/react';

import Lib801 from './lib801';

describe(' Lib801', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib801 />);
    expect(baseElement).toBeTruthy();
  });
});
