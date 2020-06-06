import React from 'react';
import { render } from '@testing-library/react';

import Lib793 from './lib793';

describe(' Lib793', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib793 />);
    expect(baseElement).toBeTruthy();
  });
});
