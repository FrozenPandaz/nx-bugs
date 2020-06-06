import React from 'react';
import { render } from '@testing-library/react';

import Lib831 from './lib831';

describe(' Lib831', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib831 />);
    expect(baseElement).toBeTruthy();
  });
});
