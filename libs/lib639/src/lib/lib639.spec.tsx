import React from 'react';
import { render } from '@testing-library/react';

import Lib639 from './lib639';

describe(' Lib639', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib639 />);
    expect(baseElement).toBeTruthy();
  });
});
