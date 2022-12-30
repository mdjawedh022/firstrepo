# Getting Started

1. [Go to Github URL: https://github.com/riteshf/b20.c1.git](https://github.com/riteshf/b20.c1.git)
2. Download the zip.
3. Unzip .

# Task

- Create a Express Server to perform following operations:

## Features to build

1. `GET /person`: get all person
2. `GET /person/:id` : get one user where id matches.
3. `DELETE /person/:id` : delete one user where id matches.
4. `POST /person` : add one user where with dynamic id, should update the file as well.
5. `GET /person?birth=India`: give me all person born in India, India is an example, It can be any country name.
6. `GET /person?current=China`: give me all person currently in China, China is an example, It can be any country name.
7. `GET /person?visited=Japan`: give me all person who have visted Japan, Japan is an example, It can be any country name.
8. `GET /person?birth=Japan&visited=India`: gives me all people currently in India with birth in Japan, Note: `India` and `Japan` are example

`Note: all query params related searches are case insensitive.`

## Mandatory:

1. Initialize NPM.
2. Use of ExpressJS.
3. Use of nodemon.
4. server should run on port: `8000`.
5. Command: `npm run start` should start the server.
6. [Use the given person.json file.](https://github.com/riteshf/b20.c1/blob/main/person.json)

## General Instructions (**_IMPORTANT_**)

1. Make sure you follow `masai-repo` standards.
2. Expected use of routing to seperate out user and product code.
