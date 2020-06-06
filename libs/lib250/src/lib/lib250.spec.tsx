import React from 'react';
import { render } from '@testing-library/react';

import Lib250 from './lib250';

describe(' Lib250', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib250 />);
    expect(baseElement).toBeTruthy();
  });
});
