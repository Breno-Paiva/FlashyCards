# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
user_pic_url    | string    |

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question    | string    | not null
answer      | text      | not null
deck_id     | integer   | not null, foreign key (references notebooks), indexed

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
subject_id  | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | string    |

## subjects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
category_id | integer   | not null, foreign key (references users), indexed
description | string    |
subject_pic_url | integer   |


## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subject_id  | string    | not null, foreign key (references users), indexed
tag_id      | string    | not null, foreign key (references users), indexed

## card-scores
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
card_id     | string    | not null, foreign key (references users), indexed
user_id     | string    | not null, foreign key (references users), indexed
score       | integer   |
