import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Video() {
  return (
    <Tabs defaultValue="hosting" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="hosting">Hosting</TabsTrigger>
        <TabsTrigger value="domain">Domain</TabsTrigger>
        <TabsTrigger value="webDevelopment">web Development</TabsTrigger>
      </TabsList>
      <TabsContent value="hosting">
        <h1>Hi</h1>
      </TabsContent>
      <TabsContent value="domain">
        <h1>Hi</h1>
      </TabsContent>
      <TabsContent value="webDevelopment">
        <h1>Hi</h1>
      </TabsContent>
    </Tabs>
  );
}

export default Video;
