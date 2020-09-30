FROM nginx

COPY ./nginx/default.conf /etc/nginx/nginx.conf

COPY ./html  /usr/share/nginx/html

RUN mkdir -p /etc/nginx/logs

EXPOSE 80