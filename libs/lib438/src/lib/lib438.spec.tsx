import React from 'react';
import { render } from '@testing-library/react';

import Lib438 from './lib438';

describe(' Lib438', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib438 />);
    expect(baseElement).toBeTruthy();
  });
});
