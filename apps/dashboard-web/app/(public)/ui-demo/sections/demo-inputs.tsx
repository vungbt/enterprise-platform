'use client';

import {
  FormLabel,
  Input,
  InputPassword,
  Select,
  SelectAsync,
  type SelectOption,
} from '@enterprise/ui/components';
import { useState } from 'react';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

const loadOptions = (inputValue: string) =>
  new Promise<typeof options>((resolve) => {
    setTimeout(() => {
      resolve(options.filter((o) => o.label.toLowerCase().includes(inputValue.toLowerCase())));
    }, 500);
  });

export function DemoInputs() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState<SelectOption | null>(null);
  const [multi, setMulti] = useState<SelectOption[]>([]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Text input"
          placeholder="Nhap van ban..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          label="With icon"
          placeholder="Tim kiem..."
          icon="magnifying-glass"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          label="Error state"
          placeholder="Email..."
          icon="envelope"
          value={text}
          onChange={(e) => setText(e.target.value)}
          error="Email khong hop le"
        />
        <Input label="Disabled" placeholder="Khong the nhap..." disabled value="Noi dung bi khoa" />
      </div>

      <InputPassword label="Password" placeholder="Toi thieu 8 ky tu..." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FormLabel>Select don</FormLabel>
          <Select
            options={options}
            value={selected}
            onChange={setSelected}
            placeholder="Chon framework..."
            isClearable
          />
        </div>
        <div>
          <FormLabel>Multi select</FormLabel>
          <Select
            options={options}
            value={multi}
            onChange={(v) => setMulti((v as SelectOption[]) ?? [])}
            isMulti
            placeholder="Chon nhieu..."
            isClearable
          />
        </div>
        <div>
          <FormLabel>Async select</FormLabel>
          <SelectAsync loadOptions={loadOptions} placeholder="Go de tim kiem..." isClearable />
        </div>
        <div>
          <FormLabel>Error state</FormLabel>
          <Select options={options} placeholder="Chon..." error="Vui long chon mot gia tri" />
        </div>
      </div>
    </div>
  );
}
