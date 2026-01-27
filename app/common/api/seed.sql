-- Database Seed SQL
-- Profile IDs: bd6f9911-da12-459c-994f-4ea2a646c4bf, eb5fb274-b4df-4292-a2dd-f7a72563e15c, 
--              cd143836-afd5-4096-a0a4-6418dee7630c, dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d, 
--              f9f07e2b-fde6-4fae-ab59-163735d79647

-- 1. Jobs (no profile_id dependency)
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo_url, company_hq, company_location, apply_url, job_type, location, salary_range) VALUES
('Senior Full Stack Developer', 'We are looking for an experienced full stack developer to join our team.', 'Develop and maintain web applications, Collaborate with cross-functional teams, Write clean and efficient code', '5+ years of experience, Strong knowledge of React and Node.js, Experience with databases', 'Health insurance, Remote work, Flexible hours', 'React, Node.js, PostgreSQL, TypeScript', 'TechCorp', 'https://example.com/logo1.png', 'San Francisco', 'San Francisco, CA', 'https://example.com/apply1', 'full-time', 'hybrid', '120000-150000'),
('Product Designer', 'Join our design team to create beautiful and functional user experiences.', 'Design user interfaces, Create wireframes and prototypes, Conduct user research', '3+ years of design experience, Proficiency in Figma, Strong portfolio', 'Health insurance, Stock options, Learning budget', 'Figma, Adobe Creative Suite, User Research', 'DesignStudio', 'https://example.com/logo2.png', 'New York', 'New York, NY', 'https://example.com/apply2', 'full-time', 'in-person', '100000-120000'),
('Marketing Manager', 'Lead our marketing efforts and grow our brand presence.', 'Develop marketing strategies, Manage social media, Analyze campaign performance', '4+ years of marketing experience, Strong analytical skills, Experience with digital marketing', 'Health insurance, Remote work, Performance bonus', 'Digital Marketing, SEO, Analytics', 'GrowthCo', 'https://example.com/logo3.png', 'Austin', 'Austin, TX', 'https://example.com/apply3', 'full-time', 'remote', '70000-100000'),
('Frontend Developer', 'Build amazing user interfaces with modern web technologies.', 'Implement UI components, Optimize performance, Write tests', '2+ years of frontend experience, React expertise, CSS skills', 'Health insurance, Remote work, Flexible PTO', 'React, TypeScript, CSS, Jest', 'WebDev Inc', 'https://example.com/logo4.png', 'Seattle', 'Seattle, WA', 'https://example.com/apply4', 'part-time', 'remote', '50000-70000'),
('Backend Engineer', 'Design and implement scalable backend systems.', 'Build APIs, Design database schemas, Optimize performance', '3+ years of backend experience, Node.js or Python, Database design', 'Health insurance, Stock options, Conference budget', 'Node.js, PostgreSQL, Redis, Docker', 'BackendPro', 'https://example.com/logo5.png', 'Boston', 'Boston, MA', 'https://example.com/apply5', 'full-time', 'hybrid', '100000-120000');

-- 2. Topics (no profile_id dependency)
INSERT INTO topics (name, slug, created_at) VALUES
('Technology', 'technology', NOW()),
('Design', 'design', NOW()),
('Business', 'business', NOW()),
('Startups', 'startups', NOW()),
('Productivity', 'productivity', NOW());

-- 3. Categories (no profile_id dependency)
INSERT INTO categories (name, description, created_at, updated_at) VALUES
('SaaS', 'Software as a Service products and tools', NOW(), NOW()),
('Mobile Apps', 'Mobile applications for iOS and Android', NOW(), NOW()),
('Developer Tools', 'Tools and utilities for developers', NOW(), NOW()),
('Design Tools', 'Design and creative tools', NOW(), NOW()),
('Productivity', 'Productivity and workflow tools', NOW(), NOW());

