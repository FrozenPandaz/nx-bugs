import React from 'react';
import { render } from '@testing-library/react';

import Lib696 from './lib696';

describe(' Lib696', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib696 />);
    expect(baseElement).toBeTruthy();
  });
});
