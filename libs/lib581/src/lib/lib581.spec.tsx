import React from 'react';
import { render } from '@testing-library/react';

import Lib581 from './lib581';

describe(' Lib581', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib581 />);
    expect(baseElement).toBeTruthy();
  });
});
