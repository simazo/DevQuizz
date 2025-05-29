// 登録先はsupabase
// 本番で使用

import { supabase } from "../db/supabaseClient";
import { QuestionRepository } from "../../usecase/repository/questionRepository";
import { Question } from "../../domain/entity/question";
import { InfraError } from "../../error";
import { QuestionRecordMapper } from "../mapper/questionRecordMapper";

export class SupabaseQuestionRepository implements QuestionRepository {
  async getQuestionsByCategory(mainCategoryId: number, limit: number): Promise<Question[]> {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        *,
        main_categories (id, name),
        sub_categories (id, name, main_category_id)
      `)
      .eq('main_category_id', mainCategoryId)
      .limit(limit);

    if (error) {
      throw new InfraError(error.message);
    }

    return (data ?? []).map((record: any) =>
      QuestionRecordMapper.toDomain({
        ...record,
        main_category_name: record.main_categories.name,
        sub_category_name: record.sub_categories.name,
      })
    );
  }

  async getQuestionsByIds(ids: number[]): Promise<Question[]> {
    const {data, error} = await supabase
      .from('questions')
      .select(`
        *,
        main_categories (id, name),
        sub_categories (id, name, main_category_id)
      `)
      .in('id', ids);

    if (error) {
      throw new InfraError(error.message);
    }

    return (data ?? []).map((record: any) =>
      QuestionRecordMapper.toDomain({
        ...record,
        main_category_name: record.main_categories.name,
        sub_category_name: record.sub_categories.name,
      })
    );
  }

  async getQuestionById(id: number): Promise<Question> {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        *,
        main_categories (id, name),
        sub_categories (id, name, main_category_id)
      `)
      .eq('id', id)
      .single(); // ← 1件だけ取得

    if (error) {
      throw new InfraError(error.message);
    }

    if (!data) {
      throw new InfraError(`Question with id ${id} not found`);
    }

    return QuestionRecordMapper.toDomain({
      ...data,
      main_category_name: data.main_categories.name,
      sub_category_name: data.sub_categories.name,
    });
  }

}