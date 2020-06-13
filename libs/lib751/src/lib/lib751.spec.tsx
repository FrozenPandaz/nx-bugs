import React from 'react';
import { render } from '@testing-library/react';

import Lib751 from './lib751';

describe(' Lib751', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib751 />);
    expect(baseElement).toBeTruthy();
  });
});
