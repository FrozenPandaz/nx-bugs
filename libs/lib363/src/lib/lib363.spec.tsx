import React from 'react';
import { render } from '@testing-library/react';

import Lib363 from './lib363';

describe(' Lib363', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib363 />);
    expect(baseElement).toBeTruthy();
  });
});
