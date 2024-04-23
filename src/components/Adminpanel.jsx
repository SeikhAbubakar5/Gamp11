import React, { useState } from 'react';
import userData from "../userConfig/user.json";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Map from "./map";

const Adminpanel = () => {
  const [filteredUsers, setFilteredUsers] = useState(userData.users);
  const [selectedUserLocation, setSelectedUserLocation] = useState(null);

  const handleSearch = (searchTerm) => {
    const filtered = userData.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUserClick = (user) => {
    setSelectedUserLocation({ lat: user.latitude, lng: user.longitude });
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div style={{ display: 'flex', marginTop: '20px', position: 'relative' }}>
        <div style={{ flex: '1', overflowY: 'auto', maxHeight: 'calc(100vh - 64px)', paddingRight: '10px' }}>
          {filteredUsers.map(user => (
            <Card key={user.id} sx={{ maxWidth: 345, ml: 5, mt: 1, cursor: 'pointer' }} onClick={() => handleUserClick(user)}>
              <CardHeader
                avatar={
                  <Avatar src={user.photo} aria-label="user-avatar">
                    {user.name.charAt(0)}
                  </Avatar>
                }
                title={user.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {user.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={{ flex: '2', position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
          <Map users={filteredUsers} selectedUserLocation={selectedUserLocation} />
        </div>
      </div>
    </>
  );
};

export default Adminpanel;
