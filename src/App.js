import React, { useState } from 'react';
import './App.css';
import Design from './designTask/task.js'; // Assuming Design is your array of tasks
import DesignTask from './DesignTask.js';
import Report from './Report.js';
import develop from './designTask/developTask/develop.js';
import projectReport from './designTask/developTask/projectreport/projrctReport.js';

const App = () => {
  const [uiux, setUiUx] = useState(Design);
  const [backend, setBackend] = useState(develop);
  const [report, setReport] = useState(projectReport);

  return (
    <div className='tasktracker'>
      {/* UI/UX Design Tasks */}
      <div className='task'>
        <center><h2>UI/UX Design Task</h2></center>
        {uiux && uiux.length > 0 ? (
          uiux.map((item, index) => (
            <DesignTask item={item} key={index}></DesignTask>
          ))
        ) : (
         <center> <p>No UI/UX design tasks available.</p></center>
        )}
      </div>

      {/* Backend Development Tasks */}
      <div className='task'>
        <center><h2>Backend Development Task</h2></center>
        {backend && backend.length > 0 ? (
          backend.map((item, index) => (
            <DesignTask item={item} key={index}></DesignTask>
          ))
        ) : (
         <center><p>No backend development tasks available.</p></center> 
        )}
      </div>

      {/* Project Report Tasks */}
      <div className='task'>
        <center><h2>Report Task</h2></center>
        {report && report.length > 0 ? (
          report.map((item, index) => (
            <Report item={item} key={index}></Report>
          ))
        ) : (
          <center><p>No report tasks available.</p></center>
        )}
      </div>
    </div>
  );
};

export default App;
