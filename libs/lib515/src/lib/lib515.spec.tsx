import React from 'react';
import { render } from '@testing-library/react';

import Lib515 from './lib515';

describe(' Lib515', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib515 />);
    expect(baseElement).toBeTruthy();
  });
});
