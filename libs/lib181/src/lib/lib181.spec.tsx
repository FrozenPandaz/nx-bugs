import React from 'react';
import { render } from '@testing-library/react';

import Lib181 from './lib181';

describe(' Lib181', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib181 />);
    expect(baseElement).toBeTruthy();
  });
});
