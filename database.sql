
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

-- Placeholder data with no user attached. This only adds description and placeholder url text.
INSERT INTO "item" ("description", "image_url")
VALUES ('A doll of our mascot and CEO, Mark.', 'Image Text Placeholder'),
('Boardgames featuring popular pop culture characters', 'Image Text'),
('Lots and lots of monitors. Should these be moved?','Image Placeholder Text')

