import { ChevronDownIcon } from "lucide-react";
import { Form, Link, useSearchParams } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { Input } from "~/common/components/ui/input";
import { LINK, metadata } from "~/common/config";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../config/community-filter";
import { DiscussionCard } from "../ui/discussion-card";

export const meta = () => {
  return metadata[LINK.COMMUNITIES];
};

const CommunityPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sorting = searchParams.get("sort") || SORT_OPTIONS[0];
  const period = searchParams.get("period") || PERIOD_OPTIONS[0];

  return (
    <div>
      <PageTitle title="Community" subTitle="Community" />
      <div className="grid grid-cols-6 gap-48">
        <div className="col-span-4 flex flex-col gap-8">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2">
                    <span className="capitalize">{sorting}</span>{" "}
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => {
                      return (
                        <DropdownMenuCheckboxItem
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSearchParams((searchParams) => {
                                searchParams.set("sort", option);
                                return searchParams;
                              });
                            }
                          }}
                          className="capitalize"
                          key={option}
                        >
                          <span>{option}</span>
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2">
                    <span className="capitalize">{period}</span>{" "}
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {PERIOD_OPTIONS.map((option) => {
                      return (
                        <DropdownMenuCheckboxItem
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSearchParams((searchParams) => {
                                searchParams.set("period", option);
                                return searchParams;
                              });
                            }
                          }}
                          className="capitalize"
                          key={option}
                        >
                          <span>{option}</span>
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button>Create Discussion</Button>
            </div>
            <Form className="mt-4 w-2/3">
              <Input placeholder="Search for a discussion" />
            </Form>
          </div>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <DiscussionCard
                  author="John Doe"
                  id={String(index)}
                  title="What is very productivity tool"
                  authorAvatarUrl="https://github.com/apple.png"
                  category="productivity"
                  postedAt="12 hours ago"
                  key={index}
                  expanded
                />
              );
            })}
          </div>
        </div>
        <aside className="col-span-2">
          <h3 className="text-muted-foreground text-lg font-semibold">
            TOPICS
          </h3>
          <div className="align-start mt-4 flex flex-col gap-4">
            {[
              "Development",
              "Productivity",
              "Technology",
              "Science",
              "Art",
              "Music",
              "Other",
            ].map((topic) => {
              return (
                <Link
                  className="text-primary font-semibold hover:underline"
                  to={LINK.COMMUNITY_TOPIC(topic)}
                  key={topic}
                >
                  {topic}
                </Link>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CommunityPage;
