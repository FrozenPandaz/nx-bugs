import React from 'react';
import { render } from '@testing-library/react';

import Lib401 from './lib401';

describe(' Lib401', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib401 />);
    expect(baseElement).toBeTruthy();
  });
});
