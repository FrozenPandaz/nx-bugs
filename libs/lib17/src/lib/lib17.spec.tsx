import React from 'react';
import { render } from '@testing-library/react';

import Lib17 from './lib17';

describe(' Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
