import React, { useEffect, useState } from "react";
import { GithubListBody } from "./githubListBody";
import { GithubListTopBar } from "./githubListTopBar";

import "./githubListing.css";

export const GithubListing = () => {
  const [repoList, setRepoList] = useState([])

  // fetch data from server on component mount
  useEffect(() => {
    fetchGithubList();
  }, []);

  const fetchGithubList = () => {
    fetch(`https://api.github.com/users/andrew/repos`)
      .then(res => res.json())
      .then(result => {
        setRepoList(result);
      });
  };

  return (
    <div className="githubListing-container">
      {repoList.map((repo, index) => {
        return (
          <>
            {index === 0 && (
              <>
                <GithubListTopBar repo={repo} />
                <h5 className="text-center">
                  All repositories of {repo.owner.login}
                </h5>
              </>
            )}
              <GithubListBody repo={repo} />
          </>
        );
      })}
    </div>
  );
};
