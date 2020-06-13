import React from 'react';
import { render } from '@testing-library/react';

import Lib412 from './lib412';

describe(' Lib412', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib412 />);
    expect(baseElement).toBeTruthy();
  });
});
