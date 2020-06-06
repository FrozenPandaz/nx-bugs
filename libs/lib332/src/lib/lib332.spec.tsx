import React from 'react';
import { render } from '@testing-library/react';

import Lib332 from './lib332';

describe(' Lib332', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib332 />);
    expect(baseElement).toBeTruthy();
  });
});
