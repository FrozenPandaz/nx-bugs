import React from 'react';
import { render } from '@testing-library/react';

import Lib833 from './lib833';

describe(' Lib833', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib833 />);
    expect(baseElement).toBeTruthy();
  });
});
