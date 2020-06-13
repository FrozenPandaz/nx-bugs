import React from 'react';
import { render } from '@testing-library/react';

import Lib804 from './lib804';

describe(' Lib804', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib804 />);
    expect(baseElement).toBeTruthy();
  });
});
