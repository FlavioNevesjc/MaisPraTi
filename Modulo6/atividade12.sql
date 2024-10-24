-- NOME: Flávio Soares Neves

-- Estudo de Caso - Escola de Informática

-- Uma escola de informática deseja manter um controle do seu funcionamento. Os alunos são organizados em turmas associadas a um tipo específico de curso. As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. Cada turma é orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e todos os telefones possíveis para sua localização. Um professor pode orientar várias turmas que podem ser de diferentes cursos. Para cada turma existe um aluno monitor que auxilia o professor da turma, sendo que um aluno pode ser monitor no máximo em uma turma. Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso. Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é mantido um registro das ausências do aluno.


-- 1) Crie o modelo ER físico que representa a Escola de Informática descrita. Este modelo deve conter todos os elementos/objetos de banco de dados que atendam as restrições descritas no enunciado: tabelas, colunas, tipos, nulidade, chaves primárias, chaves estrangeiras com cascade e índices únicos. Crie campos adicionais se julgares conveniente;

-- 2) Gere os scripts de criação da base de dados no MySQL;

create database EscolaInformatica;

create table PROFESSOR (
professor_id int auto_increment primary key,
cpf decimal(11) not null,
nome varchar(150) not null,
data_nascimento date not null,
titulacao varchar(35));

create table TELEFONE (
telefone_id int auto_increment primary key,
professor_id int,
telefone varchar (15) not null,
CONSTRAINT fk_professor_id foreign key (professor_id) references PROFESSOR(professor_id) ON DELETE CASCADE);

create table ALUNO (
aluno_id int auto_increment primary key,
codigo_matricula varchar(50) unique not null,
data_matricula date not null,
nome varchar(150) not null,
endereco varchar(70) not null,
telefone varchar(11),
data_nascimento date,
altura decimal(4,2),
peso decimal(5.2));

create table TURMA (
turma_id int primary key auto_increment,
quantidade_aluno int not null,
horario_aula ENUM ("Manhã", "Tarde", "Noite") not null,
duracao_aula time not null,
data_inicial date not null,
data_final date not null,
tipo_curso VARCHAR(50) not null,
professor_id int,
monitor_id int unique,
CONSTRAINT fk_professores_id FOREIGN KEY (professor_id) REFERENCES PROFESSOR (professor_id) on delete cascade,
CONSTRAINT fk_monitor_id FOREIGN KEY (monitor_id) REFERENCES ALUNO (aluno_id));

create table MATRICULA (
matricula_id int auto_increment primary key,
aluno_id int,
turma_id int,
faltas int default 0,
CONSTRAINT fk_aluno_id FOREIGN KEY (aluno_id) REFERENCES ALUNO (aluno_id) on delete cascade,
CONSTRAINT fk_turma_id FOREIGN KEY (turma_id) REFERENCES TURMA (turma_id));

-- 3) Inserir com SQL ao menos 3 tuplas em cada uma das tabelas criadas;

INSERT INTO PROFESSOR (cpf, nome, data_nascimento, titulacao) 
VALUES (12345678901, 'João Silva', '1980-05-12', 'Mestre'),
       (23456789012, 'Maria Souza', '1975-11-30', 'Doutor'),
       (34567890123, 'Carlos Pereira', '1982-07-19', 'Especialista'),
       (45678901234, 'Fernanda Oliveira', '1985-09-25', 'Mestre'),
       (56789012345, 'Ricardo Santos', '1990-03-10', 'Doutor');

INSERT INTO TELEFONE (professor_id, telefone) 
VALUES (1, '11987654321'),
       (2, '11988776655'),
       (3, '11999887766'),
       (4, '11991234567'),
       (5, '11993456789');

INSERT INTO ALUNO (codigo_matricula, data_matricula, nome, endereco, telefone, data_nascimento, altura, peso)
VALUES ('MAT2024001', '2024-01-10', 'Paulo Lima', 'Rua A, 123', '11998765432', '2000-08-15', 1.75, 70.50),
       ('MAT2024002', '2024-02-05', 'Ana Ferreira', 'Rua B, 456', '11987654321', '1998-06-22', 1.68, 65.30),
       ('MAT2024003', '2024-03-12', 'Marcos Gomes', 'Rua C, 789', '11996543210', '2001-03-18', 1.80, 80.00),
       ('MAT2024004', '2024-01-15', 'Lucas Andrade', 'Rua D, 101', '11997531122', '1999-12-10', 1.82, 85.00),
       ('MAT2024005', '2024-02-20', 'Carla Souza', 'Rua E, 202', '11994567891', '1997-05-21', 1.60, 58.70),
       ('MAT2024006', '2024-01-25', 'Juliana Martins', 'Rua F, 303', '11992345678', '2000-09-13', 1.70, 62.40),
       ('MAT2024007', '2024-03-01', 'Bruno Carvalho', 'Rua G, 404', '11993455678', '1998-11-30', 1.75, 74.20),
       ('MAT2024008', '2024-02-28', 'Luciana Mendes', 'Rua H, 505', '11991234565', '2002-01-22', 1.65, 68.00),
       ('MAT2024009', '2024-03-05', 'Felipe Araújo', 'Rua I, 606', '11990098765', '1999-03-15', 1.72, 77.50),
       ('MAT2024010', '2024-04-01', 'Renata Almeida', 'Rua J, 707', '11991122334', '2000-07-18', 1.58, 55.60);

