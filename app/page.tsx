import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ar://kemp
      </h1>
      <p className="mb-4 prose">
        Building blockchain ecosystems. Currently focused on the Permaweb as
        Head of Ecosystem @{" "}
        <a href="https://pds.inc/" target="_blank">
          PDS Inc
        </a>
        , decentralising access to Arweaave with{" "}
        <a href="https://ar.io/" target="_blank">
          AR.IO Network
        </a>
        . Supporting builders and founders to solve problems where data
        permanence and provenance matters.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
