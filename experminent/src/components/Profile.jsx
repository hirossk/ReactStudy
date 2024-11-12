import React from 'react';
import './Profile.css';

export const Profile = () => {
  // ダミーデータ
  const profileData = {
    id: 'user123',
    password: '******', // 表示用に隠す
    organization: 'Yoshida Tech Co.',
    address: '札幌市東区北１５条東６丁目'
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-item">
        <label className="profile-label">ID:</label>
        <span className="profile-value">{profileData.id}</span>
      </div>
      <div className="profile-item">
        <label className="profile-label">Password:</label>
        <span className="profile-value">{profileData.password}</span>
      </div>
      <div className="profile-item">
        <label className="profile-label">Organization:</label>
        <span className="profile-value">{profileData.organization}</span>
      </div>
      <div className="profile-item">
        <label className="profile-label">Address:</label>
        <span className="profile-value">{profileData.address}</span>
      </div>
      <button className="profile-button">Edit Profile</button>
    </div>
  );
}


