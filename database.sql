--CREATE TABLE
CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(255) NOT NULL,
"description" VARCHAR(500) NOT NULL,
"likes" INTEGER DEFAULT 0
);

--INSERT INITIAL DATA
INSERT INTO "gallery"
("path", "description")
VALUES
('images/hawaii-sunset.jpg', 'Me and Jenny in Hawaii this past February. We were so glad to get away from the cold!'),
('images/jenny-kids.jpg', 'Jenny with her niece Zadie and newly born nephew Ari. They are the reason we moved here.'),
('images/packed-jeep.jpg', 'The back of my Jeep, nearly packed. We moved to Minnesota with only what we could fit, most of it being music gear.'),
('images/ben-noble.jpg', 'We often see Jenny`s brother-in-law, Ben Noble, perform around town.'),
('images/pat-sunne.jpg', 'My parents, Pat and Sunne, came to visit in September.'),
('images/tracyanne-danny.jpg', 'Last year on my birthday, I met my favorite musician, Tracyanne Campbell, now of Tracyanne & Danny.');