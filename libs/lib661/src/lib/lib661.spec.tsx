import React from 'react';
import { render } from '@testing-library/react';

import Lib661 from './lib661';

describe(' Lib661', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib661 />);
    expect(baseElement).toBeTruthy();
  });
});
