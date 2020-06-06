import React from 'react';
import { render } from '@testing-library/react';

import Lib495 from './lib495';

describe(' Lib495', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib495 />);
    expect(baseElement).toBeTruthy();
  });
});
