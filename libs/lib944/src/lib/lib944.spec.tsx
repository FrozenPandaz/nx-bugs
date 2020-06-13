import React from 'react';
import { render } from '@testing-library/react';

import Lib944 from './lib944';

describe(' Lib944', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib944 />);
    expect(baseElement).toBeTruthy();
  });
});
