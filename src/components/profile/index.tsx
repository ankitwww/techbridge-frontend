import { Experience } from "./Exp";
import { MainProfileCard } from "./MainProfileCard";
import { Offerings } from "./OfferingsGrid";
import Sessions from "./Sessions";
export const Profile = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 id="section-1-title" className="sr-only">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <MainProfileCard />
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 id="section-2-title" className="sr-only">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <Experience />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative my-4">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      {/* <Newsletter /> */}
      <Sessions />
      <Offerings />
    </div>
  );
};
