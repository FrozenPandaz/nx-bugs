import React from 'react';
import { render } from '@testing-library/react';

import Lib101 from './lib101';

describe(' Lib101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib101 />);
    expect(baseElement).toBeTruthy();
  });
});
