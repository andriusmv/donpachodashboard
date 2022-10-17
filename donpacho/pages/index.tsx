import {
  Card,
  Title,
  Text,
  ColGrid,
  Col,
  Block,
  AreaChart
} from '@tremor/react';

const chartdata = [
  {
    date: "Jan 22",
    Ventas2021: 2890,
    "Ventas 2022": 2338,
  },
  {
    date: "Feb 22",
    Ventas2021: 2756,
    "Ventas 2022": 2103,
  },
  {
    date: "Mar 22",
    Ventas2021: 3322,
    "Ventas 2022": 2194,
  },
  {
    date: "Apr 22",
    Ventas2021: 3470,
    "Ventas 2022": 2108,
  },
  {
    date: "May 22",
    Ventas2021: 3475,
    "Ventas 2022": 1812,
  },
  {
    date: "Jun 22",
    Ventas2021: 3129,
    "Ventas 2022": 1726,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function Example() {
  return (
      <main>
        <Card>
          <Title>Dashboard Café Don Pacho</Title>
          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

          <ColGrid numColsLg={ 6 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
              <Col numColSpanLg={ 4 }>
                  <Card hFull={ true }>
                  <Title>Ventas Café Don Pacho 2021-2022</Title>
    <AreaChart
      data={chartdata}
      categories={["Ventas2021", "Ventas 2022"]}
      dataKey="date"
      height="h-72"
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      marginTop="mt-4"
    />
                  </Card>
              </Col>

              { /* KPI sidebar */ }
              <Col numColSpanLg={ 2 }>
                  <Block spaceY="space-y-6">
                      <Card>
                      <AreaChart
      data={chartdata}
      categories={["Ventas2021", "Ventas 2022"]}
      dataKey="date"
      height="h-72"
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      marginTop="mt-4"
    />                      </Card>
                      <Card>
                          <div className="h-24" />
                      </Card>
                      <Card>
                          <div className="h-24" />
                      </Card>
                  </Block>
              </Col>
          </ColGrid>
          </Card>
      </main>
  );
}