import React from 'react';
import { render } from '@testing-library/react';

import Lib299 from './lib299';

describe(' Lib299', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib299 />);
    expect(baseElement).toBeTruthy();
  });
});
