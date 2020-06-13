import React from 'react';
import { render } from '@testing-library/react';

import Lib69 from './lib69';

describe(' Lib69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib69 />);
    expect(baseElement).toBeTruthy();
  });
});
