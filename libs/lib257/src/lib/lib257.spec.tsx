import React from 'react';
import { render } from '@testing-library/react';

import Lib257 from './lib257';

describe(' Lib257', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib257 />);
    expect(baseElement).toBeTruthy();
  });
});
