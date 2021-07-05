--this is how you do comments in sql. <--
--For dates and strings you wrap them in single quotes ''.

--this is how you grab a list of all employees
select * from employees

--this is how you get more specific by grabbing just the productId and the product name from the products list.  They do not have to be in a specific order.
select productId, productName 
from products;

--list of all customers from UK
select * 
from customers
where country = 'UK'; -- this sample database has case sensitive string comparisons

--list of all customers from UK and Berlin
select * 
from customers
where country = 'UK' or city = 'Berlin';

--list of all customers from UK and USA
select * 
from customers
where country = 'UK' or country = 'USA';

--list of all customers from UK and USA using the 'in' keyword
select * 
from customers
where country in ('UK', 'USA');

--list of all customers NOT from UK and USA
select * 
from customers
where country not in ('UK', 'USA');

--list of all customers sorted by the country, then by the city, then by the name
select country, city, * -- the * would be like the 'rest' operator.  Everything else.
from customers
order by country, city, customerName;

--list 5 cheapest products
select * 
from products
order by price
limit 5

--list 5 expensive products
select * 
from products
order by price desc
limit 5

--add a new shipping company
insert into shippers (phone, shipperName)
values ('(212) 445-1212', 'Lambda School Shipping');

--add 2 new shipping company
insert into shippers (phone, shipperName)
values ('(212) 555-1212', 'LS Shipping'), ('(212) 444-1212', 'Code Shipping');

--edit/update errors 
--select * from shippers
update shippers
set shipperName = 'Lamda Shipping', Phone = '(212) 555-1211'
where shipperId = 4; -- remember to test the where condition with a select first!!!!!!

--delete a record
--select * from shippers
delete from shippers
where shipperId = 4;

-- using brackets is a sign so you can use invalid names for database objects. (may need to rename them)
-- always end your sql statements with a semi-colon.  Let's the program know to go to the next statement.
