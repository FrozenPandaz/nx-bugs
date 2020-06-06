import React from 'react';
import { render } from '@testing-library/react';

import Lib85 from './lib85';

describe(' Lib85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib85 />);
    expect(baseElement).toBeTruthy();
  });
});
