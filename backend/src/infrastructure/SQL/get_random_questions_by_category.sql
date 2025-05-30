DROP FUNCTION get_random_questions_by_category(integer,integer);
reate or replace function get_random_questions_by_category(cat_id integer, lim integer)
returns table (
  id integer,
  question_text text,
  choice1 text,
  choice2 text,
  choice3 text,
  choice4 text,
  correct_answer_id integer,
  explanation text,
  hint text,
  main_category_id integer,
  sub_category_id integer,
  created_at timestamptz,
  updated_at timestamptz,
  main_category_name text,
  sub_category_name text
)
language sql
as $$
  select 
    q.*,
    mc.name as main_category_name,
    sc.name as sub_category_name
  from questions q
  join main_categories mc on q.main_category_id = mc.id
  join sub_categories sc on q.sub_category_id = sc.id
  where q.main_category_id = cat_id
  order by random()
  limit lim;
$$;