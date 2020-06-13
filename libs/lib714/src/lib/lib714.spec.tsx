import React from 'react';
import { render } from '@testing-library/react';

import Lib714 from './lib714';

describe(' Lib714', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib714 />);
    expect(baseElement).toBeTruthy();
  });
});
