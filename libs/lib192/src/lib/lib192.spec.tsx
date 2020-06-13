import React from 'react';
import { render } from '@testing-library/react';

import Lib192 from './lib192';

describe(' Lib192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib192 />);
    expect(baseElement).toBeTruthy();
  });
});
