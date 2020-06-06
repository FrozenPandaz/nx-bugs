import React from 'react';
import { render } from '@testing-library/react';

import Lib685 from './lib685';

describe(' Lib685', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib685 />);
    expect(baseElement).toBeTruthy();
  });
});
