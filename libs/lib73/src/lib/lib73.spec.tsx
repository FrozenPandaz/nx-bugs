import React from 'react';
import { render } from '@testing-library/react';

import Lib73 from './lib73';

describe(' Lib73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib73 />);
    expect(baseElement).toBeTruthy();
  });
});
