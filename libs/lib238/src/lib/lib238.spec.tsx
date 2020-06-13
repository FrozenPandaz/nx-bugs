import React from 'react';
import { render } from '@testing-library/react';

import Lib238 from './lib238';

describe(' Lib238', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib238 />);
    expect(baseElement).toBeTruthy();
  });
});
