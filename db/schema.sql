DROP TABLE IF EXISTS mockdraftable_player_links;
-- DROP TABLE IF EXISTS sauces;
-- DROP TABLE IF EXISTS sauce_prices;
-- DROP TABLE IF EXISTS customers;
-- DROP TABLE IF EXISTS customer_emails;
-- DROP TABLE IF EXISTS customer_purchases;

CREATE TABLE mockdraftable_player_links(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    link VARCHAR(255),
    position VARCHAR(255),
    college VARCHAR(255),
    year INTEGER
);

-- CREATE TABLE sauces(
--     id SERIAL PRIMARY KEY,
--     manufacturer_id INTEGER,
--     name VARCHAR(255)
-- );

-- CREATE TABLE sauce_prices(
--     id SERIAL PRIMARY KEY,
--     sauce_id INTEGER,
--     price INTEGER
-- );

-- CREATE TABLE customers(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255)
-- );

-- CREATE TABLE customer_emails(
--     id SERIAL PRIMARY KEY,
--     customer_id INTEGER,
--     email VARCHAR(255)
-- );

-- CREATE TABLE customer_purchases(
--     id SERIAL PRIMARY KEY,
--     customer_id INTEGER,
--     sauce_id INTEGER,
--     quantity INTEGER
-- );