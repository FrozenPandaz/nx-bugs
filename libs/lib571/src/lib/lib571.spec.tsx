import React from 'react';
import { render } from '@testing-library/react';

import Lib571 from './lib571';

describe(' Lib571', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib571 />);
    expect(baseElement).toBeTruthy();
  });
});
