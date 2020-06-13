import React from 'react';
import { render } from '@testing-library/react';

import Lib452 from './lib452';

describe(' Lib452', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib452 />);
    expect(baseElement).toBeTruthy();
  });
});
