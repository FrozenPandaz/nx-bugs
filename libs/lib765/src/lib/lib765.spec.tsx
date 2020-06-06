import React from 'react';
import { render } from '@testing-library/react';

import Lib765 from './lib765';

describe(' Lib765', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib765 />);
    expect(baseElement).toBeTruthy();
  });
});
