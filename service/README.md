# Service

## Run

Install deps

```sh
bundle install --path vendor
```

Run local

```sh
bundle exec rackup -Ilib config.ru -p 3000
```

Run Docker

```sh
docker-compose up
```

Example queries

```sh
curl http://localhost:3000/?name=charles
```

## Build

```sh
docker build service
docker tag service_service localhost:5000/service
docker push localhost:5000/service
```

## Widget1
onbuild you add a config.json to the container via $CONFIG_FILE environment variable

```sh
CONFIG_FILE=widget1_config.json docker-compose up --build widget1
```

## Widget2
onrun you add json string to the $CONFIG environment variable

```sh
CONFIG=$(cat config.json) docker-compose up widget2
CONFIG='{"service":"https://widget2.example"}' docker-compose up widget2
```

# Misc

Start the docker registry

```sh
docker run -d -p 5000:5000 --restart always --name registry registry:2
```


