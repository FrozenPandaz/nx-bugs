import React from 'react';
import { render } from '@testing-library/react';

import Lib184 from './lib184';

describe(' Lib184', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib184 />);
    expect(baseElement).toBeTruthy();
  });
});
