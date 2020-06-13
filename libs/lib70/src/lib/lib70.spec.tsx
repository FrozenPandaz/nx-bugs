import React from 'react';
import { render } from '@testing-library/react';

import Lib70 from './lib70';

describe(' Lib70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib70 />);
    expect(baseElement).toBeTruthy();
  });
});
