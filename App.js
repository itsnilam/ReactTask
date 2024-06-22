import React from 'react';
import './App.css';
import Design from './designTask/task.js'; // Assuming Design is your array of tasks
import DesignTask from './DesignTask.js';
import Report from './Report.js';
import develop from './designTask/developTask/develop.js'
import projectReport from './designTask/developTask/projectreport/projrctReport.js';
const App = () => {
  return (
    <div className='tasktracker'>
      <div className='task'>
     <center> <h2>Design Task</h2></center>
        {/* Mapping over the Design array to render tasks */}
        {Design.map((item, index) => (
          <>
         
          <DesignTask item={item} key={item}></DesignTask> 
          </> 
        ))}
      </div>



       {/*  for develop tasks */}

       <div className='task'> 
       <center><h2>Develop Task</h2></center>
        {/* Mapping over the develop array to render tasks */}
        {develop.map((item, index) => (
          <DesignTask item={item} key={item}></DesignTask> 
        ))}
      </div>




       {/*  for project reports */}
     
       <div className='task'> 
       <center><h2>Report Task</h2></center>
        {/* Mapping over the Project report array to render tasks */}
        {projectReport.map((item, index) => (
          <Report item={item} key={item}></Report> 
        ))}
      </div>
    </div>
  );
};

export default App;
