#!/bin/bash
cd /var/www/pookiestudios
git pull origin main
sudo chown -R www-data:www-data /var/www/pookiestudios
sudo chmod -R 755 /var/www/pookiestudios
echo "Site updated successfully!"
