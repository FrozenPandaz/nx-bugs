import React from 'react';
import { render } from '@testing-library/react';

import Lib895 from './lib895';

describe(' Lib895', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib895 />);
    expect(baseElement).toBeTruthy();
  });
});
