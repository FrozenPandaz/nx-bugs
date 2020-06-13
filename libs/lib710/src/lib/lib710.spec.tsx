import React from 'react';
import { render } from '@testing-library/react';

import Lib710 from './lib710';

describe(' Lib710', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib710 />);
    expect(baseElement).toBeTruthy();
  });
});
