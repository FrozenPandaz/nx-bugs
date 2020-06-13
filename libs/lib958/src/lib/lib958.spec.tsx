import React from 'react';
import { render } from '@testing-library/react';

import Lib958 from './lib958';

describe(' Lib958', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib958 />);
    expect(baseElement).toBeTruthy();
  });
});
