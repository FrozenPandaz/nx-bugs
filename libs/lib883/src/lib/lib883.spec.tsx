import React from 'react';
import { render } from '@testing-library/react';

import Lib883 from './lib883';

describe(' Lib883', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib883 />);
    expect(baseElement).toBeTruthy();
  });
});
