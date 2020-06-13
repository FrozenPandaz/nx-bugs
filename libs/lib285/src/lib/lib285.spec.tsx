import React from 'react';
import { render } from '@testing-library/react';

import Lib285 from './lib285';

describe(' Lib285', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib285 />);
    expect(baseElement).toBeTruthy();
  });
});
