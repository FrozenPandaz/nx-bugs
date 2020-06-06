import React from 'react';
import { render } from '@testing-library/react';

import Lib56 from './lib56';

describe(' Lib56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib56 />);
    expect(baseElement).toBeTruthy();
  });
});
