import React from 'react';
import { render } from '@testing-library/react';

import Lib857 from './lib857';

describe(' Lib857', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib857 />);
    expect(baseElement).toBeTruthy();
  });
});
