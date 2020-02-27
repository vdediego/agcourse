USE agcourse;

CREATE TABLE plants(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    plant_image_id INT(20) NOT NULL,
    family_id INT(20) NOT NULL,
    category_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE families(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    plant_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    plant_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plant_images(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    plant_id INT(20) NOT NULL,
    image_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caption VARCHAR(255) NOT NULL,
    filename VARCHAR(100) NOT NULL,
    plant_image_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE plants
ADD FOREIGN KEY plant_image_id REFERENCES plant_images(id);

ALTER TABLE plants
ADD FOREIGN KEY family_id REFERENCES families(id);

ALTER TABLE plants
ADD FOREIGN KEY category_id REFERENCES categories(id);

ALTER TABLE plant_images
ADD FOREIGN KEY image_id REFERENCES images(id);

ALTER TABLE plant_images
ADD FOREIGN KEY plant_id REFERENCES plants(id);

ALTER TABLE families
ADD FOREIGN KEY plant_id REFERENCES plants(id);

ALTER TABLE categories
ADD FOREIGN KEY plant_id REFERENCES plants(id);