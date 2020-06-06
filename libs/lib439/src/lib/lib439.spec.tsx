import React from 'react';
import { render } from '@testing-library/react';

import Lib439 from './lib439';

describe(' Lib439', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib439 />);
    expect(baseElement).toBeTruthy();
  });
});
