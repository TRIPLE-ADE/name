// import { useGetPipelines } from "@/api/pipeline";
import { Header, Layout, MapComponent } from "@/components";

function Dashboard() {
  // const { data, isLoading, isError } = useGetPipelines();
  return (
    <Layout>
      <Header>Dashboard</Header>
      {/* {isLoading && <div>Loading</div>}
      {isError && <div>Error fetching data</div>}
      {!isLoading && !isError && (!data || data.length < 1) && (
        <div>No Blog Found</div>
      )} */}
      {/* Render Blog if data is available */}
      {/* {!isLoading && !isError && data && data.length > 0 && <MapComponent />} */}
      <MapComponent />
    </Layout>
  );
}

export default Dashboard;
