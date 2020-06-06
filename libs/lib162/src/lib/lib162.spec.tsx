import React from 'react';
import { render } from '@testing-library/react';

import Lib162 from './lib162';

describe(' Lib162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib162 />);
    expect(baseElement).toBeTruthy();
  });
});
