import React from 'react';
import { render } from '@testing-library/react';

import Lib706 from './lib706';

describe(' Lib706', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib706 />);
    expect(baseElement).toBeTruthy();
  });
});
