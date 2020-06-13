import React from 'react';
import { render } from '@testing-library/react';

import Lib65 from './lib65';

describe(' Lib65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib65 />);
    expect(baseElement).toBeTruthy();
  });
});
