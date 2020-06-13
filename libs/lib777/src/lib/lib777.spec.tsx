import React from 'react';
import { render } from '@testing-library/react';

import Lib777 from './lib777';

describe(' Lib777', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib777 />);
    expect(baseElement).toBeTruthy();
  });
});
