import React from 'react';
import { render } from '@testing-library/react';

import Lib575 from './lib575';

describe(' Lib575', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib575 />);
    expect(baseElement).toBeTruthy();
  });
});
