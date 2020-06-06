import React from 'react';
import { render } from '@testing-library/react';

import Lib462 from './lib462';

describe(' Lib462', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib462 />);
    expect(baseElement).toBeTruthy();
  });
});
