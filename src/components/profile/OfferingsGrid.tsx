import { FeatureCourse } from "./featureCourse";
import { FeatureProject } from "./featureProject";

export const Offerings = () => {
  return (
    <>
      <h2 className="mt-8 mb-2 text-2xl font-bold text-gray-900">
        Featured Projects
      </h2>
      <div className="grid grid-cols-3 my-4 gap-12">
        <FeatureProject />
        <FeatureProject />
        <FeatureProject />
      </div>
      <div className="relative my-4">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <h2 className="mt-12 mb-2 text-2xl font-bold text-gray-900">
        My Courses
      </h2>
      <div className="grid grid-cols-3 mt-4 gap-12">
        <FeatureCourse />
        <FeatureCourse />
        <FeatureCourse />
      </div>
    </>
  );
};
