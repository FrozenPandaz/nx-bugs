import React from 'react';
import { render } from '@testing-library/react';

import Lib263 from './lib263';

describe(' Lib263', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib263 />);
    expect(baseElement).toBeTruthy();
  });
});
