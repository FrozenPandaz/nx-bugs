import React from 'react';
import { render } from '@testing-library/react';

import Lib279 from './lib279';

describe(' Lib279', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib279 />);
    expect(baseElement).toBeTruthy();
  });
});
