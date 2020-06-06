import React from 'react';
import { render } from '@testing-library/react';

import Lib371 from './lib371';

describe(' Lib371', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib371 />);
    expect(baseElement).toBeTruthy();
  });
});
