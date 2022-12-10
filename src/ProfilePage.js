import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.profileContainerRef = React.createRef();
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

  componentDidMount() {
    const imageElement = document.querySelector('#CodeHappening');
    imageElement.addEventListener('click', () => {
      this.profileContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Use property initializer syntax to define the handleClick method
  handleClick = () => {
    // Navigate to the Google homepage when the button is clicked
    window.location.href = 'https://github.com/ArjavaTripathi';
  }

  render() {
    return (
      <div ref={this.profileContainerRef} className="profile-container">
        <img
          id="CodeHappening"
          src={require('./ESCR.jpg')}
          alt="Code in the making!"
        />
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
      </div>
    );
  }
}

export default ProfilePage;