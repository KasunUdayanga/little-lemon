import React from 'react';

export default function App() {
  return (
    <div>
      Use bootstrap class for
      <span className="d-inline bg-info">display: inline</span>
      to wrap the text inside the element to normally.

      While using the property <span className="d-inline-block">display: inline-block</span>
      will wrap the element to prevent the text inside from extending beyond its parent.

      Lastly, using the property <span className="d-block">display: block</span>
      will put the element on it's own line and fill its parent.
    </div>
  );
}