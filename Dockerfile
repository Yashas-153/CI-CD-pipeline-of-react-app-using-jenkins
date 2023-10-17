FROM ubuntu
RUN apt-get update
RUN apt-get -y install apache2
COPY build/ /var/www/html/
COPY start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

ENTRYPOINT ["start.sh"]
