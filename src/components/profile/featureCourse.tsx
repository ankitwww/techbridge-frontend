const posts = [
  {
    id: 1,
    title: "Learn advanced react",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/learnReact.webp",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Frontend", href: "#" },
  },
  // More posts...
];

const commenters = [
  {
    id: 12,
    name: "Emma Dorsey",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Tom Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 16,
    name: "Benjamin Russel",
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 23,
    name: "Hector Gibbons",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const FeatureCourse = () => {
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
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.category.title}
          </a>
          <span>Batch Starting from October 1st</span>
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
        <div>
          <div className="flex -space-x-0.5 my-4">
            <dt className="sr-only">Commenters</dt>
            {commenters.map((commenter) => (
              <dd key={commenter.id}>
                <img
                  alt={commenter.name}
                  src={commenter.imageUrl}
                  className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                />
              </dd>
            ))}{" "}
            <span className="pl-4 text-sm">53 enrolled already</span>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={"#"}
            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Enroll now
          </a>
        </div>
      </div>
    </article>
  ));
};
