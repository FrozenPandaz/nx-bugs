import React from 'react';
import { render } from '@testing-library/react';

import Lib722 from './lib722';

describe(' Lib722', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib722 />);
    expect(baseElement).toBeTruthy();
  });
});
