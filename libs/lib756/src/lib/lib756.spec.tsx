import React from 'react';
import { render } from '@testing-library/react';

import Lib756 from './lib756';

describe(' Lib756', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib756 />);
    expect(baseElement).toBeTruthy();
  });
});
