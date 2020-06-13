import React from 'react';
import { render } from '@testing-library/react';

import Lib520 from './lib520';

describe(' Lib520', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib520 />);
    expect(baseElement).toBeTruthy();
  });
});
