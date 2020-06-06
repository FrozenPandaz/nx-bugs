import React from 'react';
import { render } from '@testing-library/react';

import Lib461 from './lib461';

describe(' Lib461', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib461 />);
    expect(baseElement).toBeTruthy();
  });
});
