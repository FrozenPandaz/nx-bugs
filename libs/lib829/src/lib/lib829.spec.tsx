import React from 'react';
import { render } from '@testing-library/react';

import Lib829 from './lib829';

describe(' Lib829', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib829 />);
    expect(baseElement).toBeTruthy();
  });
});
