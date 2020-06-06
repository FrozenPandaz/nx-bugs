import React from 'react';
import { render } from '@testing-library/react';

import Lib436 from './lib436';

describe(' Lib436', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib436 />);
    expect(baseElement).toBeTruthy();
  });
});
