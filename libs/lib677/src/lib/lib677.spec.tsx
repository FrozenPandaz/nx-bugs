import React from 'react';
import { render } from '@testing-library/react';

import Lib677 from './lib677';

describe(' Lib677', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib677 />);
    expect(baseElement).toBeTruthy();
  });
});
