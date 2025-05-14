import React from "react";
import { AutoProgressTimeline, ScrollProgressTimeline } from "../components/ProcessFlow";

const ServicePage = () => {
  return (
    <main className="min-h-screen bg-white">
  
      <section>
        <ScrollProgressTimeline />
      </section>
    </main>
  );
};

export default ServicePage;