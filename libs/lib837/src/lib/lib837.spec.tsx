import React from 'react';
import { render } from '@testing-library/react';

import Lib837 from './lib837';

describe(' Lib837', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib837 />);
    expect(baseElement).toBeTruthy();
  });
});
