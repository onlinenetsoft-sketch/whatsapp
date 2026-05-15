#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage:"
  echo "./restore.sh backup_file.sql"
  exit 1
fi

BACKUP_FILE=$1

echo "Restoring database..."

cat $BACKUP_FILE | docker exec -i ons-postgres psql -U postgres onlinenetsoft

echo "Database restored successfully."