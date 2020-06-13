import React from 'react';
import { render } from '@testing-library/react';

import Lib622 from './lib622';

describe(' Lib622', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib622 />);
    expect(baseElement).toBeTruthy();
  });
});
