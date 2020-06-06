import React from 'react';
import { render } from '@testing-library/react';

import Lib933 from './lib933';

describe(' Lib933', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib933 />);
    expect(baseElement).toBeTruthy();
  });
});
