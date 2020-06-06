import React from 'react';
import { render } from '@testing-library/react';

import Lib149 from './lib149';

describe(' Lib149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib149 />);
    expect(baseElement).toBeTruthy();
  });
});
