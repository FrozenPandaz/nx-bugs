import React from 'react';
import { render } from '@testing-library/react';

import Lib217 from './lib217';

describe(' Lib217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib217 />);
    expect(baseElement).toBeTruthy();
  });
});
