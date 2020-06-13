import React from 'react';
import { render } from '@testing-library/react';

import Lib88 from './lib88';

describe(' Lib88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib88 />);
    expect(baseElement).toBeTruthy();
  });
});
