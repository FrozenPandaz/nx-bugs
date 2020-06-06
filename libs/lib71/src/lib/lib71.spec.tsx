import React from 'react';
import { render } from '@testing-library/react';

import Lib71 from './lib71';

describe(' Lib71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib71 />);
    expect(baseElement).toBeTruthy();
  });
});
