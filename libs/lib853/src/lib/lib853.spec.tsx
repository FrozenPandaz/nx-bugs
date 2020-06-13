import React from 'react';
import { render } from '@testing-library/react';

import Lib853 from './lib853';

describe(' Lib853', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib853 />);
    expect(baseElement).toBeTruthy();
  });
});
