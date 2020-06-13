import React from 'react';
import { render } from '@testing-library/react';

import Lib623 from './lib623';

describe(' Lib623', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib623 />);
    expect(baseElement).toBeTruthy();
  });
});
