import { Component } from "react";
import "./Message.css"
import { NavLink } from "react-router-dom";

class Message extends Component {
    constructor(props){
    super(props)
    this.state = {
    showIcon: false,
    showCss: false,
    showSearch: false,
    showLogo: true,
    }
    }

      toggleSearch = () => {
    const newSearch = !this.state.showSearch;

    this.setState({
      showSearch: newSearch,
      showLogo: !this.state.showLogo,
      showIcon: !this.state.showIcon,
      showCss: false,
    });

    if (!this.state.showIcon) {
      setTimeout(() => {
        this.setState({ showCss: true });
      }, 100);
    }
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

render(){
    const { chats=[]} = this.props
return(
<>
    <div className="container">

        <div className="message-content">

        <div className="left-content">

                <NavLink to="/">
                    <div className="message-icon">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzUnojngjDyf4CIZyQFdiplf0sNjGyRosSg&s"
                    alt="Instagram Icon"
                  />
                </div>
                </NavLink>

              <div className="main-pages">

                <NavLink to="/">
                <div className="message">

                  <div className="home-icon">
                    <img
                      src="https://www.unhcr.org/spotlight/wp-content/uploads/sites/55/2021/05/Icon-test-House-white.png"
                      alt="Home Icon"
                    />
                  </div>
                </div>
                </NavLink>

                <div className="message" onClick={this.toggleSearch}>

                  <div className="home-icon">
                    <img
                      src="https://static-00.iconduck.com/assets.00/search-icon-512x497-4nz4jz2p.png"
                      alt="Search Icon"
                    />
                  </div>

                </div>

                <div className="message">

                  <div className="home-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvoh6y6fh1lIGOOTRQ8kqWbtPUXzEiIU3dQ&s"
                      alt="Explore Icon"
                    />
                  </div>

                </div>

                <div className="message">

                  <div className="home-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeQsnB6ZzHzAMPAbjDeCUT1BKTG2IQ7l1wA6Xa4sFa0lBE-dh5l0xdXFKZWvVpA4Yk7Y&usqp=CAU"
                      alt="Reels Icon"
                    />
                  </div>

                </div>

                  <div className="message">
                  <div className="home-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnWCgbxvtNlBHEvun0EYiOpYMxdd4-7LlPX8mvHzPZfyuQDV9piKL9dM_6j3E4rMcNI&usqp=CAU"
                      alt="Message Icon"
                    />
                  </div>
                </div>

                <div className="message">
                  <div className="home-icon">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/025/094/074/small/white-heart-sign-isolated-on-transparent-background-valentines-day-icon-hand-drawn-heart-shape-world-heart-day-concept-love-icon-illustration-free-png.png"
                      alt="Notifications Icon"
                    />
                  </div>
                </div>

                <div className="message">
                  <div className="home-icon">
                    <img
                      src="https://cbx-prod.b-cdn.net/COLOURBOX35058944.jpg?width=480&height=480&quality=70"
                      alt="Create Icon"
                    />
                  </div>
                </div>

                <div className="message">
                  <div className="home-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/11789/11789135.png"
                      alt="Profile Icon"
                    />
                  </div>
                </div>
              </div>

              <div className="more-content">
                <div className="threads-m">
                  <div className="thread-icon">
                    <img
                      src="https://wzimg.fx696.com/guoji/2024-08-26/638602683929999812/ART638602683929999812_105416.jpg-article598"
                      alt="Threads Icon"
                    />
                  </div>
                </div>

                <div className="more-m" onClick={this.toggleMenu}>
                  <div className="more-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAsr92HkIAF-ctFuO2jZRPIcQNeGtGq7XmDwUeKEludkr-FqMK63LlwNzDpc9nMhXg-g&usqp=CAU"
                      alt="More Options Icon"
                    />
                  </div>
                  {this.state.showMenu && (
                    <div className="drop-up">
                      <div className="dropdown-item"> Settings</div>
                      <div className="dropdown-item"> Your Activity</div>
                      <div className="dropdown-item"> Saved</div>
                      <div className="dropdown-item"> Switch Appearance</div>
                    </div>
                  )}
                </div>
              </div>
        </div>

        <div className="h-line2"></div>
        
            <div className="chats-notes">

            <div className="name-mine">
                mkhmdbekv_v 
            </div>

            <div className="notes-content">

                <div className="my-note">

                  <div className="my-img2">
                    <img src="https://i.pinimg.com/736x/71/a7/3b/71a73bd1517c554339365e0fc9ffde07.jpg" alt="" />
                  </div>

                  <div className="your-note">
                    Your-note   
                  </div>

                </div>

                <div className="my-note">

                  <div className="my-img2">
                    <img src="https://i.pinimg.com/736x/71/a7/3b/71a73bd1517c554339365e0fc9ffde07.jpg" alt="" />
                  </div>

                  <div className="your-note">
                    Your-note   
                  </div>

                </div>

                <div className="my-note">

                  <div className="my-img2">
                    <img src="https://i.pinimg.com/736x/71/a7/3b/71a73bd1517c554339365e0fc9ffde07.jpg" alt="" />
                  </div>

                  <div className="your-note">
                    Your-note   
                  </div>

                </div>

            </div>

            <div className="request-message">

            <div className="message-title">
                Messages
            </div>

            <div className="request">
                Requests
            </div>

            </div>

            {chats.map((chat) => (
                <div className="chat">

                    <div className="chat-img">
                        <img src={chat.img} alt="" />
                    </div>

                    <div className="chat-right">
                        <div className="chat-name">
                        {chat.userName}
                    </div>

                    <div className="last-chat">
                        {chat.lastMess}
                    </div>
                    </div>
                </div>
            ))}

            </div>

        <div className="h-line2"></div>

        <div className="items-center">
          <div className="choose-chat">

            <div className="message-start">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnWCgbxvtNlBHEvun0EYiOpYMxdd4-7LlPX8mvHzPZfyuQDV9piKL9dM_6j3E4rMcNI&usqp=CAU" alt="" />
            </div>

            <div className="your-mess">
              Your messages
            </div>

            <div className="start-title">
              Send a message to start a chat.
            </div>

        </div>
        </div>

        </div>
        
    </div>

    <div className={`search-content ${this.state.showSearch ? "show" : ""}`}>
              <div className="search-title">Search</div>
              <input type="search" className="search-input" placeholder="Search..." />
        </div>
</>
)
}
}

export default Message