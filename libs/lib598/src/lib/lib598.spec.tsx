import React from 'react';
import { render } from '@testing-library/react';

import Lib598 from './lib598';

describe(' Lib598', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib598 />);
    expect(baseElement).toBeTruthy();
  });
});
