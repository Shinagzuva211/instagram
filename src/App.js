import { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
        {
          img:"https://i.pinimg.com/736x/f1/0b/2f/f10b2f25ed648adcb36cc92b66931e87.jpg",
          userName: "__t1ll.a__"
        },
      ],
      reels:[
        {
          id: 1,
          link: "https://www.instagram.com/reel/DIGrEJgiNFh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 2,
          link: "https://www.instagram.com/reel/DJtFjqmopRn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 3,
          link: "https://www.instagram.com/reel/DH3y6qmIsFN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 4,
          link: "https://www.instagram.com/reel/DITzQreIC14/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 5,
          link: "https://www.instagram.com/reel/DIl1wgfI_mi/?utm_source=ig_web_copy_link"
        },
        {
          id: 6,
          link: "https://www.instagram.com/reel/DIw0xsTzZMF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 7,
          link: "https://www.instagram.com/reel/DFamLhDibLO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 8,
          link: "https://www.instagram.com/reel/DFalj0PpAx9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 9,
          link: "https://www.instagram.com/reel/DIsAUc9I23G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 10,
          link: "https://www.instagram.com/reel/DHn_JevhwxI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 11,
          link: "https://www.instagram.com/reel/DJvb91UKc4v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 12,
          link: "https://www.instagram.com/reel/DIYWw77odNU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 13,
          link: "https://www.instagram.com/reel/DC6X4ZBT_lq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 14,
          link: "https://www.instagram.com/reel/DHD9kJIMJG5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 15,
          link: "https://www.instagram.com/reel/DGs1iPFh9Lx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 16,
          link: "https://www.instagram.com/reel/DHSv8LUNnqn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 17,
          link: "https://www.instagram.com/reel/DJPEFDdMu5B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 18,
          link: "https://www.instagram.com/reel/DHd-_LPoAXM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 19,
          link: "https://www.instagram.com/reel/DHDugfQsc2C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          id: 20,
          link: "https://www.instagram.com/reel/DGpXcBsplYk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        
        
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Home 
        stories={this.state.stories}
        reels={this.state.reels} />
      </div>
    );
  }
}

export default App;

