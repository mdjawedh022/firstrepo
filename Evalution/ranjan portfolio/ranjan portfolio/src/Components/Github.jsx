import React from "react";
import GitHubCalendar from 'react-github-calendar';
import './Github.css'

const Github = () => {
  return (
    <div className="github">
      <div className="github1">
        <p>Github</p>
      </div>
      <div className="github2">
        <div>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            alt=""
          />
        </div>
        <div style={{margin: "auto", marginTop: "20px"}}>
          <GitHubCalendar username="ranjankumar9" />
        </div>
      </div>
    </div>
  );
};

export default Github;

// https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false
// https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact
// https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false
//
