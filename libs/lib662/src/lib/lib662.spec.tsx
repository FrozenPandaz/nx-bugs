import React from 'react';
import { render } from '@testing-library/react';

import Lib662 from './lib662';

describe(' Lib662', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib662 />);
    expect(baseElement).toBeTruthy();
  });
});
