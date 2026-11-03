type ArticleMetaProps = {
  post: { author: string; publishedAt: string; dateModified: string; readingTime: string };
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default function ArticleMeta({ post }: ArticleMetaProps) {
  const updated = post.dateModified !== post.publishedAt;
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-600">
      <span>By {post.author}</span>
      <span aria-hidden>•</span>
      <span>
        Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </span>
      {updated && (
        <>
          <span aria-hidden>•</span>
          <span>
            Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
          </span>
        </>
      )}
      <span aria-hidden>•</span>
      <span>{post.readingTime}</span>
    </div>
  );
}
