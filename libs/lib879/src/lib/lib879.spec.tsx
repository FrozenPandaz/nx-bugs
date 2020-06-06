import React from 'react';
import { render } from '@testing-library/react';

import Lib879 from './lib879';

describe(' Lib879', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib879 />);
    expect(baseElement).toBeTruthy();
  });
});
