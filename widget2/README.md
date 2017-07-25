# Widget
Configured with $CONFIG

Install deps
```sh
npm install
```

Symlink hack
```
ln -s $(pwd)/node_modules/@webcomponents/shadycss/ $(pwd)/node_modules/@polymer/shadycss
``` 

## Run the widget

### Local

```sh
CONFIG=$(cat config.json) npm run build
```

```sh
CONFIG='{"service":"https://widget2.example"}' npm run build
```

### Docker

```sh
CONFIG=$(cat config.json) docker-compose up widget2
CONFIG='{"service":"https://widget2.example"}' docker-compose up widget2
```

### Deploy

Create and push a docker image

```sh
docker-compose build widget2
docker tag widget2_widget2 localhost:5000/widget2
docker push localhost:5000/widget2
```


