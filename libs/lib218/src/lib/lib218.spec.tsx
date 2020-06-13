import React from 'react';
import { render } from '@testing-library/react';

import Lib218 from './lib218';

describe(' Lib218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib218 />);
    expect(baseElement).toBeTruthy();
  });
});
