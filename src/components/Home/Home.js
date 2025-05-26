import { Component } from "react";
import "./Home.css"
class Home extends Component{
    constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showSearch: false,
      showLogo:true,
      showIcon:false,   
      showCss:false,
    };
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

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
render(){


    const { stories=[], reels=[] } = this.props
return(
<>

    <div className="container">

    <div className="home-content">

        <div className="left-content">

            {this.state.showLogo && (
                <div className="insta-logo">
                <img src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt="" />
            </div>
            )}

           
            {this.state.showIcon && (
            <div  className={`insta-icon ${this.state.showCss ? 'show' : ''}`}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzUnojngjDyf4CIZyQFdiplf0sNjGyRosSg&s" alt="" />
            </div>
            )}

            <div className="main-pages">

                <div className="home">
                    <div className="home-icon">
                        <img src="https://www.unhcr.org/spotlight/wp-content/uploads/sites/55/2021/05/Icon-test-House-white.png" alt="" />
                    </div>

                    <div className="home-title">
                        Home
                    </div>
                </div>

                <div className="home" onClick={this.toggleSearch}>
                    <div className="home-icon">
                        <img src="https://static-00.iconduck.com/assets.00/search-icon-512x497-4nz4jz2p.png" alt="" />
                    </div>

                    <div className="home-title">
                        Search
                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvoh6y6fh1lIGOOTRQ8kqWbtPUXzEiIU3dQ&s" alt="" />
                    </div>

                    <div className="home-title">
                        Explore
                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeQsnB6ZzHzAMPAbjDeCUT1BKTG2IQ7l1wA6Xa4sFa0lBE-dh5l0xdXFKZWvVpA4Yk7Y&usqp=CAU" alt="" />
                    </div>

                    <div className="home-title">
                        Reels
                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisnWCgbxvtNlBHEvun0EYiOpYMxdd4-7LlPX8mvHzPZfyuQDV9piKL9dM_6j3E4rMcNI&usqp=CAU" alt="" />
                    </div>

                    <div className="home-title">
                        Message
                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/025/094/074/small/white-heart-sign-isolated-on-transparent-background-valentines-day-icon-hand-drawn-heart-shape-world-heart-day-concept-love-icon-illustration-free-png.png" alt="" />
                    </div>

                    <div className="home-title">
                        Notifications
                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://cbx-prod.b-cdn.net/COLOURBOX35058944.jpg?width=480&height=480&quality=70" alt="" />
                    </div>

                    <div className="home-title">
                        Create

                    </div>
                </div>

                <div className="home">
                    <div className="home-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/11789/11789135.png" alt="" />
                    </div>

                    <div className="home-title">
                        Profil
                    </div>
                </div>

            </div>

            <div className="more-content">

                <div className="threads">

                    <div className="thread-icon">
                        <img src="https://wzimg.fx696.com/guoji/2024-08-26/638602683929999812/ART638602683929999812_105416.jpg-article598" alt="" />
                    </div>

                    <div className="thread-title">
                        Threads
                    </div>
                </div>

        <div className="more" onClick={this.toggleMenu}>
            <div className="more-icon">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAsr92HkIAF-ctFuO2jZRPIcQNeGtGq7XmDwUeKEludkr-FqMK63LlwNzDpc9nMhXg-g&usqp=CAU"
                    alt="More"
                />
            </div>

            <div className="more-title">
            More
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

        <div className="h-line"></div>

        <div className={`search-content ${this.state.showSearch ? "show" : ""}`}>
            <div className="search-title">Search</div>
            <input 
            type="search" 
            className="search-input" 
            placeholder="Search..." />
        </div>

        <div className="mid-content">

            <div className="istories-content">

            {stories.map((story, index) => (
            <div className="tilla" key={index}>
                <div className="tilla-img">
                <img src={story.img}  />
                </div>
                <div className="tilla-nick">
                    {story.userName}
                </div>
            </div>
            ))}

            </div>

            <div className="w-line"></div>

            <div className="post-title">
                Suggested Posts
            </div>

                <div className="instagram-reels-scroll-container">
                    {reels.map((reel, index) => (
                    <blockquote
                        key={reel.id}
                        className="instagram-media"
                        data-instgrm-permalink={reel.link}
                        data-instgrm-version="14"
                        style={{ width: "100%", maxWidth: "540px", margin: "auto" }}
                    ></blockquote>
                    ))}
                </div>

        </div>

        <div className="right-content">

                <div className="my-acc">
                    
                    <div className="img-nick">

                        <div className="my-img">
                        <img src="https://i.pinimg.com/736x/71/a7/3b/71a73bd1517c554339365e0fc9ffde07.jpg" alt="" />
                        </div>

                        <div className="nicks">
                            <div className="my-nick">
                            mkhmdbekv_v
                        </div>

                        <div className="my-name">
                            Makhmudbk
                        </div>
                        </div>
                    
                    </div>

                    <div className="switch">
                        Switch
                    </div>

                </div>

                <div className="for-you">
                    Suggested for you
                </div>

                <div className="my-acc">
                    
                    <div className="img-nick">

                        <div className="my-img">
                        <img src="https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg" alt="" />
                        </div>

                        <div className="nicks">
                            <div className="my-nick">
                            unknown
                        </div>

                        </div>
                    
                    </div>

                    <div className="switch">
                        Follow
                    </div>

                </div>

                <div className="my-acc">
                    
                    <div className="img-nick">

                        <div className="my-img">
                        <img src="https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg" alt="" />
                        </div>

                        <div className="nicks">
                            <div className="my-nick">
                            unknown
                        </div>

                        </div>
                    
                    </div>

                    <div className="switch">
                        Follow
                    </div>

                </div>
                <div className="my-acc">
                    
                    <div className="img-nick">

                        <div className="my-img">
                        <img src="https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg" alt="" />
                        </div>

                        <div className="nicks">
                            <div className="my-nick">
                            unknown
                        </div>

                        </div>
                    
                    </div>

                    <div className="switch">
                        Follow
                    </div>

                </div>

        </div>

    </div>

    </div>

</>
)
}
}

export default Home