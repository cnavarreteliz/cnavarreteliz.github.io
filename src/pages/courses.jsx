import React from "react";
import Page from "../components/Page";
import Course from "../components/Course";

export default function Courses(props) {
  return <Page>
    <Course 
      title="Logistics / Supply Chain Management (Spring 2023)"
      subtitle="For Undergraduate students of Industrial Engineering" 
      notes={[
        {title: "List of Exercises 1", link: "https://docs.google.com/document/d/1RKuDUfosch9SkhJp5l9IIkzGi8pQLdbHSuToZtPFOak/edit?usp=sharing"}
      ]}
    />
  </Page>;
}