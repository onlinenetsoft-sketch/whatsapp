#!/bin/bash

DATE=$(date +%Y-%m-%d_%H-%M-%S)

BACKUP_DIR=./backups

mkdir -p $BACKUP_DIR

echo "Starting PostgreSQL backup..."

docker exec ons-postgres pg_dump -U postgres onlinenetsoft > $BACKUP_DIR/db_backup_$DATE.sql

echo "Backup completed successfully."

echo "Backup saved at:"
echo "$BACKUP_DIR/db_backup_$DATE.sql"