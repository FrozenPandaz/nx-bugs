import React from 'react';
import { render } from '@testing-library/react';

import Lib29 from './lib29';

describe(' Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
