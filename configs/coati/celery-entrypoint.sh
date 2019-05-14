#!/bin/bash
# run makemigrate until database is already available, useful on first time setup
# as makemigrate comes first before creating the default 'db, password and user'
until python manage.py makemigrations && python manage.py migrate
do
  echo "Try again"
done &
celery -A coati worker --concurrency=1 -l info --pidfile= &
celery -A coati worker -l info --pidfile= -Q live_users -n live_users@%h &
celery -A coati worker -l info --pidfile= -Q refresh -n refresh@%h &
celery -A coati worker -l info --pidfile= -Q cache_sync -n cache_sync@%h &
celery -A coati worker --concurrency=1 -l info --pidfile= -Q envelope -n envelope@%h



