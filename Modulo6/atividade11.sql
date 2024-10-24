-- NOME: Flávio Soares Neves

-- A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda.
-- No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

-- Desenvolva os scripts SQL para atender cada uma das questões abaixo:

create database BomGosto;

CREATE TABLE CARDAPIO (
cardapio_id INT auto_increment NOT NULL primary key,
nome_cafe VARCHAR(100) UNIQUE NOT NULL,
descricao varchar(255),
preco_unitario DECIMAL(5,2) NOT NULL);

create table COMANDA (
comanda_id int auto_increment not null primary key,
data_comanda date not null,
mesa int not null,
nome_cliente varchar(100) NOT NULL);

CREATE TABLE ITENS_COMANDA(
item_id INT auto_increment NOT NULL primary KEY,
comanda_id int not null,
cardapio_id int not null,
quantidade int not null,
preco_total decimal(5,2),
CONSTRAINT fk_comanda_id foreign key (comanda_id) references COMANDA(comanda_id),
CONSTRAINT fk_cardapio_id foreign key (cardapio_id) references CARDAPIO(cardapio_id),
unique (comanda_id,cardapio_id));

INSERT INTO CARDAPIO (nome_cafe, descricao, preco_unitario) VALUES
('Café Expresso', 'Café preto forte e encorpado', 4.50),
('Café com Leite', 'Café expresso com leite vaporizado', 5.50),
('Capuccino', 'Mistura de café, leite, chocolate e canela', 6.00),
('Macchiato', 'Café expresso com uma pequena quantidade de leite vaporizado', 5.00),
('Mocha', 'Café com leite e chocolate', 6.50);
INSERT INTO CARDAPIO (nome_cafe, descricao, preco_unitario) VALUES
('Café Gelado', 'Café expresso servido com gelo', 4.00),
('Latte', 'Café expresso com bastante leite vaporizado', 5.75),
('Americano', 'Café expresso diluído com água quente', 4.25),
('Café Duplo', 'Duas doses de café expresso', 5.00),
('Affogato', 'Café expresso servido com sorvete', 7.50);

INSERT INTO COMANDA (data_comanda, mesa, nome_cliente) VALUES
('2024-09-18', 1, 'Flávio Soares'),
('2024-09-18', 2, 'Mariana Silva'),
('2024-09-18', 3, 'Carlos Eduardo'),
('2024-09-18', 4, 'Ana Paula'),
('2024-09-18', 5, 'João Pedro');

INSERT INTO COMANDA (data_comanda, mesa, nome_cliente) VALUES
('2024-09-19', 1, 'Beatriz Rocha'),
('2024-09-19', 2, 'Lucas Matos'),
('2024-09-19', 3, 'Fernando Lima'),
('2024-09-19', 4, 'Renata Costa'),
('2024-09-19', 5, 'Gabriel Santos');

INSERT INTO ITENS_COMANDA (comanda_id, cardapio_id, quantidade, preco_total) VALUES
(1, 1, 2, 9.00),
(1, 3, 1, 6.00),
(2, 2, 1, 5.50),
(3, 4, 2, 10.00),
(4, 5, 1, 6.50);

INSERT INTO ITENS_COMANDA (comanda_id, cardapio_id, quantidade, preco_total) VALUES
(5, 6, 1, 4.00),
(6, 7, 2, 11.50),
(7, 8, 1, 4.25),
(8, 9, 2, 10.00),
(9, 10, 1, 7.50);

-- 1) Faça uma listagem do cardápio ordenada por nome;
select nome_cafe from CARDAPIO
order by nome_cafe;

-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
select c.*, ic.*, cd.* from COMANDA c
join ITENS_COMANDA ic on c.comanda_id = ic.comanda_id
join CARDAPIO cd on ic.cardapio_id = cd.cardapio_id
order by c.data_comanda, c.comanda_id, cd.nome_cafe;

-- 3 Liste todas as comandas (código, data, mesa e nome do cliente) mas uma coluna com o valor total da comanda. Ordene por data esta listagem.
select c.*, sum(ic.preco_total) as valor_total from COMANDA c
join ITENS_COMANDA ic on c.comanda_id = ic.comanda_id
group by c.comanda_id
order by c.data_comanda;

-- 4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
select c.*, sum(ic.preco_total) as valor_total from COMANDA c
join ITENS_COMANDA ic on c.comanda_id = ic.comanda_id
group by c.comanda_id
having 
count(ic.cardapio_id) > 1
order by c.data_comanda;

-- 5) Qual o total de faturamento por data? ordene por data esta consulta.
select c.data_comanda, sum(ic.preco_total) as faturamento_total from COMANDA c
join ITENS_COMANDA ic on ic.comanda_id = c.comanda_id
group by c.data_comanda 
order by c.data_comanda;

-- 6) Quais são os cafés que nunca foram vendidos?
select cd.nome_cafe from CARDAPIO cd
left join ITENS_COMANDA ic on cd.cardapio_id = ic.cardapio_id
where ic.cardapio_id is null;

-- 7) Escreva um script para excluir do cardápio os cafés que nunca foram vendidos?
delete from CARDAPIO
where cardapio_id not in (
select distinct cardapio_id from ITENS_COMANDA);

-- 8) Aumente em 10% o valor de todos os cafés da cafeteria.
update CARDAPIO
set preco_unitario = preco_unitario * 1.10;

-- 9) Faça uma listagem do cardápio apresentando as seguintes colunas extras: quantidade de cafés vendidos e total vendido por café
select cd.nome_cafe, sum(ic.quantidade) as quantidade_vendida, sum(ic.preco_total) as total_vendido from CARDAPIO cd
left join ITENS_COMANDA ic on cd.cardapio_id = ic.cardapio_id
group by cd.nome_cafe;

-- 10) Dimunua 5% do valor de todos os cafés que tiveram mais que 50 quantidades vendidas
update CARDAPIO cd 
join (select cardapio_id, sum(quantidade) as total_vendido from ITENS_COMANDA group by cardapio_id) as t 
on cd.cardapio_id = t.cardapio_id
set cd.preco_unitario = cd.preco_unitario * 0.95
where t.total_vendido > 50 && cd.cardapio_id = 1;

