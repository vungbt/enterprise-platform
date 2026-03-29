'use client';

import { RenderIcon } from '@enterprise/ui/components';
import { DemoButtons } from './sections/demo-buttons';
import { DemoInputs } from './sections/demo-inputs';
import { DemoFeedback } from './sections/demo-feedback';
import { DemoTable } from './sections/demo-table';
import { DemoForm } from './sections/demo-form';

type Section = {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
};

const sections: Section[] = [
  { id: 'buttons',  title: 'Buttons',          icon: 'vuesax-element', component: <DemoButtons /> },
  { id: 'inputs',   title: 'Inputs & Selects',  icon: 'pencil-square',  component: <DemoInputs /> },
  { id: 'feedback', title: 'Tags, Toast, Modal, Tabs', icon: 'bell',   component: <DemoFeedback /> },
  { id: 'table',    title: 'Table',             icon: 'adjustments-vertical', component: <DemoTable /> },
  { id: 'form',     title: 'Form + Validation', icon: 'check-circle',   component: <DemoForm /> },
];

function DemoSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="bg-neutral-white rounded-xl border border-neutral-border overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-neutral-border bg-neutral-table-header">
        <RenderIcon name={icon as any} className="w-4 h-4 text-primary" />
        <h2 className="text-15 font-semibold text-neutral-black">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

export default function UiDemoPage() {
  return (
    <div className="min-h-screen bg-neutral-bg">
      {/* Header */}
      <div className="bg-neutral-white border-b border-neutral-border px-8 py-6">
        <h1 className="text-24 font-bold text-neutral-black">UI Component Demo</h1>
        <p className="text-14 text-neutral-text-secondary mt-1">
          Tổng hợp tất cả components — màu sắc theo theme của từng module
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8 space-y-6">
        {sections.map(s => (
          <DemoSection key={s.id} title={s.title} icon={s.icon}>
            {s.component}
          </DemoSection>
        ))}
      </div>
    </div>
  );
}
