import React from 'react';
import { render } from '@testing-library/react';

import Lib426 from './lib426';

describe(' Lib426', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib426 />);
    expect(baseElement).toBeTruthy();
  });
});
