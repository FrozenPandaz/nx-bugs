import React from 'react';
import { render } from '@testing-library/react';

import Lib395 from './lib395';

describe(' Lib395', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib395 />);
    expect(baseElement).toBeTruthy();
  });
});
