import React from 'react';
import { render } from '@testing-library/react';

import Lib140 from './lib140';

describe(' Lib140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib140 />);
    expect(baseElement).toBeTruthy();
  });
});
