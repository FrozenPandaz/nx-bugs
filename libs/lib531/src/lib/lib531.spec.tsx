import React from 'react';
import { render } from '@testing-library/react';

import Lib531 from './lib531';

describe(' Lib531', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib531 />);
    expect(baseElement).toBeTruthy();
  });
});
