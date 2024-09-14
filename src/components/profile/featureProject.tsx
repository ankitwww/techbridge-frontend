const posts = [
  {
    id: 1,
    title: "Cool Go Library",
    href: "#",
    description:
      "Open source project. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/projectimg.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Go", href: "#" },
    tags: [
      { id: 1, name: "Go" },
      { id: 2, name: "Open Source" },
    ],
  },
  // More posts...
];

export const FeatureProject = () => {
  return posts.map((post) => (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative w-full">
        <img
          alt=""
          src={post.imageUrl}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          {post.tags.map((tag) => (
            <a className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {tag.name}
            </a>
          ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
        <div className="mt-6">
          <a
            href={"#"}
            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </article>
  ));
};
