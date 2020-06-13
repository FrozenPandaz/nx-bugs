import React from 'react';
import { render } from '@testing-library/react';

import Lib818 from './lib818';

describe(' Lib818', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib818 />);
    expect(baseElement).toBeTruthy();
  });
});
