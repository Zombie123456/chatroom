#!/bin/bash
# run makemigrate until database is already available, useful on first time setup
# as makemigrate comes first before creating the default 'db, password and user'
until python manage.py makemigrations && python manage.py migrate
do
  echo "Try again"
done &
celery -A coati beat -l info -S django --max-interval 30
