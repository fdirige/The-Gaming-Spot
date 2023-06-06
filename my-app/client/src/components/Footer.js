import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

export const Footer = () => {
  return (
    
      <Segment
        inverted
        vertical
        style={{ padding: "1em 0em", marginTop: "2em" }}
      >
        <Container textAlign="center">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </Container>
      </Segment>

  );
};
