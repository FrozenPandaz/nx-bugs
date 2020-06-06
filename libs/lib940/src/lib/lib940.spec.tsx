import React from 'react';
import { render } from '@testing-library/react';

import Lib940 from './lib940';

describe(' Lib940', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib940 />);
    expect(baseElement).toBeTruthy();
  });
});
