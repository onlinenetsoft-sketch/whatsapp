#!/bin/bash

echo "Running Prisma migrations..."

cd backend

npx prisma migrate deploy

echo "Migration completed."