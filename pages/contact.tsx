import React from "react";
import Layout from "../components/layout";
import { Button, TextField } from "@material-ui/core";

const About: React.FC = () => {
  return (
    <Layout>
      <form name="contact" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <TextField
            type="text"
            name="name"
            required
            id="name"
            label="Name"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            type="email"
            name="email"
            required
            id="email"
            label="Email"
            variant="outlined"
          />
        </p>
        <p>
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
        </p>
        <p>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </p>
      </form>
    </Layout>
  );
};

export default About;
