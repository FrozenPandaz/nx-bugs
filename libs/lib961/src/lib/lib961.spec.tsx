import React from 'react';
import { render } from '@testing-library/react';

import Lib961 from './lib961';

describe(' Lib961', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib961 />);
    expect(baseElement).toBeTruthy();
  });
});
