import React from 'react';
import { render } from '@testing-library/react';

import Lib55 from './lib55';

describe(' Lib55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib55 />);
    expect(baseElement).toBeTruthy();
  });
});
