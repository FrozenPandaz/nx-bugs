import React from 'react';
import { render } from '@testing-library/react';

import Lib47 from './lib47';

describe(' Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
