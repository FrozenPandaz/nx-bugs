import React from 'react';
import { render } from '@testing-library/react';

import Lib690 from './lib690';

describe(' Lib690', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib690 />);
    expect(baseElement).toBeTruthy();
  });
});
