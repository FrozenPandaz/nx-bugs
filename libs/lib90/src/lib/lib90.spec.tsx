import React from 'react';
import { render } from '@testing-library/react';

import Lib90 from './lib90';

describe(' Lib90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib90 />);
    expect(baseElement).toBeTruthy();
  });
});
