import React from 'react';
import { render } from '@testing-library/react';

import Lib882 from './lib882';

describe(' Lib882', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib882 />);
    expect(baseElement).toBeTruthy();
  });
});
