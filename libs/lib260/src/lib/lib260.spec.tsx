import React from 'react';
import { render } from '@testing-library/react';

import Lib260 from './lib260';

describe(' Lib260', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib260 />);
    expect(baseElement).toBeTruthy();
  });
});
