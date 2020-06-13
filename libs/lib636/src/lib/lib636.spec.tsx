import React from 'react';
import { render } from '@testing-library/react';

import Lib636 from './lib636';

describe(' Lib636', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib636 />);
    expect(baseElement).toBeTruthy();
  });
});
