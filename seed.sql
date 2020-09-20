CREATE schema popchef_test;

CREATE TABLE popchef_test.products (
	id integer NULL GENERATED ALWAYS AS IDENTITY,
	"label" varchar NULL,
	price integer NULL,
	rating integer NULL,
	category varchar NULL
);

INSERT INTO popchef_test.products (label, price, rating, category)
values
	('Steak aux fraises Tagada', 15, 8, 'Français'),
	('Compotée de gruyère', 4, 6, 'Dessert'),
	('Langoustines nature', 10, 10, 'Maritime'),
	('Côte de veau aigre-douce', 22, 2, 'Français'),
	('Tarte miel/couscous', 12, 6, 'Exotique');

select * from popchef_test.products;