import React from "react";
//importing css file as a dependency
import "../../styles/MyProjects.css";
import comclo from "../../assets/comclo.png";
import bitcoin from "../../assets/bitcoin_screenshot.png";
import weatherapp from "../../assets/weatherapp2.png";

export default function MyProjects() {
  return (
    <div>
      <h1>My Projects</h1>
      <img
        src={comclo}
        className="project-img"
        alt="community closet project"
      />
      <img src={bitcoin} className="project-img" alt="bitcoin project" />
      <img src={weatherapp} className="project-img" alt="weatherapp project" />
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
    </div>
  );
}
