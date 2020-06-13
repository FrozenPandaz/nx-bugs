import React from 'react';
import { render } from '@testing-library/react';

import Lib614 from './lib614';

describe(' Lib614', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib614 />);
    expect(baseElement).toBeTruthy();
  });
});
