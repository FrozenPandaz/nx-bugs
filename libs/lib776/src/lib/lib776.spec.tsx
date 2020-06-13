import React from 'react';
import { render } from '@testing-library/react';

import Lib776 from './lib776';

describe(' Lib776', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib776 />);
    expect(baseElement).toBeTruthy();
  });
});
