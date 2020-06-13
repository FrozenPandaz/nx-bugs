import React from 'react';
import { render } from '@testing-library/react';

import Lib460 from './lib460';

describe(' Lib460', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib460 />);
    expect(baseElement).toBeTruthy();
  });
});
