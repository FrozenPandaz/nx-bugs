import React from 'react';
import { render } from '@testing-library/react';

import Lib646 from './lib646';

describe(' Lib646', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib646 />);
    expect(baseElement).toBeTruthy();
  });
});
