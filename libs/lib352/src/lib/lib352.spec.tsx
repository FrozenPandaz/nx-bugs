import React from 'react';
import { render } from '@testing-library/react';

import Lib352 from './lib352';

describe(' Lib352', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib352 />);
    expect(baseElement).toBeTruthy();
  });
});
