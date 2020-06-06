import React from 'react';
import { render } from '@testing-library/react';

import Lib21 from './lib21';

describe(' Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
