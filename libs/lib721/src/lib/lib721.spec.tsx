import React from 'react';
import { render } from '@testing-library/react';

import Lib721 from './lib721';

describe(' Lib721', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib721 />);
    expect(baseElement).toBeTruthy();
  });
});
