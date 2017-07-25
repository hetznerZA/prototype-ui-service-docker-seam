# Widget

Configured with $CONFIG_FILE

Requires extending the widget1-onbuild image to add your own config file

Install deps
```sh
npm install
```

Symlink hack
```
ln -s $(pwd)/node_modules/@webcomponents/shadycss/ $(pwd)/node_modules/@polymer/shadycss
``` 

Run the widget
```sh
CONFIG_FILE=config.json npm start
```

Docker
```sh
CONFIG_FILE=config.json docker-compose up 
```

Docker image
```sh
docker-compose build widget1
docker tag widget1_widget1 localhost:5000/widget1
docker push localhost:5000/widget1
```

Docker image with onbuild hook
```sh
docker-compose build widget1-onbuild
docker tag widget1_widget1-onbuild localhost:5000/widget1-onbuild
docker push localhost:5000/widget1-onbuild
```
