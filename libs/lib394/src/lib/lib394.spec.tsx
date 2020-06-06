import React from 'react';
import { render } from '@testing-library/react';

import Lib394 from './lib394';

describe(' Lib394', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib394 />);
    expect(baseElement).toBeTruthy();
  });
});
