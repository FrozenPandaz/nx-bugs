import React from 'react';
import { render } from '@testing-library/react';

import Lib750 from './lib750';

describe(' Lib750', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib750 />);
    expect(baseElement).toBeTruthy();
  });
});
