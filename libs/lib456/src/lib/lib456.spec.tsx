import React from 'react';
import { render } from '@testing-library/react';

import Lib456 from './lib456';

describe(' Lib456', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib456 />);
    expect(baseElement).toBeTruthy();
  });
});
