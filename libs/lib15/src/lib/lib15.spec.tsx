import React from 'react';
import { render } from '@testing-library/react';

import Lib15 from './lib15';

describe(' Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
