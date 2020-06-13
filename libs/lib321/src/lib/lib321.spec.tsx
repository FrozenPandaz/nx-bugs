import React from 'react';
import { render } from '@testing-library/react';

import Lib321 from './lib321';

describe(' Lib321', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib321 />);
    expect(baseElement).toBeTruthy();
  });
});
