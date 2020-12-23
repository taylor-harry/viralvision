import React from "react";
// ^ you need to import React in this file, even though
//we are not using it we are still using JSX
import { Link, Route } from "react-router-dom";

//this is dynamic routing
// {match} exsists as a param inside the Topic object
//
function Topic(props) {
  return <h3>{props.match.params.topicId}</h3>;
}

export default function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>Props vs State</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/*To render a component but pass it props
        <Route path={`${match.path}/:topicId`} render={()=>{
          return <Topic name="Learner"/>
      }} />
      */}
      <Route
        exact
        path={match.path}
        render={() => {
          return <h3>Please select a topic</h3>;
        }}
      ></Route>
    </div>
  );
}
