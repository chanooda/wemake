import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '~/common/components/ui/card';
import {
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
 type ChartConfig,
} from '~/common/components/ui/chart';

export const meta = () => {
 return [{ title: 'Dashboard | Wemake' }, { name: 'description', content: 'Your dashboard' }];
};

const chartData = [
 { month: 'January', views: 186 },
 { month: 'February', views: 305 },
 { month: 'March', views: 237 },
 { month: 'April', views: 73 },
 { month: 'May', views: 209 },
 { month: 'June', views: 214 },
];
const chartConfig = {
 views: {
  label: 'views',
  color: 'var(--chart-1)',
 },
} satisfies ChartConfig;

const DashboardPage = () => {
 return (
  <div className="flex w-full flex-col gap-8">
   <h1 className="text-4xl font-bold">Dashboard</h1>
   <div>
    <Card className="w-1/2">
     <CardHeader>
      <CardTitle>Views</CardTitle>
     </CardHeader>
     <CardContent>
      <ChartContainer config={chartConfig}>
       <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
         left: 12,
         right: 12,
        }}
       >
        <CartesianGrid vertical={false} />
        <XAxis
         dataKey="month"
         tickLine={false}
         axisLine={false}
         tickMargin={8}
         tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line
         dataKey="views"
         type="natural"
         stroke="var(--color-views)"
         strokeWidth={2}
         dot={false}
        />
       </LineChart>
      </ChartContainer>
     </CardContent>
    </Card>
   </div>
  </div>
 );
};

export default DashboardPage;
