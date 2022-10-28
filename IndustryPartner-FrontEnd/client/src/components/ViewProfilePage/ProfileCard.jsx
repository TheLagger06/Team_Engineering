import React from 'react';
// import logo from './img/ProfileImg.png'
import profilePlaceholder from './img/profile-placeholder.jpeg'

const ProfileCard = ({ graduate }) => {
  return (
    <div className="card mb-4">
      <div className='card-header text-center'>
        <img src={profilePlaceholder} alt="avatar"
          className="rounded-circle img-fluid" style={{ width: '200px' }} />
        <h3 className="my-3" style={{ color: '#18164d' }}>{`${graduate.firstName} ${graduate.lastName}`}</h3>

      </div>

      <div className="card-body text-center">
        <p className="text-muted mb-1">{`${graduate.pronouns}`}</p>
        <p className="text-muted mb-4">{`${graduate.headline}`} </p>
        <div className="d-flex justify-content-center mb-2">
          <form action={graduate.socialMedia.linkedIn}>
            <button type="submit" className="btn btn-primary">LinkedIn</button>
          </form>
          <form action={graduate.socialMedia.github}>
            <button type="submit" className="btn btn-outline-primary ms-1">Github</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;