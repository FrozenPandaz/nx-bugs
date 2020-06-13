import React from 'react';
import { render } from '@testing-library/react';

import Lib107 from './lib107';

describe(' Lib107', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib107 />);
    expect(baseElement).toBeTruthy();
  });
});
