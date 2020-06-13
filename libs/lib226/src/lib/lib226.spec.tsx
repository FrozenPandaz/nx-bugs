import React from 'react';
import { render } from '@testing-library/react';

import Lib226 from './lib226';

describe(' Lib226', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib226 />);
    expect(baseElement).toBeTruthy();
  });
});
