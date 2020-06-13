import React from 'react';
import { render } from '@testing-library/react';

import Lib347 from './lib347';

describe(' Lib347', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib347 />);
    expect(baseElement).toBeTruthy();
  });
});
