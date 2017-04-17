# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Cards

- `GET /api/cards`
- `POST /api/cards`
- `GET /api/cards/:id`
- `PATCH /api/cards/:id`
- `DELETE /api/cards/:id`

### Decks

- `GET /api/decks`
- `POST /api/decks`
- `GET /api/decks/:id`
- `DELETE /api/decks/:id`
- `GET /api/decks/:id/cards`
  - index of all cards for a deck

### Subjects

- `GET /api/subjects`
- `POST /api/subjects`
- `GET /api/subjects/:id`
- `DELETE /api/subjects/:id`
- `GET /api/subjects/:id/decks`
  - index of all decks for a subject

### Categories

- `GET /api/categories`
- `GET /api/categories/:id/subjects`
  - index of all subjects for a category

### Tags

- `GET /api/tags`
- `POST /api/subjects/:subjects_id/tags`: add tag to note by name
