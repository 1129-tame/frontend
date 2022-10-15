import { gql } from "@apollo/client";

export default gql`
  query users {
    books {
      id
      title
    }
  }
`;