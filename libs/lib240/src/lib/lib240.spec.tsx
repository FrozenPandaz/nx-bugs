import React from 'react';
import { render } from '@testing-library/react';

import Lib240 from './lib240';

describe(' Lib240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib240 />);
    expect(baseElement).toBeTruthy();
  });
});
