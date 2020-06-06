import React from 'react';
import { render } from '@testing-library/react';

import Lib353 from './lib353';

describe(' Lib353', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib353 />);
    expect(baseElement).toBeTruthy();
  });
});