INSERT INTO TURMA (quantidade_aluno, horario_aula, duracao_aula, data_inicial, data_final, tipo_curso, professor_id, monitor_id)
VALUES (30, 'Manhã', '02:00:00', '2024-04-01', '2024-12-01', 'Matemática', 1, 1),
       (25, 'Tarde', '01:30:00', '2024-05-01', '2024-12-01', 'Física', 2, 2),
       (20, 'Noite', '03:00:00', '2024-06-01', '2024-12-01', 'Química', 3, 3),
       (18, 'Manhã', '02:15:00', '2024-07-01', '2024-12-01', 'Biologia', 4, 4),
       (22, 'Tarde', '02:30:00', '2024-08-01', '2024-12-01', 'História', 5, 5);

INSERT INTO MATRICULA (aluno_id, turma_id, faltas)
VALUES (1, 1, 2),
       (2, 2, 0),
       (3, 3, 1),
       (4, 1, 3),
       (5, 2, 1),
       (6, 3, 4),
       (7, 4, 0),
       (8, 5, 2),
       (9, 4, 1),
       (10, 5, 3);

       
-- 4) Fazer consultas SQL que respondam as seguintes questões:
-- 4.1) Listar os dados dos alunos;
select * from ALUNO;

-- 4.2) Listar os dados dos alunos e as turmas que eles estão matriculados;
select a.*, t.tipo_curso from ALUNO a
join MATRICULA m on a.aluno_id = m.aluno_id
join TURMA t on m.turma_id = t.turma_id;

-- 4.3) Listar os alunos que não possuem faltas;
select a.nome, m.faltas from ALUNO a
join MATRICULA m on a.aluno_id = m.aluno_id
where m.faltas = 0;

-- 4.4) Listar os professores e a quantidade de turmas que cada um leciona;
select p.nome, count(t.turma_id) as quantidade_turmas from PROFESSOR p
join TURMA t on p.professor_id = t.professor_id
group by p.nome;

-- 4.5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
select p.nome as professor_nome, MIN(tp.telefone), t.turma_id, t.data_inicial, t.data_final, t.horario_aula, t.tipo_curso, a.nome as aluno_nome from PROFESSOR p
join TELEFONE tp on p.professor_id = tp.professor_id
join TURMA t on p.professor_id = t.professor_id
join MATRICULA m on t.turma_id = m.turma_id
join ALUNO a on m.aluno_id = a.aluno_id
group by p.nome, t.turma_id, a.nome
order by p.nome, t.turma_id, a.nome;

-- 4.6) Listar os nomes dos professores e a turma que cada um leciona com maior número de alunos;  
select p.nome as nome_professor, t.turma_id, t.quantidade_aluno from PROFESSOR p
join TURMA t on p.professor_id = t.professor_id
order by t.quantidade_aluno desc
limit 1;

-- 4.7) Listar os nomes dos alunos ordenados pela turma que estes possuem maior número de faltas. Deve aparecer apenas a turma que cada um dos alunos tem maior quantidade de faltas;
select a.nome as nome_professor, t.turma_id, m.faltas from ALUNO a
join MATRICULA m on a.aluno_id = m.aluno_id
join TURMA t on m.turma_id = t.turma_id
order by m.faltas desc;

-- 4.8) Listar a quantidade média de alunos por curso.
select t.tipo_curso, avg(t.quantidade_aluno) as media_alunos from TURMA t
group by t.tipo_curso;

-- 5) Fazer alterações nas tabelas:
-- 5.1) Alterar o nome de todos os professores para maiúsculo;
update PROFESSOR
set nome = upper(nome)
where professor_id = 1;

-- 5.2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
update ALUNO
set nome = ucase(nome) 
where aluno_id in (
select m.aluno_id from MATRICULA m
join TURMA t on m.turma_id = t.turma_id
where t.quantidade_aluno = (
select MAX(quantidade_aluno) from TURMA));
    
-- 6) Excluir as ausências dos alunos nas turmas que estes são monitores;
update MATRICULA m
join TURMA t on m.turma_id = t.turma_id
set m.faltas = 0
where m.aluno_id = t.monitor_id;
