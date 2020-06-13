import React from 'react';
import { render } from '@testing-library/react';

import Lib379 from './lib379';

describe(' Lib379', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib379 />);
    expect(baseElement).toBeTruthy();
  });
});
