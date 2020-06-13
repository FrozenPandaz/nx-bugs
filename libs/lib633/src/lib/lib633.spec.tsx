import React from 'react';
import { render } from '@testing-library/react';

import Lib633 from './lib633';

describe(' Lib633', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib633 />);
    expect(baseElement).toBeTruthy();
  });
});
