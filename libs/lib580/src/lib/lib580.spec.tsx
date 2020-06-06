import React from 'react';
import { render } from '@testing-library/react';

import Lib580 from './lib580';

describe(' Lib580', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib580 />);
    expect(baseElement).toBeTruthy();
  });
});
