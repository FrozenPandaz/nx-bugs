import React from 'react';
import { render } from '@testing-library/react';

import Lib188 from './lib188';

describe(' Lib188', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib188 />);
    expect(baseElement).toBeTruthy();
  });
});
