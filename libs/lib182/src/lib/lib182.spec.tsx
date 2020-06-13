import React from 'react';
import { render } from '@testing-library/react';

import Lib182 from './lib182';

describe(' Lib182', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib182 />);
    expect(baseElement).toBeTruthy();
  });
});
