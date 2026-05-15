#!/bin/bash

echo "Running database seed..."

cd backend

node prisma/seed.js

echo "Database seeded successfully."