import React from 'react';
import { render } from '@testing-library/react';

import Lib121 from './lib121';

describe(' Lib121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib121 />);
    expect(baseElement).toBeTruthy();
  });
});
