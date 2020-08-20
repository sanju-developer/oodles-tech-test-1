import React from "react";

export const GithubListBody = ({ repo }) => {
  return (
    <div className="repo-list">
      <div className="repo-left border2px">
        <div className="repo-inner-left">
          <div className="repo-info border2px">{repo.name}</div>
          <div className="repo-info border2px">{repo.url}</div>
          <div className="repo-info border2px">{repo.languages_url}</div>
        </div>
        <div className="repo-inner-right">
          <img
            className="delete-icon"
            src="https://cdn.iconscout.com/icon/free/png-512/delete-737-475058.png"
            alt="delete-icon"
          />
        </div>
      </div>
      <div className="repo-right border2px">
        <div className="repo-inner-left">
          <div className="repo-info border2px">{repo.name}</div>
          <div className="repo-info border2px">{repo.url}</div>
          <div className="repo-info border2px">{repo.languages_url}</div>
        </div>
        <div className="repo-inner-right">
          <img
            className="delete-icon"
            src="https://cdn.iconscout.com/icon/free/png-512/delete-737-475058.png"
            alt="delete-icon"
          />
        </div>
      </div>
    </div>
  );
};
