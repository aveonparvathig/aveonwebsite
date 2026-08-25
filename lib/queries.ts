import { groq } from "next-sanity";

export const productsQuery = groq`
  *[_type == "product" && status == "active"] | order(order asc) {
    title,
    "slug": slug.current,
    tagline,
    description,
    features,
    category,
    order
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    tagline,
    description,
    fullDescription,
    features,
    category,
    order
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(featured desc) [0...6] {
    name,
    role,
    "institution": coalesce(institution, company),
    text,
    rating
  }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    author,
    "publishedAt": publishedAt,
    category
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    content,
    author,
    "publishedAt": publishedAt,
    category
  }
`;

export const customersQuery = groq`
  *[_type == "customer"] | order(order asc) {
    name,
    "logo": logo.asset->url
  }
`;
