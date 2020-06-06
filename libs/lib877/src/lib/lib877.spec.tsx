import React from 'react';
import { render } from '@testing-library/react';

import Lib877 from './lib877';

describe(' Lib877', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib877 />);
    expect(baseElement).toBeTruthy();
  });
});
