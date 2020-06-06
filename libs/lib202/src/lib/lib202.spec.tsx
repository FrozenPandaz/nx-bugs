import React from 'react';
import { render } from '@testing-library/react';

import Lib202 from './lib202';

describe(' Lib202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib202 />);
    expect(baseElement).toBeTruthy();
  });
});
