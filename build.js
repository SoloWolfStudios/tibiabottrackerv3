#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change to client directory and run vite build
const viteBuild = spawn('npx', ['vite', 'build', '--outDir', '../dist/public'], {
  cwd: join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true
});

viteBuild.on('close', (code) => {
  if (code !== 0) {
    console.error('Vite build failed');
    process.exit(1);
  }
  
  console.log('Frontend build completed, building backend...');
  
  // Build backend
  const backendBuild = spawn('npx', ['esbuild', 'server/index.ts', '--platform=node', '--packages=external', '--bundle', '--format=esm', '--outdir=dist'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });
  
  backendBuild.on('close', (backendCode) => {
    if (backendCode !== 0) {
      console.error('Backend build failed');
      process.exit(1);
    }
    console.log('Build completed successfully!');
  });
});