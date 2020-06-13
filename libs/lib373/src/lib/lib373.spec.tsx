import React from 'react';
import { render } from '@testing-library/react';

import Lib373 from './lib373';

describe(' Lib373', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib373 />);
    expect(baseElement).toBeTruthy();
  });
});
