DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  choice1 TEXT NOT NULL,
  choice2 TEXT NOT NULL,
  choice3 TEXT NOT NULL,
  choice4 TEXT NOT NULL,
  correct_answer_id INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  hint TEXT NOT NULL,
  main_category_id INTEGER NOT NULL REFERENCES main_categories(id) ON DELETE CASCADE,
  sub_category_id INTEGER NOT NULL REFERENCES sub_categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
