CREATE OR REPLACE VIEW community_posts_view AS
SELECT 
  posts.post_id,
  posts.title,
  posts.created_at,
  posts.updated_at,
  posts.upvotes,
  topics.name AS topic_name,
  profiles.name AS author_name,
  profiles.username AS author_username,
  profiles.avatar AS author_avatar,
  topics.slug AS topic_slug
FROM posts
INNER JOIN topics USING (topic_id)
INNER JOIN profiles USING (profile_id);

CREATE OR REPLACE VIEW community_post_view AS
SELECT
  posts.post_id,
  posts.title,
  posts.content,
  posts.created_at,
  posts.upvotes,
  topics.topic_id,
  topics.name AS topic_name,
  topics.slug AS topic_slug,
  COUNT(post_replies.post_reply_id) AS reply_count,
  profiles.name AS author_name,
  profiles.username AS author_username,
  profiles.avatar AS author_avatar,
  profiles.role AS author_role,
  profiles.created_at AS author_created_at,
  (SELECT COUNT(*) FROM products WHERE products.profile_id = profiles.profile_id) AS author_product_count
FROM posts
INNER JOIN topics USING (topic_id)
LEFT JOIN post_replies USING (post_id)
INNER JOIN profiles ON (profiles.profile_id = posts.profile_id)
GROUP BY posts.post_id, topics.topic_id, profiles.profile_id;