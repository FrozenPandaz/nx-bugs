import React from 'react';
import { render } from '@testing-library/react';

import Lib145 from './lib145';

describe(' Lib145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib145 />);
    expect(baseElement).toBeTruthy();
  });
});
