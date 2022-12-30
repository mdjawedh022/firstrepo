import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";

function Graph() {
  useEffect(() => {
    GitHubCalendar(".calendar", "mdjawedh022");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "mdjawedh022", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "mdjawedh022",{ responsive: true }, {
      proxy(mdjawedh022) {
        return fetch(`https://your-proxy.com/github?user=${mdjawedh022}`);
      },
    }).then((r) => r.text());
  }, []);
  return (
    <div style={{width:"80%",margin:"auto"}}>
        <h1 style={{textAlign:"center",fontSize:"45px",marginBottom:"15px"}}>My Github Calender</h1>
        <div class="calendar">
      {/* <!-- Loading stuff --> */}
      {/* Loading the data just for you. */}
    </div>
    </div>
  );
};

export default Graph
