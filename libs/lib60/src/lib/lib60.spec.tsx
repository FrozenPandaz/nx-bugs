import React from 'react';
import { render } from '@testing-library/react';

import Lib60 from './lib60';

describe(' Lib60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib60 />);
    expect(baseElement).toBeTruthy();
  });
});
