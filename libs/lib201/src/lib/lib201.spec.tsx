import React from 'react';
import { render } from '@testing-library/react';

import Lib201 from './lib201';

describe(' Lib201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib201 />);
    expect(baseElement).toBeTruthy();
  });
});
