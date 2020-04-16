import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

var year = new Date().getFullYear();

$(document).ready(function() {
  $("a[name=\"next\"]").hide();
  $("#scrollToAnchor").click(function(e) {
      e.preventDefault();
      $("body").attr("style", "");
      $(".jumbotron").attr("style", "padding: 0 2rem !important;");
      $('html,body').animate({scrollTop: 1024},'slow', function() {});
  });
  // eslint-disable-next-line no-extend-native
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };
  function parseColor(c) {
    return c.
            replaceAll("§r", "</span>").
            replaceAll("§0", "<span style=\"color:#000000\">").
            replaceAll("§1", "<span style=\"color:#0000AA\">").
            replaceAll("§2", "<span style=\"color:#00AA00\">").
            replaceAll("§3", "<span style=\"color:#00AAAA\">").
            replaceAll("§4", "<span style=\"color:#AA0000\">").
            replaceAll("§5", "<span style=\"color:#AA00AA\">").
            replaceAll("§6", "<span style=\"color:#FFAA00\">").
            replaceAll("§7", "<span style=\"color:#AAAAAA\">").
            replaceAll("§8", "<span style=\"color:#555555\">").
            replaceAll("§9", "<span style=\"color:#5555FF\">").
            replaceAll("§a", "<span style=\"color:#55FF55\">").
            replaceAll("§b", "<span style=\"color:#55FFFF\">").
            replaceAll("§c", "<span style=\"color:#FF5555\">").
            replaceAll("§d", "<span style=\"color:#FF55FF\">").
            replaceAll("§e", "<span style=\"color:#FFFF55\">").
            replaceAll("§f", "<span style=\"color:#FFFFFF\">");
  }
  $.get("https://mcapi.us/server/status?ip=mc.koyu.space", function(data) {
    if (data["online"]) {
      $(".online").html(parseColor("§2Online§r"));
      $(".motd").html(parseColor(data["motd"]));
      $(".favicon").html("<img src=\""+data["favicon"]+"\">");
      $(".players").html(data["players"]["now"]+"/"+data["players"]["max"]);
    } else {
      $(".online").html(parseColor("§4Offline§r"));
      $(".ononline").hide();
    }
  });
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bg"><h1>koyu.space Minecraft<br /><small className="ip">mc.koyu.space</small></h1></div>
        <a href="#next" id="scrollToAnchor"><div className="downbutton"><i className="fas fa-chevron-down"></i></div></a>
        <a name="next">Anchor</a>
        <div className="content">
          <div className="sections">
            <section>
              <h1>We play Minecraft</h1>
              <img src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/8/89/Ghast.png/524px-Ghast.png" height="150" alt="Ghast" />
              <p>Should be obvious when we got a Minecraft server, right?</p>
            </section>
            <section className="swap">
              <h1>It is hosted on koyu.space</h1>
              <img src="https://themedata.koyu.space/img/pb-icon.svg" height="150" alt="koyu.space Logo" />
              <p>With over 8 years experience in servers we built a Minecraft server from the ground up.</p>
            </section>
            <section>
              <h1>A good game!</h1>
              <img src="https://gamepedia.cursecdn.com/minecraft_gamepedia/2/2d/Plains_Grass_Block.png" height="150" alt="Grass block" />
              <p>Minecraft is one of the biggest and most fun games with over 65 million players.</p>
            </section>
          </div>
        </div>
        <div className="mcbg">
          <div className="ending mcfont">
            <span className="ononline">
              <span style={{"float": "left", "margin": "auto"}} className="favicon"></span>
              <span className="motd"></span><br />
            </span>
            Status: <span className="online"></span><br />
            <span className="ononline">Players: <span className="players"></span></span>
          </div>
        </div>
        <footer>
          &copy; koyu.space Minecraft {year}. A project by koyu.space.
        </footer>
      </div>
    );
  }
}