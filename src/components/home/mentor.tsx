const people = [
  {
    name: "Michael Foster",
    role: "Building Open Source Go library",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Emily Wilson",
    role: "Teaching React to beginners",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Johnson",
    role: "Helping with Python projects",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Kate Sanders",
    role: "Mentoring new designers",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const Mentors = () => {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="flex text-center justify-center text-2xl font-bold tracking-tight text-gray-900">
          Top YVR Mentors
        </h3>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <a href="/profile/ankit">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="mx-auto h-24 w-24 rounded-full"
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="hidden text-md font-bold text-indigo-600 hover:text-indigo-500 md:block"
          >
            View top Mentors
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
