import React from 'react';
import { render } from '@testing-library/react';

import Lib115 from './lib115';

describe(' Lib115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib115 />);
    expect(baseElement).toBeTruthy();
  });
});
