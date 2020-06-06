import React from 'react';
import { render } from '@testing-library/react';

import Lib671 from './lib671';

describe(' Lib671', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib671 />);
    expect(baseElement).toBeTruthy();
  });
});
