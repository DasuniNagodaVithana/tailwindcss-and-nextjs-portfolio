import React from "react";

const ProjectInfo = () => {
  return (
    <section id="project-info" className="">
      <div className="p5" style={{padding:'2rem'}}>
        <h2 className="text-2xl font-bold mb-4">Project Information</h2>
        <div className="mx-4 md:mx-10">
          <p className="mb-4">
            "Explore Sri Lanka" is the final project presented in the 2223 Mobile Application Development subject unit.
          </p>
          <p className="mb-4">
            The tourism industry was the basis for this project. The tourism industry is one of the sectors that greatly affects the economy of Sri Lanka. We have created this mobile application to help tourists who come to visit Sri Lanka.
          </p>
          <p className="mb-4">
            Before starting the project, our team conducted a case study and identified the requirements. After that, a project plan was built to deliver a product that meets those requirements. According to the built plan, we developed the mobile application.
          </p>
          <p className="mb-4">
            Through the mobile app developed in this way, tourists will be able to register in the app, get information about special places in Sri Lanka, view the map of Sri Lanka, get details about hotels, and also get weather information.
          </p>
          <p className="mb-4">
            In conclusion, by developing a mobile application like this, tourists coming to Sri Lanka will be helped to make their trip a success. Also, through such a project, we will be able to further develop the tourism industry.
          </p>
          <p className="mb-4">
            In addition to this, it must be emphasized here that all of our team members have added a lot to their knowledge through this project.
          </p>
          <p className="mb-4">
            We used React Native and Typescript, along with Firebase Authentication, to build the app.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
