import React from 'react';
import { render } from '@testing-library/react';

import Lib46 from './lib46';

describe(' Lib46', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib46 />);
    expect(baseElement).toBeTruthy();
  });
});
