import React from 'react';
import { render } from '@testing-library/react';

import Lib611 from './lib611';

describe(' Lib611', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib611 />);
    expect(baseElement).toBeTruthy();
  });
});
