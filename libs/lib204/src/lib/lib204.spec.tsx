import React from 'react';
import { render } from '@testing-library/react';

import Lib204 from './lib204';

describe(' Lib204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib204 />);
    expect(baseElement).toBeTruthy();
  });
});
