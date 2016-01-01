# Simple Docker LAMP Configuration

The Dockerfile tells Docker configurations to setup the build. 

Run these commands to setup the container:
```
#Builds the app image
docker build -t lamp_app .
#Runs the container publishing ports 80 and 3306 on the host machine (publishing not required)
docker run -d -p 80:80 -p 3306:3306 lamp_app
#Get a list of containers
docker ps
#Connect to the Docker container by the ID found in the previous command
docker exec -it <instance_id> /bin/bash
```


The app is an index.php file running on the Apache webserver that connnects to a MYSQL database.
