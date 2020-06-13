import React from 'react';
import { render } from '@testing-library/react';

import Lib600 from './lib600';

describe(' Lib600', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib600 />);
    expect(baseElement).toBeTruthy();
  });
});
