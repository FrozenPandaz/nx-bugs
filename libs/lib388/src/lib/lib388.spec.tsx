import React from 'react';
import { render } from '@testing-library/react';

import Lib388 from './lib388';

describe(' Lib388', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib388 />);
    expect(baseElement).toBeTruthy();
  });
});
