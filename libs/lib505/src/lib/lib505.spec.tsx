import React from 'react';
import { render } from '@testing-library/react';

import Lib505 from './lib505';

describe(' Lib505', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib505 />);
    expect(baseElement).toBeTruthy();
  });
});
