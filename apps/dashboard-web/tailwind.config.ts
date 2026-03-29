import type { Config } from 'tailwindcss';
import preset from '../../config/tailwind/tailwind.preset';

const config: Config = {
  presets: [preset],
  content: [
    './app/**/*.{ts,tsx}',
    './module-shell/**/*.{ts,tsx}',
    './module-registry/**/*.{ts,tsx}',
    '../../libs/ui/**/*.{ts,tsx}',
    '../../modules/**/*.{ts,tsx}',
  ],
};

export default config;
