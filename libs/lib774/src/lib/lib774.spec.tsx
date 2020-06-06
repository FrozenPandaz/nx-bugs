import React from 'react';
import { render } from '@testing-library/react';

import Lib774 from './lib774';

describe(' Lib774', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib774 />);
    expect(baseElement).toBeTruthy();
  });
});
