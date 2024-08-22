import { Layout, Header } from "@/components";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Streaming: React.FC = () => {
  return (
    <Layout>
      <Header>Live Stream</Header>
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar for Map and Controls */}
        <aside className="w-1/4 bg-gray-700 p-4 text-white">
          <h2 className="text-xl font-semibold mb-4">Map & Controls</h2>
          {/* Map Component */}
          <div className="map-placeholder bg-gray-800 h-48 mb-4">
            <MapContainer
              center={[9.082, 8.6753]}
              zoom={6}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>

          {/* Controls */}
          <div className="controls">
            <h3 className="text-lg font-semibold mb-2">Controls</h3>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-2 w-full">
              Start Drone
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-2 w-full">
              Stop Drone
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded w-full">
              Toggle Flight Path
            </button>
          </div>
        </aside>

        {/* Video Stream */}
        <div className="flex-1 bg-black p-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            Live Drone Feed
          </h2>
          <div className="bg-gray-900">
            <video
              className="h-full w-full border border-gray-600"
              controls
              autoPlay
            >
              <source src="drone-feed-url-here" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Streaming;
