import React from 'react';
import { render } from '@testing-library/react';

import Lib253 from './lib253';

describe(' Lib253', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib253 />);
    expect(baseElement).toBeTruthy();
  });
});
