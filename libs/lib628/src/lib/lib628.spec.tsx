import React from 'react';
import { render } from '@testing-library/react';

import Lib628 from './lib628';

describe(' Lib628', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib628 />);
    expect(baseElement).toBeTruthy();
  });
});
