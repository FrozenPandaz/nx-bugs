import React from 'react';
import { render } from '@testing-library/react';

import Lib392 from './lib392';

describe(' Lib392', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib392 />);
    expect(baseElement).toBeTruthy();
  });
});
