import React from 'react';
import { render } from '@testing-library/react';

import Lib565 from './lib565';

describe(' Lib565', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib565 />);
    expect(baseElement).toBeTruthy();
  });
});
