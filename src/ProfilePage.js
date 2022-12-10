import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }

  // Use property initializer syntax to define the toggleHover method
  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  }

  // Use property initializer syntax to define the handleClick method
  handleClick = () => {
    // Navigate to the Google homepage when the button is clicked
    window.location.href = 'https://github.com/ArjavaTripathi';
  }

  render() {
    return (
      <div className="profile-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="https://github.com/ArjavaTripathi">Github</a>
        </nav>
        <h1 className="profile-header">Arjava Tripathi</h1>
        <button
          className="my-button"
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={this.handleClick}
        >
          Projects
        </button>

      </div>
    );
  }
}

export default ProfilePage;