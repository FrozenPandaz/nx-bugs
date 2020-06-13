import React from 'react';
import { render } from '@testing-library/react';

import Lib604 from './lib604';

describe(' Lib604', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib604 />);
    expect(baseElement).toBeTruthy();
  });
});
