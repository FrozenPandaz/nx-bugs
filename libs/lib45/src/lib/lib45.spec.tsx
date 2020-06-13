import React from 'react';
import { render } from '@testing-library/react';

import Lib45 from './lib45';

describe(' Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});
