This project consists of an application and a server, configured to run using Docker Compose.

## Table of Contents

- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Project Structure
├── application
│ ├── Dockerfile
│ ├── next.config.js
│ ├── package.json
│ ├── pages
│ │ ├── index.js
│ │ └── _app.js
│ ├── public
│ │ └── favicon.ico
│ └── styles
│ └── globals.css
├── server
│ ├── Dockerfile
│ ├── index.js
│ └── package.json
└── docker-compose.yml

## Setup

1. **Clone the repository:**

   ```sh
   git clone git@github.com:Maktastic/fliki_assignment.git or Download
   cd project_name
   docker-compose up --build

2. **Usage**
The application will be available at http://localhost:3000.
To stop the containers, run:

```
docker-compose down
```

## 3. **Scripts**
### Development:

To start the development server, run:

sh
Copy code

``` 
docker-compose up
```

Build:

To create a build of the application:

sh
```
docker-compose up --build
```