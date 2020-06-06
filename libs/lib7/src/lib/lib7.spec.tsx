import React from 'react';
import { render } from '@testing-library/react';

import Lib7 from './lib7';

describe(' Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
