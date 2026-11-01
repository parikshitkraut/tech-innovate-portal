/**
 * ===================================================================
 * INTERACTIVE CYBER TERMINAL & AI EXECUTION ENGINE
 * Live synthetic code execution simulator with stream output,
 * memory allocation dials, and interactive command presets.
 * ===================================================================
 */

import { icons } from './icons.js';
import { sound } from './audio.js';

export const terminalSnippets = {
  ai_inference: {
    command: "python -m aitech.core --inference --model llm-v4-instruct",
    output: [
      "[INFO] Loading Neural Weights: 70B Quantized [OK]",
      "[INFO] Initializing Vector Store Embeddings... [512-dim]",
      "[QUERY] 'How to build high-performance full-stack web applications?'",
      "[RAG] Retrieved 4 relevant technical documents (cosine: 0.94)",
      "[SYNAPSE] Generating tokens: 148 tokens/sec",
      "[OUTPUT] Result: 'Combine clean component architectures, typed APIs, and automated CI/CD.'",
      "✓ Inference finished in 18ms. Memory: 1.2GB VRAM."
    ]
  },
  neural_train: {
    command: "python train_neural_net.py --epochs 50 --batch 64 --lr 0.001",
    output: [
      "[SYSTEM] Allocating GPU clusters: 8x H100 Tensor Cores",
      "Epoch 10/50: loss = 0.4128, accuracy = 88.4%",
      "Epoch 25/50: loss = 0.1842, accuracy = 94.7%",
      "Epoch 40/50: loss = 0.0619, accuracy = 98.6%",
      "Epoch 50/50: loss = 0.0211, accuracy = 99.4%",
      "[CHECKPOINT] Model saved to weights/aitech_ai_model.pt",
      "✓ Neural network convergence achieved."
    ]
  },
  fullstack_pipeline: {
    command: "npm run deploy:enterprise-stack",
    output: [
      "> vite build --production",
      "✓ Built client bundles in 640ms (142 KB gzipped)",
      "> docker compose up -d backend-service mongodb-cluster",
      "✓ Microservices online at port 8080 (REST + GraphQL)",
      "✓ Cloud CDN distribution synchronized globally (14 regions)",
      "✓ Healthcheck status: 200 OK. 0 errors detected.",
      "🚀 Production deployment live and serving requests."
    ]
  }
};

export function initInteractiveTerminal() {
  const container = document.getElementById('terminalOutput');
  const commandInput = document.getElementById('terminalActiveCommand');
  const presetButtons = document.querySelectorAll('.terminal-preset-btn');

  if (!container || !commandInput) return;

  function runSnippet(key) {
    sound.playClick();
    const data = terminalSnippets[key];
    if (!data) return;

    commandInput.innerHTML = `<span class="text-cyan-400">$</span> ${data.command}`;
    container.innerHTML = `<div class="text-slate-500 italic flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> Executing pipeline...</div>`;

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex === 0) container.innerHTML = '';

      if (lineIndex < data.output.length) {
        sound.playHover();
        const line = data.output[lineIndex];
        const lineDiv = document.createElement('div');
        
        if (line.includes('✓') || line.includes('🚀')) {
          lineDiv.className = 'text-emerald-400 font-semibold flex items-center gap-1.5';
        } else if (line.includes('[INFO]') || line.includes('[SYSTEM]')) {
          lineDiv.className = 'text-blue-400';
        } else if (line.includes('[SYNAPSE]') || line.includes('Epoch')) {
          lineDiv.className = 'text-purple-400';
        } else if (line.includes('[QUERY]') || line.includes('[OUTPUT]')) {
          lineDiv.className = 'text-cyan-300 font-medium';
        } else {
          lineDiv.className = 'text-slate-300';
        }

        lineDiv.innerText = line;
        container.appendChild(lineDiv);
        container.scrollTop = container.scrollHeight;
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 180);
  }

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-preset');
      presetButtons.forEach(b => b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40'));
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
      runSnippet(target);
    });
  });

  // Start with default AI inference demo
  runSnippet('ai_inference');
}
