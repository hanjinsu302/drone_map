// GroupItem.js
import React from 'react';

const GroupItem = ({ group }) => {
  return (
    <div>
      <h2>{group.gname}</h2>
      <p>{group.gcode}</p>
      <p>{group.dscount}</p>
    </div>
  );
};

export default GroupItem;
