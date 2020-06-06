import React from 'react';
import { render } from '@testing-library/react';

import Lib576 from './lib576';

describe(' Lib576', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib576 />);
    expect(baseElement).toBeTruthy();
  });
});
