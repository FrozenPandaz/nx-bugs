import React from 'react';
import { render } from '@testing-library/react';

import Lib899 from './lib899';

describe(' Lib899', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib899 />);
    expect(baseElement).toBeTruthy();
  });
});
