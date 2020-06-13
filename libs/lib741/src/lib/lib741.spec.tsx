import React from 'react';
import { render } from '@testing-library/react';

import Lib741 from './lib741';

describe(' Lib741', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib741 />);
    expect(baseElement).toBeTruthy();
  });
});
