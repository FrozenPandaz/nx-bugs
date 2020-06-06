import React from 'react';
import { render } from '@testing-library/react';

import Lib973 from './lib973';

describe(' Lib973', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib973 />);
    expect(baseElement).toBeTruthy();
  });
});
