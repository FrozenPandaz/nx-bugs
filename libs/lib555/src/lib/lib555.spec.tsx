import React from 'react';
import { render } from '@testing-library/react';

import Lib555 from './lib555';

describe(' Lib555', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib555 />);
    expect(baseElement).toBeTruthy();
  });
});
