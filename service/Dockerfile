FROM python:3.7-slim

WORKDIR /usr/src/app

COPY . ./

RUN pip install grpcio grpcio-tools

CMD [ "python3", "service.py" ]