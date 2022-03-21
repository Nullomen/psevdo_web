# Laboratory work - project for university 

### Completed:

* Yana Olkhovskaya
* Sofia Kulibaba
* Andrey Shapovalov

# Init project 

* Step 1:

Install packages:

```bash
$ npm install
```

* Step 2:

Copy environment variables for project:

```bash
$ cp .env.example .env
```


#### Start this commands when DB up!
Run migration:
```bash
$ knex migrate:up
```
Run seed:
```bash
$ knex seed:run
```

# Run project

Run express server:

```bash
$ npm run start
```

Run docker image db with deamon:

```bash
$ docker-compose up -d
```
Down docker container: 

```bash
$ docker-compose down
```

OPTIONAL
Run docker image db without deamon:

```bash
$ docker-compose up
```