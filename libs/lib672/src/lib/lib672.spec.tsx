import React from 'react';
import { render } from '@testing-library/react';

import Lib672 from './lib672';

describe(' Lib672', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib672 />);
    expect(baseElement).toBeTruthy();
  });
});
