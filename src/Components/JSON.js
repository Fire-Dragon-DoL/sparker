import React from 'react';

export function Output({ value }) {
  let json = JSON.stringify(value, null, 2);

  return (
    <pre className='Output'><code>{json}</code></pre>
  );
}
