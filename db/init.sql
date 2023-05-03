CREATE TABLE IF NOT EXISTS public.students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO public.students (name, age, email) VALUES ('Foo Bar', 20, 'foo.bar@example.com');