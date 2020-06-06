import React from 'react';
import { render } from '@testing-library/react';

import Lib715 from './lib715';

describe(' Lib715', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib715 />);
    expect(baseElement).toBeTruthy();
  });
});
