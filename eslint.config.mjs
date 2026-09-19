import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "next-env.d.ts",
    "ui-ux-pro-max-skill/**",
    "codex-skills-temp/**",
    "Claude-Code-Frontend-Design-Toolkit/**",
    "test-results/**",
    "playwright-report/**",
  ]),
]);
