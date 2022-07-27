# Elastic Stack Dockerized

## Installation

1. Run dockerized stack

```
git clone https://github.com/AntonioMartinezFernandez/dockerized-elastic-stack-apm.git
cd dockerized-elastic-stack-apm
docker compose up
```

2. Navigate to http://localhost:5601/app/home#/tutorial/apm
3. Complete APM Agents steps 4-6 to configure your application to collect and report APM data
4. Use the APM app at http://localhost:5601/app/apm to visualize your application performance data

## Run NodeJS Example App

```
cd dockerized-elastic-stack-apm
cd exampleApp
npm install
npm start
```
