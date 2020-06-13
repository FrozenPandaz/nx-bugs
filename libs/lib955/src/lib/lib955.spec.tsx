import React from 'react';
import { render } from '@testing-library/react';

import Lib955 from './lib955';

describe(' Lib955', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib955 />);
    expect(baseElement).toBeTruthy();
  });
});
