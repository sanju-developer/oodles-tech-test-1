import React from "react";

export const GithubListTopBar = ({ repo }) => {
  return (
    <div className="text-center border2px repo-header">
      <span className="user-avatar">
        <img src={repo.owner.avatar_url} alt="avatar" />
      </span>
      <span>{repo.owner.login}</span>
    </div>
  );
};
