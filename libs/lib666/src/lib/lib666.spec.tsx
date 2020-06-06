import React from 'react';
import { render } from '@testing-library/react';

import Lib666 from './lib666';

describe(' Lib666', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib666 />);
    expect(baseElement).toBeTruthy();
  });
});
