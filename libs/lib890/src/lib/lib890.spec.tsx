import React from 'react';
import { render } from '@testing-library/react';

import Lib890 from './lib890';

describe(' Lib890', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib890 />);
    expect(baseElement).toBeTruthy();
  });
});
