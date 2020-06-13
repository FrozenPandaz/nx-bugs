import React from 'react';
import { render } from '@testing-library/react';

import Lib51 from './lib51';

describe(' Lib51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib51 />);
    expect(baseElement).toBeTruthy();
  });
});
