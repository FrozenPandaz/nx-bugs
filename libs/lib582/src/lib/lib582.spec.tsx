import React from 'react';
import { render } from '@testing-library/react';

import Lib582 from './lib582';

describe(' Lib582', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib582 />);
    expect(baseElement).toBeTruthy();
  });
});
