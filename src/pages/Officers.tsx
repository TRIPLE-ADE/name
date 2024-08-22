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
    username: "emeka_obi",
    email: "emeka.obi@example.com",
    first_name: "Emeka",
    last_name: "Obi",
    profile: {
      role: "National",
      location: "Lagos",
      zone: "Zone A",
      state: "Lagos",
      area: "Area 1",
      unit: "Unit 1",
    },
  },
  {
    id: "2",
    username: "bisi_ade",
    email: "bisi.ade@example.com",
    first_name: "Bisi",
    last_name: "Ade",
    profile: {
      role: "Regional",
      location: "Ibadan",
      zone: "Zone B",
      state: "Oyo",
      area: "Area 2",
      unit: "Unit 2",
    },
  },
  {
    id: "3",
    username: "uche_nwosu",
    email: "uche.nwosu@example.com",
    first_name: "Uche",
    last_name: "Nwosu",
    profile: {
      role: "State",
      location: "Enugu",
      zone: "Zone C",
      state: "Enugu",
      area: "Area 3",
      unit: "Unit 3",
    },
  },
  {
    id: "4",
    username: "amaka_okafor",
    email: "amaka.okafor@example.com",
    first_name: "Amaka",
    last_name: "Okafor",
    profile: {
      role: "Area",
      location: "Port Harcourt",
      zone: "Zone D",
      state: "Rivers",
      area: "Area 4",
      unit: "Unit 4",
    },
  },
  {
    id: "5",
    username: "musa_abdullahi",
    email: "musa.abdullahi@example.com",
    first_name: "Musa",
    last_name: "Abdullahi",
    profile: {
      role: "Local",
      location: "Kano",
      zone: "Zone E",
      state: "Kano",
      area: "Area 5",
      unit: "Unit 5",
    },
  },
];

const activeOfficers: Officer[] = [
  {
    id: "1",
    username: "emeka_obi",
    email: "emeka.obi@example.com",
    first_name: "Emeka",
    last_name: "Obi",
    profile: {
      role: "National",
      location: "Lagos",
      zone: "Zone A",
      state: "Lagos",
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
