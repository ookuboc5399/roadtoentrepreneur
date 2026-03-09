import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // ユーザーのブックマーク一覧を取得
    try {
      const { user_id } = req.query;
      
      if (!user_id) {
        return res.status(400).json({ error: 'user_id is required' });
      }

      const { data: bookmarks, error } = await supabase
        .from('user_bookmarks')
        .select(`
          *,
          library_books (
            id,
            title,
            author,
            cover_image,
            category,
            rating,
            read_time,
            has_audio,
            has_video
          )
        `)
        .eq('user_id', user_id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookmarks:', error);
        return res.status(500).json({ error: 'Failed to fetch bookmarks' });
      }

      return res.status(200).json(bookmarks || []);
    } catch (error) {
      console.error('Bookmark API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } 
  else if (req.method === 'POST') {
    // ブックマークを追加
    try {
      const { user_id, book_id } = req.body;
      
      if (!user_id || !book_id) {
        return res.status(400).json({ error: 'user_id and book_id are required' });
      }

      const { data, error } = await supabase
        .from('user_bookmarks')
        .insert([{ user_id, book_id }])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          return res.status(409).json({ error: 'Book already bookmarked' });
        }
        console.error('Error adding bookmark:', error);
        return res.status(500).json({ error: 'Failed to add bookmark' });
      }

      return res.status(201).json(data);
    } catch (error) {
      console.error('Bookmark API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } 
  else if (req.method === 'DELETE') {
    // ブックマークを削除
    try {
      const { user_id, book_id } = req.query;
      
      if (!user_id || !book_id) {
        return res.status(400).json({ error: 'user_id and book_id are required' });
      }

      const { error } = await supabase
        .from('user_bookmarks')
        .delete()
        .eq('user_id', user_id)
        .eq('book_id', book_id);

      if (error) {
        console.error('Error removing bookmark:', error);
        return res.status(500).json({ error: 'Failed to remove bookmark' });
      }

      return res.status(200).json({ message: 'Bookmark removed successfully' });
    } catch (error) {
      console.error('Bookmark API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } 
  else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
