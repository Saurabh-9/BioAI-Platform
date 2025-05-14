
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, LineChart, PieChart, ScatterChart, AreaChart, Activity, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
         LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState("protein-data");
  
  // Sample data for charts
  const proteinData = [
    { name: 'Domain A', stability: 65, conservation: 78, interactions: 45 },
    { name: 'Domain B', stability: 75, conservation: 45, interactions: 63 },
    { name: 'Domain C', stability: 55, conservation: 92, interactions: 38 },
    { name: 'Domain D', stability: 82, conservation: 63, interactions: 72 },
    { name: 'Domain E', stability: 43, conservation: 56, interactions: 59 },
  ];
  
  const researchData = [
    { year: '2019', papers: 125, citations: 650 },
    { year: '2020', papers: 156, citations: 820 },
    { year: '2021', papers: 187, citations: 940 },
    { year: '2022', papers: 210, citations: 1120 },
    { year: '2023', papers: 245, citations: 1350 },
    { year: '2024', papers: 190, citations: 980 },
  ];
  
  const mutationData = [
    { name: 'Beneficial', value: 25 },
    { name: 'Neutral', value: 40 },
    { name: 'Deleterious', value: 35 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  return (
    <MainLayout>
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Data Visualization</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Translate complex biological data into actionable insights with interactive visualizations
          </p>
          
          <Tabs defaultValue="protein-data" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="protein-data" className="text-sm md:text-base">Protein Structure Data</TabsTrigger>
              <TabsTrigger value="research-trends" className="text-sm md:text-base">Research Trends</TabsTrigger>
              <TabsTrigger value="mutation-impact" className="text-sm md:text-base">Mutation Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="protein-data" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Protein Domain Analysis</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={proteinData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="stability" fill="#8884d8" />
                        <Bar dataKey="conservation" fill="#82ca9d" />
                        <Bar dataKey="interactions" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    <p>This visualization shows comparative analysis of different protein domains, highlighting stability scores, conservation rates, and molecular interactions.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="research-trends" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Research Publication Trends</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <LineChart className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={researchData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="papers" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="citations" stroke="#82ca9d" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    <p>Track publication trends and citation impact in your field of research, helping you identify emerging areas and high-impact studies.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mutation-impact" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Mutation Impact Distribution</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <PieChart className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={mutationData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {mutationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    <p>Visualize the distribution of mutation impacts on protein function, stability, and phenotype to better understand genetic variations.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Interactive Charts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create customizable, interactive visualizations for protein structures, research trends, and mutation analyses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ScatterChart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Correlation Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identify relationships between different biological parameters through advanced correlation visualization tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Time-Series Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track changes in protein properties, research trends, and experimental data over time with dynamic visualizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataVisualization;
