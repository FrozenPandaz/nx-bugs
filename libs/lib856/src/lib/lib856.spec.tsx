import React from 'react';
import { render } from '@testing-library/react';

import Lib856 from './lib856';

describe(' Lib856', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib856 />);
    expect(baseElement).toBeTruthy();
  });
});
