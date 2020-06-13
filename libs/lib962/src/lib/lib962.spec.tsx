import React from 'react';
import { render } from '@testing-library/react';

import Lib962 from './lib962';

describe(' Lib962', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib962 />);
    expect(baseElement).toBeTruthy();
  });
});
