import React from 'react';
import { render } from '@testing-library/react';

import Lib23 from './lib23';

describe(' Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
