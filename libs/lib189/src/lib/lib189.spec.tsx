import React from 'react';
import { render } from '@testing-library/react';

import Lib189 from './lib189';

describe(' Lib189', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib189 />);
    expect(baseElement).toBeTruthy();
  });
});
