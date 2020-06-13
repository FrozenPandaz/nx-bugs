import React from 'react';
import { render } from '@testing-library/react';

import Lib441 from './lib441';

describe(' Lib441', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib441 />);
    expect(baseElement).toBeTruthy();
  });
});
