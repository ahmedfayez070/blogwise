import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch(process.env.API_URL + "/blog", {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
