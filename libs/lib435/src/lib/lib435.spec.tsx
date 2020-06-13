import React from 'react';
import { render } from '@testing-library/react';

import Lib435 from './lib435';

describe(' Lib435', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib435 />);
    expect(baseElement).toBeTruthy();
  });
});
