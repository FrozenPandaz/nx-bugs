import React from 'react';
import { render } from '@testing-library/react';

import Lib33 from './lib33';

describe(' Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
