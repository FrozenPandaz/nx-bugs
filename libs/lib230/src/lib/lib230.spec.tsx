import React from 'react';
import { render } from '@testing-library/react';

import Lib230 from './lib230';

describe(' Lib230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib230 />);
    expect(baseElement).toBeTruthy();
  });
});
