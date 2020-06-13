import React from 'react';
import { render } from '@testing-library/react';

import Lib640 from './lib640';

describe(' Lib640', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib640 />);
    expect(baseElement).toBeTruthy();
  });
});
