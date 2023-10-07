const { spawn } = require('child_process');

async function runHardhatNodeWithCustomPort(customPort) {
  const child = spawn('npx', ['hardhat', 'node', `--port ${customPort}`]);

  child.stdout.on('data', (data) => {
    console.log(`Hardhat Node Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`Hardhat Node exited with code ${code}`);
  });

  // Handle any cleanup or additional actions here

  return child;
}

const customPort = process.env.PORT || 2222; // Default to port 8545 if not specified

runHardhatNodeWithCustomPort(customPort);
