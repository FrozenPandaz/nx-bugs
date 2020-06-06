import React from 'react';
import { render } from '@testing-library/react';

import Lib487 from './lib487';

describe(' Lib487', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib487 />);
    expect(baseElement).toBeTruthy();
  });
});
