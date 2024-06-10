FROM ubuntu

WORKDIR /app

RUN echo \
&& apt-get -q -q update \
&& apt-get -q -q install apt-utils \
&& apt-get -q -q install python3-poetry

COPY . .

RUN PYTHON_KEYRING_BACKEND=keyring.backends.fail.Keyring poetry install --no-root

CMD poetry run flask run --host=0.0.0.0 --port=80

EXPOSE 80