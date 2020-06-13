import React from 'react';
import { render } from '@testing-library/react';

import Lib989 from './lib989';

describe(' Lib989', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib989 />);
    expect(baseElement).toBeTruthy();
  });
});
