DROP TABLE IF EXISTS sub_categories;
CREATE TABLE sub_categories (
  id SERIAL PRIMARY KEY,
  main_category_id INTEGER NOT NULL REFERENCES main_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);