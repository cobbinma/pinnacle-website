import React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";

const Services: React.FC = () => {
  return (
    <Layout>
      <Banner image="/images/construction.jpg" title="Services" height={300} />
    </Layout>
  );
};

export default Services;
