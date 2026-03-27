'use client';

import { Button } from '@enterprise/ui/components';
import { useState } from 'react';

export function DemoButtons() {
  const [loading, setLoading] = useState(false);

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Variants */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Colors */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Colors</p>
        <div className="flex flex-wrap gap-2">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="error">Error</Button>
          <Button color="pending">Pending</Button>
          <Button color="neutral">Neutral</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <p className="text-12 text-neutral-text-secondary mb-2 uppercase tracking-wide">States</p>
        <div className="flex flex-wrap gap-2">
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={simulateLoad}>
            {loading ? 'Loading...' : 'Click to load'}
          </Button>
          <Button icon="plus">With Icon Left</Button>
          <Button iconRight="arrow-down-tray">With Icon Right</Button>
        </div>
      </div>
    </div>
  );
}
