import React from 'react';
import { render } from '@testing-library/react';

import Lib453 from './lib453';

describe(' Lib453', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib453 />);
    expect(baseElement).toBeTruthy();
  });
});
