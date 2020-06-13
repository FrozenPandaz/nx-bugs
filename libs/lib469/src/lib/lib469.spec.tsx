import React from 'react';
import { render } from '@testing-library/react';

import Lib469 from './lib469';

describe(' Lib469', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib469 />);
    expect(baseElement).toBeTruthy();
  });
});
