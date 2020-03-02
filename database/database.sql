USE agcourse;

DROP TABLE plants;
DROP TABLE families;
DROP TABLE categories;
DROP TABLE images;


CREATE TABLE images(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caption VARCHAR(255) NOT NULL,
    filename VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE categories(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_id INT(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (image_id) REFERENCES images(id)
);


CREATE TABLE families(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_id INT(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (image_id) REFERENCES images(id)
);


CREATE TABLE plants(
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_id INT(20) NOT NULL,
    family_id INT(20) NOT NULL,
    category_id INT(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (image_id) REFERENCES images(id),
    FOREIGN KEY (family_id) REFERENCES families(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
