import React from 'react';
import { render } from '@testing-library/react';

import Lib128 from './lib128';

describe(' Lib128', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib128 />);
    expect(baseElement).toBeTruthy();
  });
});
