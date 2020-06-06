import React from 'react';
import { render } from '@testing-library/react';

import Lib312 from './lib312';

describe(' Lib312', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib312 />);
    expect(baseElement).toBeTruthy();
  });
});
