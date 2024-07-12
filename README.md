# Corserva Test Backend

This repository contains the backend for the Corserva technical test. The backend is built with Node.js, Express, TypeScript, Sequelize, and PostgreSQL.
Docker Compose is used to set up and run the application and its dependencies.

## API Endpoints

- POST /api/sales: Create a new sale order item
- GET /api/sales/:id: Get a sale order item by ID
- PUT /api/sales/:id: Update a sale order item by ID
- DELETE /api/sales/:id: Delete a sale order item by ID

## Prerequisites

Before you start, make sure you have the following installed:

- Docker
- Docker Compose

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/lucaza21/corserva-test-backend.git
cd corserva-test-backend
docker-compose up --build
```

On your browser navigate into:

```sh
http://localhost:3030/api/sales
```
