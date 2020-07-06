FROM alpine

ADD ./ /clash
WORKDIR /clash

RUN chmod -R 777 /clash

EXPOSE 7890 9090

CMD ./clash -d .