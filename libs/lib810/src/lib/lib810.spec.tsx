import React from 'react';
import { render } from '@testing-library/react';

import Lib810 from './lib810';

describe(' Lib810', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib810 />);
    expect(baseElement).toBeTruthy();
  });
});
