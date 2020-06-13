import React from 'react';
import { render } from '@testing-library/react';

import Lib590 from './lib590';

describe(' Lib590', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib590 />);
    expect(baseElement).toBeTruthy();
  });
});
