import React from 'react';
import { render } from '@testing-library/react';

import Lib705 from './lib705';

describe(' Lib705', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib705 />);
    expect(baseElement).toBeTruthy();
  });
});
