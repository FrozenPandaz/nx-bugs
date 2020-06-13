import React from 'react';
import { render } from '@testing-library/react';

import Lib632 from './lib632';

describe(' Lib632', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib632 />);
    expect(baseElement).toBeTruthy();
  });
});
