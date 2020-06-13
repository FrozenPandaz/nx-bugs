import React from 'react';
import { render } from '@testing-library/react';

import Lib400 from './lib400';

describe(' Lib400', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib400 />);
    expect(baseElement).toBeTruthy();
  });
});
