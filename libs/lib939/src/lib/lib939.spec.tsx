import React from 'react';
import { render } from '@testing-library/react';

import Lib939 from './lib939';

describe(' Lib939', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib939 />);
    expect(baseElement).toBeTruthy();
  });
});
