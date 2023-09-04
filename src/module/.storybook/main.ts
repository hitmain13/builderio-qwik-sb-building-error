import { resolve } from "path";
import { qwikRollup, qwikVite } from '@builder.io/qwik/optimizer'
import type { StorybookConfig } from "storybook-framework-qwik";
import { InlineConfig, mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "storybook-framework-qwik",
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config: InlineConfig) => {
    return mergeConfig(config, {
      plugins: [
        qwikVite({
          vendorRoots: [__dirname],
          srcDir: resolve(__dirname, '../../../src'),
        }),
        qwikRollup(),
      ],
    })
  },
};
export default config;
