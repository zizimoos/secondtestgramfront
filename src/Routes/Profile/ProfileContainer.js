import React from "react";
import { gql } from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      email
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    const [logOut] = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
  }
);
