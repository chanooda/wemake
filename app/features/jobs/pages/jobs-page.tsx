import { PageTitle } from "~/common/components/page-title";
import { LINK, metadata } from "~/common/config";
import { JobCard } from "../ui/job-card";

export const meta = () => {
  return metadata[LINK.JOBS];
};

const JobsPage = () => {
  return (
    <div>
      <PageTitle title="Jobs" subTitle="Find jobs in our community" />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 grid grid-cols-3 gap-4">
          {Array.from({ length: 30 }, (_, i) => (
            <JobCard
              key={i}
              id={String(i)}
              company="Meta"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="San Francisco, CA"
              title="Software Engineer"
              postedAt="12 hours ago"
              type="Full-time"
              positionLocation="Remote"
              salaryRange="$100,000 ~ $120,000"
            />
          ))}
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default JobsPage;
