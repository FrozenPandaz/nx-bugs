import React from 'react';
import { render } from '@testing-library/react';

import Lib737 from './lib737';

describe(' Lib737', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib737 />);
    expect(baseElement).toBeTruthy();
  });
});
