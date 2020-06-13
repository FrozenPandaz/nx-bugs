import React from 'react';
import { render } from '@testing-library/react';

import Lib644 from './lib644';

describe(' Lib644', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib644 />);
    expect(baseElement).toBeTruthy();
  });
});
