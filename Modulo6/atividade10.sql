-- NOME: Flávio Soares Neves

-- Dado o modelo relacional abaixo que visa resolver uma alocação de alunos. 

-- Respondam as perguntas utilizando comandos SQL que atendam o solicitado:

-- ALUNO (aluno_id, nome, curso, nivel, idade)
-- TURMA (turma_id, nometurma, sala, horario)
-- MATRÍCULA (matricula_id, aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas)

create database Escola;

create table ALUNO (
aluno_id int primary key auto_increment,
nome varchar(255) not null,
curso varchar(50) not null,
nivel int not null,
idade int not null);

create table TURMA (
turma_id int primary key auto_increment,
nomeTurma varchar(100) not null,
sala varchar(4) not null,
horario ENUM('manhã', 'tarde', 'noite'));

create table MATRICULA (
matricula_id int primary key auto_increment,
aluno_id int,
turma_id int,
nota_1 decimal (2,1),
nota_2 decimal (2,1),
nota_3 decimal (2,1),
nota_final decimal (2,1),
nr_faltas int,
CONSTRAINT fk_aluno_id FOREIGN KEY (aluno_id) REFERENCES ALUNO (aluno_id),
CONSTRAINT fk_turma_id FOREIGN KEY (turma_id) REFERENCES TURMA (turma_id)
);


INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Lucas Almeida', 'Engenharia', 1, 18);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Mariana Costa', 'Medicina', 2, 22);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Pedro Silva', 'Direito', 3, 24);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Fernanda Nogueira', 'Administração', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Rafael Souza', 'Computação', 2, 21);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Juliana Ferreira', 'Engenharia', 3, 25);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Bruno Mendes', 'Medicina', 1, 20);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Ana Clara Santos', 'Direito', 2, 22);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Thiago Oliveira', 'Administração', 3, 24);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Gabriela Farias', 'Computação', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Carolina Lima', 'Engenharia', 2, 21);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Felipe Rodrigues', 'Medicina', 3, 26);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Lucas Martins', 'Direito', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Isabela Gomes', 'Administração', 2, 22);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Rodrigo Vieira', 'Computação', 3, 25);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Beatriz Barros', 'Engenharia', 1, 18);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Ricardo Carvalho', 'Medicina', 2, 21);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Juliana Santos', 'Direito', 3, 24);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Renato Souza', 'Administração', 1, 20);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Mariana Nunes', 'Computação', 2, 23);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Lucas Duarte', 'Engenharia', 3, 25);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Amanda Oliveira', 'Medicina', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Paulo Teixeira', 'Direito', 2, 22);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Aline Sousa', 'Administração', 3, 24);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Gustavo Mendes', 'Computação', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Patrícia Silva', 'Engenharia', 2, 20);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Cláudio Ribeiro', 'Medicina', 3, 26);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Vanessa Barbosa', 'Direito', 1, 19);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Marcos Rocha', 'Administração', 2, 21);
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES ('Célia Costa', 'Computação', 3, 24);

INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Física Básica', 'A101', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Química Inorgânica', 'A102', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Matemática Aplicada', 'A103', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Introdução à Programação', 'A104', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('História do Direito', 'A105', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Gestão Financeira', 'A106', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Mecânica Clássica', 'B201', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Biologia Celular', 'B202', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Análise Matemática', 'B203', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Sistemas Operacionais', 'B204', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Direito Penal I', 'B205', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Contabilidade Básica', 'B206', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Eletricidade Aplicada', 'C301', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Genética Humana', 'C302', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Álgebra Linear', 'C303', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Banco de Dados I', 'C304', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Direito Civil I', 'C305', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Marketing Digital', 'C306', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Cálculo Diferencial', 'D401', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Anatomia Humana', 'D402', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Geometria Analítica', 'D403', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Programação Web', 'D404', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Criminologia', 'D405', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Estratégia Corporativa', 'D406', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Física II', 'E501', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Patologia Clínica', 'E502', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Estatística Descritiva', 'E503', 'noite');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Redes de Computadores I', 'E504', 'manhã');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Direito Penal II', 'E505', 'tarde');
INSERT INTO TURMA (nomeTurma, sala, horario) VALUES ('Logística Empresarial', 'E506', 'noite');

INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (1, 1, 7.5, 8.0, 9.0, 8.2, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (2, 2, 8.0, 7.5, 8.5, 8.0, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (3, 3, 9.0, 8.5, 8.0, 8.5, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (4, 4, 6.5, 7.0, 7.5, 7.0, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (5, 5, 7.0, 8.0, 8.5, 7.8, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (6, 6, 8.5, 7.5, 8.0, 8.0, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (7, 7, 9.0, 8.0, 7.5, 8.2, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (8, 8, 7.5, 8.5, 8.0, 8.0, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (9, 9, 8.0, 7.5, 9.0, 8.2, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (10, 10, 7.5, 7.0, 8.0, 7.5, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (11, 11, 8.0, 8.5, 8.0, 8.2, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (12, 12, 9.0, 7.5, 8.5, 8.3, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (13, 13, 6.5, 7.5, 8.0, 7.3, 4);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (14, 14, 8.5, 9.0, 8.0, 8.5, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (15, 15, 7.0, 8.0, 7.5, 7.5, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (16, 16, 8.5, 9.0, 8.5, 8.7, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (17, 17, 7.5, 8.0, 7.5, 7.7, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (18, 18, 9.0, 8.5, 9.0, 8.8, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (19, 19, 7.0, 7.5, 7.5, 7.3, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (20, 20, 8.5, 9.0, 8.5, 8.7, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (21, 21, 7.0, 7.5, 7.0, 7.2, 2);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (22, 22, 9.0, 8.5, 9.0, 8.8, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (23, 23, 7.0, 7.5, 8.0, 7.5, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (24, 24, 8.5, 9.0, 8.0, 8.5, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (25, 25, 6.5, 7.0, 7.5, 7.0, 4);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (26, 26, 9.0, 8.5, 8.0, 8.5, 1);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (27, 27, 8.0, 8.5, 9.0, 8.5, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (28, 28, 7.5, 7.0, 8.0, 7.5, 3);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (29, 29, 9.0, 8.5, 9.0, 8.8, 0);
INSERT INTO MATRICULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES (30, 30, 8.5, 9.0, 8.5, 8.7, 1);


-- 1 Quais os nomes de todos os alunos?
select nome from ALUNO;

-- 2 Quais os numeros das matriculas dos alunos?
select matricula_id from MATRICULA;

-- 3 Quais os numeros das matriculas dos alunos que não estão matriculados em uma turma?
select matricula_id from ALUNO, MATRICULA
where MATRICULA.aluno_id  = null;

-- 4 Quais os números dos alunos matriculados em uma turma de número '6'?
select count(*) from MATRICULA
where turma_id = 6;

-- 5 Qual o horário da turma do aluno 'Gustavo Mendes'?
SELECT t.horario FROM TURMA t 
JOIN MATRICULA m ON t.turma_id = m.turma_id 
JOIN ALUNO a ON a.aluno_id = m.aluno_id 
WHERE a.nome = "Gustavo Mendes";

-- 6 Quais os nomes dos alunos matriculados em uma turma de número '4'?
SELECT a.nome FROM ALUNO a
inner JOIN MATRICULA m ON a.aluno_id = m.aluno_id 
WHERE m.turma_id = 4; 

-- 7 Quais os nomes dos alunos que não estão matriculados na turma de número '30'?
SELECT a.nome FROM ALUNO a
inner JOIN MATRICULA m ON a.aluno_id = m.aluno_id 
WHERE m.turma_id != 30 or m.turma_id is null; 

-- 8 Quais os nomes das turmas com alunos com nota final maior que 8?
SELECT DISTINCT t.nomeTurma  from TURMA t
JOIN MATRICULA m on t.turma_id = m.turma_id
wHERE m.nota_final > 8;
 