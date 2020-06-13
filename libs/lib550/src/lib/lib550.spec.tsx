import React from 'react';
import { render } from '@testing-library/react';

import Lib550 from './lib550';

describe(' Lib550', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib550 />);
    expect(baseElement).toBeTruthy();
  });
});
