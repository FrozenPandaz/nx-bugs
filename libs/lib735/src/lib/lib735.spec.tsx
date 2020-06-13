import React from 'react';
import { render } from '@testing-library/react';

import Lib735 from './lib735';

describe(' Lib735', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib735 />);
    expect(baseElement).toBeTruthy();
  });
});
