import { Header, Layout } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Profile {
  role: string;
  location: string;
  zone: string;
  state: string;
  area: string;
  unit: string;
}

interface Officer {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile: Profile;
}

const allOfficers: Officer[] = [
  {
    id: "1",
    username: "john_doe",
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    profile: {
      role: "National",
      location: "New York",
      zone: "Zone 1",
      state: "NY",
      area: "Area 1",
      unit: "Unit 1",
    },
  },
  {
    id: "2",
    username: "jane_smith",
    email: "jane.smith@example.com",
    first_name: "Jane",
    last_name: "Smith",
    profile: {
      role: "Regional",
      location: "California",
      zone: "Zone 2",
      state: "CA",
      area: "Area 2",
      unit: "Unit 2",
    },
  },
  // Add more dummy officers as needed
];

const activeOfficers: Officer[] = [
  {
    id: "1",
    username: "john_doe",
    email: "john.doe@example.com",
    first_name: "John",
    last_name: "Doe",
    profile: {
      role: "National",
      location: "New York",
      zone: "Zone 1",
      state: "NY",
      area: "Area 1",
      unit: "Unit 1",
    },
  },
  // Add more dummy active officers as needed
];

export default function Officers() {
  const renderOfficersList = (officers: Officer[]) => {
    if (officers.length === 0) {
      return <p>No officers available.</p>;
    }
    return (
      <ul>
        {officers.map((officer) => (
          <li key={officer.id} className="py-2">
            <div>
              <strong>Username:</strong> {officer.username}
            </div>
            <div>
              <strong>Email:</strong> {officer.email}
            </div>
            <div>
              <strong>Name:</strong> {officer.first_name} {officer.last_name}
            </div>
            <div>
              <strong>Role:</strong> {officer.profile.role}
            </div>
            <div>
              <strong>Location:</strong> {officer.profile.location}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <Header>Add Officers</Header>
      <div className="flex flex-col items-center py-12 m-auto min-h-lvh">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-wrap items-center justify-between p-4 shadow-md mb-4">
            <TabsList>
              <TabsTrigger value="all">All Officers</TabsTrigger>
              <TabsTrigger value="active">Active Officers</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all">
            <div className="p-4">{renderOfficersList(allOfficers)}</div>
          </TabsContent>
          <TabsContent value="active">
            <div className="p-4">{renderOfficersList(activeOfficers)}</div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
