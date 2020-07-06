FROM alpine

ADD ./ /clash
WORKDIR /clash

RUN chmod -R 777 /clash

CMD ["/clash/clash", "-d", '.']