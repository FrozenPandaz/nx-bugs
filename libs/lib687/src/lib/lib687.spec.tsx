import React from 'react';
import { render } from '@testing-library/react';

import Lib687 from './lib687';

describe(' Lib687', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib687 />);
    expect(baseElement).toBeTruthy();
  });
});
