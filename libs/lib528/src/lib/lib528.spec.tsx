import React from 'react';
import { render } from '@testing-library/react';

import Lib528 from './lib528';

describe(' Lib528', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib528 />);
    expect(baseElement).toBeTruthy();
  });
});
