import React from 'react';
import { render } from '@testing-library/react';

import Lib113 from './lib113';

describe(' Lib113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib113 />);
    expect(baseElement).toBeTruthy();
  });
});
