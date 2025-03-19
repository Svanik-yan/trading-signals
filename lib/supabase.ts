import { createClient } from '@supabase/supabase-js'

// 使用环境变量加载Supabase配置
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// 验证环境变量是否设置
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL或Key未配置。请检查您的环境变量。');
}

// 创建Supabase客户端
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 