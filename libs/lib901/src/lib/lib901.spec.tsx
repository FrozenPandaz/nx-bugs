import React from 'react';
import { render } from '@testing-library/react';

import Lib901 from './lib901';

describe(' Lib901', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib901 />);
    expect(baseElement).toBeTruthy();
  });
});
