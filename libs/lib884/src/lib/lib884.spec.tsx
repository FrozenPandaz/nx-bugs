import React from 'react';
import { render } from '@testing-library/react';

import Lib884 from './lib884';

describe(' Lib884', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib884 />);
    expect(baseElement).toBeTruthy();
  });
});
