#Tell Docker what image
#The tutum/lamp image is preconfigured with LAMP but one could easily do installition commands for setting up LAMP on an Ubuntu image
FROM tutum/lamp
MAINTAINER codethejason

# Use app directory
WORKDIR /

# Install some updates
RUN apt-get update
RUN apt-get upgrade -y

# Move the stuff in the current directory to the server (Dockerfile and index.php)
COPY . /var/www/html

#Tells Docker that container listens on the ports at runtime
EXPOSE 3306 80

#Main goal of the application; runs the setup script
CMD [ "/run.sh" ]

