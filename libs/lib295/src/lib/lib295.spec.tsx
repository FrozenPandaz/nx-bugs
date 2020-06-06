import React from 'react';
import { render } from '@testing-library/react';

import Lib295 from './lib295';

describe(' Lib295', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib295 />);
    expect(baseElement).toBeTruthy();
  });
});
