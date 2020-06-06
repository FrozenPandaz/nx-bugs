import React from 'react';
import { render } from '@testing-library/react';

import Lib796 from './lib796';

describe(' Lib796', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib796 />);
    expect(baseElement).toBeTruthy();
  });
});
