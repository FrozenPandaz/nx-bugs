import React from 'react';
import { render } from '@testing-library/react';

import Lib560 from './lib560';

describe(' Lib560', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib560 />);
    expect(baseElement).toBeTruthy();
  });
});