-- 4. Teams (depends on team_leader profile_id)
INSERT INTO teams (product_name, team_size, equity_split, product_stage, roles, product_description, team_leader_id, created_at, updated_at) VALUES
('Project Alpha', 5, 20, 'early_stage', 'Full Stack Developer, UI/UX Designer, Product Manager', 'A revolutionary project management tool for remote teams', 'bd6f9911-da12-459c-994f-4ea2a646c4bf', NOW(), NOW()),
('Beta Platform', 8, 25, 'growth_stage', 'Backend Engineer, Frontend Developer, DevOps Engineer, Designer', 'An innovative platform connecting creators with their audience', 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', NOW(), NOW()),
('Gamma App', 3, 15, 'early_stage', 'Mobile Developer, Backend Developer, Designer', 'A mobile-first social networking application', 'cd143836-afd5-4096-a0a4-6418dee7630c', NOW(), NOW()),
('Delta Service', 10, 30, 'mature_stage', 'Multiple developers, designers, marketers, support staff', 'A comprehensive service platform for businesses', 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', NOW(), NOW()),
('Epsilon Tool', 6, 22, 'growth_stage', 'Full Stack Developer, Designer, Marketing Lead', 'An AI-powered tool for content creators', 'f9f07e2b-fde6-4fae-ab59-163735d79647', NOW(), NOW());

-- 6. Products (depends on profile_id and category_id)
INSERT INTO products (name, tagline, description, how_it_works, icon, url, status, profile_id, category_id, created_at, updated_at) VALUES
('TaskMaster Pro', 'Organize your life with AI-powered task management', 'A comprehensive task management tool that helps you stay organized and productive.', 'Simply add tasks, set priorities, and let AI suggest the best schedule for you.', 'https://example.com/icon1.png', 'https://taskmaster.example.com', '{"views":0,"reviews":0}'::jsonb, 'bd6f9911-da12-459c-994f-4ea2a646c4bf', 1, NOW(), NOW()),
('DesignFlow', 'Streamline your design workflow', 'A powerful design tool that integrates with your favorite apps.', 'Connect your design tools, sync files automatically, and collaborate in real-time.', 'https://example.com/icon2.png', 'https://designflow.example.com', '{"views":0,"reviews":0}'::jsonb, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 4, NOW(), NOW()),
('CodeSync', 'Version control made simple', 'An intuitive version control system for developers of all levels.', 'Initialize a repository, commit changes, and sync with your team effortlessly.', 'https://example.com/icon3.png', 'https://codesync.example.com', '{"views":0,"reviews":0}'::jsonb, 'cd143836-afd5-4096-a0a4-6418dee7630c', 3, NOW(), NOW()),
('FocusMode', 'Block distractions and boost productivity', 'A distraction-blocking app that helps you stay focused on what matters.', 'Set focus sessions, block distracting websites, and track your productivity.', 'https://example.com/icon4.png', 'https://focusmode.example.com', '{"views":0,"reviews":0}'::jsonb, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', 5, NOW(), NOW()),
('MobileSync', 'Sync everything across your devices', 'A seamless synchronization tool for your mobile devices.', 'Install the app, sign in, and your data syncs automatically across all devices.', 'https://example.com/icon5.png', 'https://mobilesync.example.com', '{"views":0,"reviews":0}'::jsonb, 'f9f07e2b-fde6-4fae-ab59-163735d79647', 2, NOW(), NOW());

-- 7. Posts (depends on profile_id and topic_id)
INSERT INTO posts (title, content, created_at, updated_at, topic_id, profile_id) VALUES
('The Future of Web Development', 'Web development is evolving rapidly with new frameworks and tools emerging every day. In this post, I explore the latest trends and what they mean for developers.', NOW(), NOW(), 1, 'bd6f9911-da12-459c-994f-4ea2a646c4bf'),
('Design Principles for Modern Apps', 'Good design is not just about aesthetics. It is about creating experiences that users love. Here are the key principles every designer should know.', NOW(), NOW(), 2, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c'),
('Building a Successful Startup', 'Starting a business is challenging, but with the right approach, you can build something amazing. Learn from my experience building multiple startups.', NOW(), NOW(), 3, 'cd143836-afd5-4096-a0a4-6418dee7630c'),
('Lessons from My First Startup', 'My journey from idea to launch was filled with ups and downs. Here is what I learned along the way and how you can avoid common pitfalls.', NOW(), NOW(), 4, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d'),
('10 Productivity Hacks That Changed My Life', 'Productivity is not about working harder, it is about working smarter. These 10 hacks have transformed how I approach my work and life.', NOW(), NOW(), 5, 'f9f07e2b-fde6-4fae-ab59-163735d79647');

-- 8. GPT Ideas (depends on profile_id for claimed_by, nullable)
INSERT INTO gpt_ideas (idea, views, claimed_at, claimed_by, created_at) VALUES
('An AI-powered personal finance assistant that tracks spending and provides insights', 42, NULL, NULL, NOW()),
('A social platform for finding workout buddies in your neighborhood', 28, NOW(), 'bd6f9911-da12-459c-994f-4ea2a646c4bf', NOW()),
('A browser extension that summarizes long articles automatically', 67, NULL, NULL, NOW()),
('An app that helps you learn a new language through daily conversations', 35, NOW(), 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', NOW()),
('A platform connecting local farmers directly with consumers', 19, NULL, NULL, NOW());

-- 9. Follows (depends on profile_id for follower_id and following_id)
INSERT INTO follows (follower_id, following_id, created_at) VALUES
('bd6f9911-da12-459c-994f-4ea2a646c4bf', 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', NOW()),
('eb5fb274-b4df-4292-a2dd-f7a72563e15c', 'cd143836-afd5-4096-a0a4-6418dee7630c', NOW()),
('cd143836-afd5-4096-a0a4-6418dee7630c', 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', NOW()),
('dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', 'f9f07e2b-fde6-4fae-ab59-163735d79647', NOW()),
('f9f07e2b-fde6-4fae-ab59-163735d79647', 'bd6f9911-da12-459c-994f-4ea2a646c4bf', NOW());

-- 10. Product Upvotes (depends on product_id and profile_id)
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(1, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c'),
(1, 'cd143836-afd5-4096-a0a4-6418dee7630c'),
(2, 'bd6f9911-da12-459c-994f-4ea2a646c4bf'),
(2, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d'),
(3, 'f9f07e2b-fde6-4fae-ab59-163735d79647');

-- 11. Reviews (depends on product_id and profile_id)
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at) VALUES
(1, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 5, 'This product has completely transformed how I manage my tasks. Highly recommended!', NOW(), NOW()),
(2, 'cd143836-afd5-4096-a0a4-6418dee7630c', 4, 'Great design tool with excellent features. The interface could be more intuitive though.', NOW(), NOW()),
(3, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', 5, 'Perfect for developers who want a simple version control solution. Love it!', NOW(), NOW()),
(4, 'f9f07e2b-fde6-4fae-ab59-163735d79647', 4, 'Helps me stay focused during work hours. The blocking feature is very effective.', NOW(), NOW()),
(5, 'bd6f9911-da12-459c-994f-4ea2a646c4bf', 5, 'Seamless syncing across all my devices. This is exactly what I needed!', NOW(), NOW());

-- 12. GPT Ideas Likes (depends on gpt_idea_id and profile_id)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
(1, 'bd6f9911-da12-459c-994f-4ea2a646c4bf'),
(1, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c'),
(2, 'cd143836-afd5-4096-a0a4-6418dee7630c'),
(3, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d'),
(4, 'f9f07e2b-fde6-4fae-ab59-163735d79647');

-- 13. Post Upvotes (depends on post_id and profile_id)
INSERT INTO post_upvotes (post_id, profile_id) VALUES
(1, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c'),
(1, 'cd143836-afd5-4096-a0a4-6418dee7630c'),
(2, 'bd6f9911-da12-459c-994f-4ea2a646c4bf'),
(3, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d'),
(4, 'f9f07e2b-fde6-4fae-ab59-163735d79647');

-- 14. Post Replies (depends on post_id, profile_id, and parent_id nullable)
INSERT INTO post_replies (post_id, parent_id, profile_id, reply, created_at, updated_at) VALUES
(1, NULL, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 'Great insights! I completely agree with your points about the future of web development.', NOW(), NOW()),
(1, 1, 'cd143836-afd5-4096-a0a4-6418dee7630c', 'Thanks for the detailed response. I would love to hear more about your experience.', NOW(), NOW()),
(2, NULL, 'bd6f9911-da12-459c-994f-4ea2a646c4bf', 'These design principles are spot on. Especially the part about user-centered design.', NOW(), NOW()),
(3, NULL, 'dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', 'Building a startup is indeed challenging. Your advice is very helpful for aspiring entrepreneurs.', NOW(), NOW()),
(4, NULL, 'f9f07e2b-fde6-4fae-ab59-163735d79647', 'Your journey is inspiring! What was the biggest challenge you faced?', NOW(), NOW());

-- 17. Notifications (depends on source_id, target_id, product_id nullable, post_id nullable)
INSERT INTO notifications (source_id, product_id, post_id, target_id, type, created_at) VALUES
('bd6f9911-da12-459c-994f-4ea2a646c4bf', NULL, NULL, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 'follow', NOW()),
('eb5fb274-b4df-4292-a2dd-f7a72563e15c', 1, NULL, 'bd6f9911-da12-459c-994f-4ea2a646c4bf', 'review', NOW()),
('cd143836-afd5-4096-a0a4-6418dee7630c', NULL, 1, 'bd6f9911-da12-459c-994f-4ea2a646c4bf', 'reply', NOW()),
('dca4a2a8-f905-4fb0-98fb-6afccf6b7c7d', NULL, 2, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 'mention', NOW()),
('f9f07e2b-fde6-4fae-ab59-163735d79647', 2, NULL, 'eb5fb274-b4df-4292-a2dd-f7a72563e15c', 'review', NOW());

