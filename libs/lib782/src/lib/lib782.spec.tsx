import React from 'react';
import { render } from '@testing-library/react';

import Lib782 from './lib782';

describe(' Lib782', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib782 />);
    expect(baseElement).toBeTruthy();
  });
});
