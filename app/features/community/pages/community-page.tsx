import { ChevronDownIcon } from "lucide-react";
import { Form, Link, useSearchParams } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Pagination } from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { Input } from "~/common/components/ui/input";
import { LINK, metadata } from "~/common/config";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "~/entities/community/config/community-filter";
import { communitySchema } from "~/entities/community/model/community.schema";
import { getPosts, getTopics } from "../../../entities/community/api/queries";
import { DiscussionCard } from "../ui/discussion-card";
import type { Route } from "./+types/community-page";

export const meta = () => {
  return metadata[LINK.COMMUNITIES];
};

export const loader = async ({request}:Route.LoaderArgs) => {
  const url = new URL(request.url);
  const {success, data} = communitySchema.safeParse(Object.fromEntries(url.searchParams));

  if(!success) {
    throw new Error("Invalid parameters");
  }

  const [topics, posts] = await Promise.all([getTopics(), getPosts(data)]);
  return { topics, posts };
};

const CommunityPage = ({
  loaderData: { posts, topics },
}: Route.ComponentProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sorting = searchParams.get("sort") || SORT_OPTIONS[0].label;
  const period = PERIOD_OPTIONS.find((option) => option.value === searchParams.get("period"))?.label || PERIOD_OPTIONS[0].label;

  const {data, meta} = posts;

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
                                searchParams.set("sort", option.value);
                                return searchParams;
                              });
                            }
                          }}
                          className="capitalize"
                          key={option.value}
                        >
                          <span>{option.label}</span>
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
                                searchParams.set("period", option.value);
                                return searchParams;
                              });
                            }
                          }}
                          className="capitalize"
                          key={option.value}
                        >
                          <span>{option.label}</span>
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button>Create Discussion</Button>
            </div>
            <Form className="mt-4 w-2/3">
              <Input name="query" placeholder="Search for a discussion" />
            </Form>
          </div>
          <div className="flex flex-col gap-4">
            {data.map((post) => {
              return (
                <DiscussionCard
                  author={post.author_name}
                  id={String(post.post_id)}
                  title={post.title}
                  authorAvatarUrl={post.author_avatar ?? ""}
                  category={post.topic_name}
                  postedAt={post.created_at}
                  key={post.post_id}
                  votes={post.upvotes}
                  expanded
                />
              );
            })}
          </div>
          <Pagination totalPage={meta.pages} />
        </div>
        <aside className="col-span-2">
          <h3 className="text-muted-foreground text-lg font-semibold">
            TOPICS
          </h3>
          <div className="align-start mt-4 flex flex-col gap-4">
            {topics.map((topic) => {
              return (
                <Link
                  className="text-primary font-semibold hover:underline"
                  to={LINK.COMMUNITY_TOPIC(String(topic.slug))}
                  key={topic.slug}
                >
                  {topic.name}
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
