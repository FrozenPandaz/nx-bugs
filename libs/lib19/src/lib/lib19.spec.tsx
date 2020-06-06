import React from 'react';
import { render } from '@testing-library/react';

import Lib19 from './lib19';

describe(' Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
