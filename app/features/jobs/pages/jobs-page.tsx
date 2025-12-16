import { useSearchParams } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Button } from "~/common/components/ui/button";
import { LINK, metadata } from "~/common/config";
import { cn } from "~/common/lib/utils";
import {
  JOBS_FILTER_LOCATION,
  JOBS_FILTER_TYPE,
  JOBS_SALARY_RANGE,
} from "../config/jobs-filter";
import { JobCard } from "../ui/job-card";

export const meta = () => {
  return metadata[LINK.JOBS];
};

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickFilter = (key: string, value: string) => {
    setSearchParams(
      (searchParams) => {
        searchParams.set(key, value);
        return searchParams;
      },
      {
        preventScrollReset: true,
      },
    );
  };

  return (
    <div>
      <PageTitle title="Jobs" subTitle="Find jobs in our community" />
      <div className="grid grid-cols-6 items-start gap-4">
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
        <div className="sticky top-20 col-span-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-medium">Type</h4>
                <div className="flex flex-wrap gap-2">
                  {JOBS_FILTER_TYPE.map((filter) => (
                    <Button
                      variant="outline"
                      key={filter.value}
                      onClick={() => handleClickFilter("type", filter.value)}
                      className={cn(
                        searchParams.get("type") === filter.value &&
                          "bg-accent",
                      )}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-medium">Location</h4>
                <div className="flex flex-wrap gap-2">
                  {JOBS_FILTER_LOCATION.map((filter) => (
                    <Button
                      variant="outline"
                      key={filter.value}
                      onClick={() =>
                        handleClickFilter("location", filter.value)
                      }
                      className={cn(
                        searchParams.get("location") === filter.value &&
                          "bg-accent",
                      )}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-medium">Salary</h4>
                <div className="flex flex-wrap gap-2">
                  {JOBS_SALARY_RANGE.map((filter) => (
                    <Button
                      variant="outline"
                      key={filter.value}
                      onClick={() => handleClickFilter("salary", filter.value)}
                      className={cn(
                        searchParams.get("salary") === filter.value &&
                          "bg-accent",
                      )}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
