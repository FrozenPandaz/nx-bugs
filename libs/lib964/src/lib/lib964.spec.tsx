import React from 'react';
import { render } from '@testing-library/react';

import Lib964 from './lib964';

describe(' Lib964', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib964 />);
    expect(baseElement).toBeTruthy();
  });
});
