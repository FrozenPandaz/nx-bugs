import React from 'react';
import { render } from '@testing-library/react';

import Lib728 from './lib728';

describe(' Lib728', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib728 />);
    expect(baseElement).toBeTruthy();
  });
});
