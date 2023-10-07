const { exec } = require('child_process');

const customPort = process.env.PORT || 2222; // Default to port 8545 if not specified

const command = `npx hardhat node --port ${customPort}`;

const child = exec(command);

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
