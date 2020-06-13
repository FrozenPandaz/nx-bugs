import React from 'react';
import { render } from '@testing-library/react';

import Lib649 from './lib649';

describe(' Lib649', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib649 />);
    expect(baseElement).toBeTruthy();
  });
});
