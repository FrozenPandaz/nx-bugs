import React from 'react';
import { render } from '@testing-library/react';

import Lib404 from './lib404';

describe(' Lib404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib404 />);
    expect(baseElement).toBeTruthy();
  });
});
