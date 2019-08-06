import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

var year = new Date().getFullYear();

$(document).ready(function() {
  $("#scrollToAnchor").click(function(e) {
      e.preventDefault();
      $("body").attr("style", "");
      $(".jumbotron").attr("style", "padding: 0 2rem !important;");
      $('html,body').animate({scrollTop: 1024},'slow', function() {});
  });
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bg"><h1>koyu.space Minecraft<br /><small className="ip">mc.koyu.space</small></h1></div>
        <a href="#next" id="scrollToAnchor"><div className="downbutton"><i className="fas fa-chevron-down"></i></div></a>
        <a name="next"></a>
        <div className="content">
          <div className="sections">
            <section>
              <h1>We play Minecraft</h1>
              <img src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/8/89/Ghast.png/524px-Ghast.png" height="150" alt="Ghast" />
              <p>Should be obvious when we got a Minecraft server, right?</p>
            </section>
            <section className="swap">
              <h1>It is hosted on koyu.space</h1>
              <img src="https://web.koyu.space/img/pb-icon.svg" height="150" alt="koyu.space Logo" />
              <p>With over 8 years experience in servers we built a Minecraft server from the ground up.</p>
            </section>
            <section>
              <h1>A good game!</h1>
              <img src="https://gamepedia.cursecdn.com/minecraft_gamepedia/2/2d/Plains_Grass_Block.png" height="150" alt="Grass block" />
              <p>Minecraft is one of the biggest and most fun games with over 65 million players.</p>
            </section>
          </div>
          <div className="ending">
            <h1>What are you waiting for?</h1>
            <p>Ask koyu@koyu.space via e-mail or Mastodon and get whitelisted on koyu.space Minecraft!</p>
          </div>
        </div>
        <footer>
          &copy; koyu.space Minecraft {year}. A project by koyu.space.
        </footer>
      </div>
    );
  }
}