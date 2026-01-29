CREATE OR REPLACE VIEW product_view AS
SELECT
    product_id,
    name,
    tagline,
    description,
    how_it_works,
    icon,
    url,
    status->>'views' as views,
    status->>'reviews' as reviews,
    status->>'upvotes' as upvotes,
    created_at,
    updated_at,
    AVG(product_reviews.rating) as rating,
FROM public.products
LEFT JOIN public.reviews AS product_reviews USING (product_id)
GROUP BY product_id;
