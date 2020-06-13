import React from 'react';
import { render } from '@testing-library/react';

import Lib608 from './lib608';

describe(' Lib608', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib608 />);
    expect(baseElement).toBeTruthy();
  });
});
