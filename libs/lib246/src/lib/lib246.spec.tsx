import React from 'react';
import { render } from '@testing-library/react';

import Lib246 from './lib246';

describe(' Lib246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib246 />);
    expect(baseElement).toBeTruthy();
  });
});
