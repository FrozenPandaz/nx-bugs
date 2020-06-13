import React from 'react';
import { render } from '@testing-library/react';

import Lib213 from './lib213';

describe(' Lib213', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib213 />);
    expect(baseElement).toBeTruthy();
  });
});
