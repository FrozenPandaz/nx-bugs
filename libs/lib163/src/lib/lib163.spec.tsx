import React from 'react';
import { render } from '@testing-library/react';

import Lib163 from './lib163';

describe(' Lib163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib163 />);
    expect(baseElement).toBeTruthy();
  });
});
