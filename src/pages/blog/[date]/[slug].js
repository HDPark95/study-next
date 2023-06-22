import PostHead from '../../../components/PostHead';
import posts from '../../../data/posts';
import Image from "next/image";

export function getServerSideProps({ params }) {
  const { slug, date } = params;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
        date
    },
  };
}

function Post({ post, date }) {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
        <p>{date}</p>
        <Image src='/download.jpg' width={500} height={500}
               blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIzMDY0IiB2aWV3Qm94PSIwIDAgMjA0OCAzMDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPgo=" // 블러 효과를 위한 플레이스홀더
               placeholder="blur" // 블러 효과 적용
               loading="lazy" // 지연 로딩 적용
        ></Image>
    </div>
  );
}

export default Post;
