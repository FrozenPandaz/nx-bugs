import React from 'react';
import { render } from '@testing-library/react';

import Lib601 from './lib601';

describe(' Lib601', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib601 />);
    expect(baseElement).toBeTruthy();
  });
});
