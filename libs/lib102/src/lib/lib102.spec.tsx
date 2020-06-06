import React from 'react';
import { render } from '@testing-library/react';

import Lib102 from './lib102';

describe(' Lib102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib102 />);
    expect(baseElement).toBeTruthy();
  });
});
