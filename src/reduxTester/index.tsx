import React from 'react';
import { UserEditor } from './UserEditor';
import { UserDataViewer } from './UserViewer';

export const UserContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <UserDataViewer />
      <UserEditor />
    </div>
  );
};
