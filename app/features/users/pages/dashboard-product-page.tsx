import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/common/components/ui/chart";

export const meta = () => {
  return [
    { title: "Dashboard Product | Wemake" },
    { name: "description", content: "Your product dashboard" },
  ];
};

const chartData = [
  { month: "January", views: 186, visitors: 100 },
  { month: "February", views: 305, visitors: 53 },
  { month: "March", views: 237, visitors: 237 },
  { month: "April", views: 73, visitors: 73 },
  { month: "May", views: 209, visitors: 209 },
  { month: "June", views: 214, visitors: 214 },
];
const chartConfig = {
  views: {
    label: "views",
    color: "var(--chart-1)",
  },
  visitors: {
    label: "visitors",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const DashboardProductPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <Area
                  dataKey="views"
                  type="natural"
                  stroke="var(--color-views)"
                  strokeWidth={2}
                  dot={false}
                  fill="var(--color-views)"
                />
                <Area
                  dataKey="visitors"
                  type="natural"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  dot={false}
                  fill="var(--color-visitors)"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  wrapperStyle={{}}
                  content={<ChartTooltipContent />}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardProductPage;
