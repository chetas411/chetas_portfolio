import React, { useEffect } from "react";
import "./Timeline.css";

const Timeline = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const timeline = document.querySelector(".timeline");
    const line = document.querySelector(".line");
    console.log(sections);
    console.log(timeline);
    console.log(line);
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      }); // console.log(up, down);

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div id="projects" className="container">
      <div className="top">
        <h1>Projects</h1>
        <p>These are some of my projects</p>
      </div>
      <div className="timeline">
        <div className="line"></div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2>PlayListify</h2>
            <p>
              PlayListify is web app using which spotify users can create playlists of the top tracks and top artitst they listen on Spotify. Uers can also view their recent history of the songs they played.
            </p>
            <a
              href="https://github.com/chetas411/playListify-Frontend"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://playlistifyweb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Go Live
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2>Chat Application</h2>
            <p>
              A chat application which allows real time messaging. Users can
              join to different rooms by entering their username and room name
              and can chat efficiently.
            </p>
            <a
              href="https://github.com/chetas411/Chat-Room"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://chatterroom.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Go Live
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2>Cooking Classes</h2>
            <p>
              An online website where users can explore different cooking coures
              and can sign up and buy the courses of their choice, can subscribe
              to newsletter etc.
            </p>
            <a
              href="https://github.com/chetas411/Cooking-Classes"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://serene-sea-62139.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Go Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
