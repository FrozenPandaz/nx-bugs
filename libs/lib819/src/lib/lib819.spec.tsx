import React from 'react';
import { render } from '@testing-library/react';

import Lib819 from './lib819';

describe(' Lib819', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib819 />);
    expect(baseElement).toBeTruthy();
  });
});
