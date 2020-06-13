import React from 'react';
import { render } from '@testing-library/react';

import Lib446 from './lib446';

describe(' Lib446', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib446 />);
    expect(baseElement).toBeTruthy();
  });
});
