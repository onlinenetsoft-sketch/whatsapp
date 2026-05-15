
---

# 11. `scripts/setup.sh`

```bash
#!/bin/bash

echo "Installing dependencies..."

cd backend && npm install
cd ../frontend && npm install

echo "Setup completed."