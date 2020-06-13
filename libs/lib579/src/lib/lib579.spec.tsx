import React from 'react';
import { render } from '@testing-library/react';

import Lib579 from './lib579';

describe(' Lib579', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib579 />);
    expect(baseElement).toBeTruthy();
  });
});
