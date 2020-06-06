import React from 'react';
import { render } from '@testing-library/react';

import Lib108 from './lib108';

describe(' Lib108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib108 />);
    expect(baseElement).toBeTruthy();
  });
});
