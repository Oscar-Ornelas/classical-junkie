(this["webpackJsonpclassical-junkie"]=this["webpackJsonpclassical-junkie"]||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/home_background.3af6fdb3.PNG"},33:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(29),s=t.n(r),i=t(11),l=t(2),m=t(8),o=(t(38),t(30)),u=t.n(o);var f=function(e){return n.a.createElement("div",{className:"home",style:{backgroundImage:"url(".concat(u.a,")")}},n.a.createElement("div",{className:"home-container"},n.a.createElement("h1",{className:"home-header"},"Classical Junkie"),n.a.createElement("p",{className:"home-subtitle"},"Scratch your classical music itch and listen to the classics you've been searching for"),n.a.createElement("a",{className:"home-btn-link",href:"".concat(e.authEndpoint,"?client_id=").concat(e.clientId,"&redirect_uri=").concat(e.redirectUri,"&scope=").concat(e.scopes.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),n.a.createElement("p",{className:"home-attribution"},"Powered By the Spotify Web API and Web Playback SDK")))};t(39);var p=function(e){var a=Object(c.useState)(""),t=Object(l.a)(a,2),r=t[0],s=t[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),u=o[0],f=o[1],p=Object(m.g)();return Object(c.useEffect)((function(){window.onSpotifyWebPlaybackSDKReady=function(){new window.Spotify.Player({name:"Web Playback SDK Quick Start Player",getOAuthToken:function(a){a(e.token)}}).connect()}}),[]),n.a.createElement("div",{className:"search-container container"},n.a.createElement("h1",{className:"search-header"},"Search"),n.a.createElement("form",{className:"search-form"},n.a.createElement("input",{className:"search-input",type:"text",value:r,onChange:function(e){var a=e.target.value;s(a)}}),n.a.createElement("button",{className:"search-btn",onClick:function(a){a.preventDefault(),fetch("https://api.spotify.com/v1/search?q=".concat(r.split(" ").join("%20"),"&type=artist,track,album&limit=2"),{method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),f(e)}))}},n.a.createElement("i",{className:"fas fa-search"}))),void 0===u.tracks?n.a.createElement("div",{className:"search-empty"},n.a.createElement("i",{className:"fas fa-search"}),n.a.createElement("p",{className:"search-call-to-action"},"Search Classical Junkie"),n.a.createElement("p",null,"Find your favorite classical music and artists.")):n.a.createElement("ul",{className:"search-list"},void 0!==u.tracks&&u.tracks.items.map((function(a){return n.a.createElement("div",{className:"search-item",key:a.id},n.a.createElement("div",{className:"search-item-main",onClick:function(){return e.play(a.uri)}},n.a.createElement("div",{className:"search-item-info"},n.a.createElement("p",{className:"search-item-name"},a.name),n.a.createElement("p",{className:"search-item-artists"},"track"===a.type?"Song":a.type," ",n.a.createElement("i",{className:"fas fa-circle"})," ",a.artists.map((function(e){return e.name})).join(", "))),n.a.createElement("img",{className:"search-img",src:a.album.images[1].url})),n.a.createElement("i",{onClick:function(){return console.log("Hello")},className:"fas fa-ellipsis-v"}))})),void 0!==u.albums&&u.albums.items.map((function(e){return n.a.createElement("div",{className:"search-item",key:e.uri},n.a.createElement("div",{className:"search-item-main",onClick:function(){return p.push("/album/".concat(e.id))}},n.a.createElement("div",{className:"search-item-info"},n.a.createElement("p",{className:"search-item-name"},e.name),n.a.createElement("p",{className:"search-item-artists"},"track"===e.type?"Song":e.type," ",n.a.createElement("i",{className:"fas fa-circle"})," ",e.artists.map((function(e){return e.name})).join(", "))),n.a.createElement("img",{className:"search-img",src:e.images[1].url})),n.a.createElement("i",{onClick:function(){return console.log("Hello")},className:"fas fa-ellipsis-v"}))})),void 0!==u.artists&&u.artists.items.map((function(a){return n.a.createElement("div",{className:"search-item",key:a.uri},n.a.createElement("div",{className:"search-item-main",onClick:function(){return e.play(a.uri)}},n.a.createElement("div",{className:"search-item-info"},n.a.createElement("p",{className:"search-item-name"},a.name),n.a.createElement("p",{className:"search-item-artists"},"track"===a.type?"Song":a.type," ",n.a.createElement("i",{className:"fas fa-circle"})," ",a.name)),n.a.createElement("img",{className:"search-img search-artist-img",src:a.images[1].url})),n.a.createElement("i",{onClick:function(){return console.log("Hello")},className:"fas fa-ellipsis-v"}))}))))};var h=function(e){var a=Object(c.useState)(null),t=Object(l.a)(a,2),r=t[0],s=t[1],i=Object(c.useState)(0),m=Object(l.a)(i,2),o=m[0],u=m[1],f=Object(c.useState)(0),p=Object(l.a)(f,2),h=p[0],d=p[1],E=Object(c.useState)(!1),b=Object(l.a)(E,2),y=b[0],N=b[1],v=Object(c.useState)({}),k=Object(l.a)(v,2),g=k[0],j=k[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch("https://api.spotify.com/v1/me/player/currently-playing",{method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){s(e),d(e.item.duration_ms),u(0),u(e.progress_ms),N(e.is_playing),console.log(e)}))}),1e3)}),[e.currentUri]),Object(c.useEffect)((function(){if(r&&o<h&&y){var e=setTimeout((function(){j({width:"".concat(100*o/h,"%")}),u((function(e){return e+12}))}),10);return function(){return clearTimeout(e)}}j({width:"0%"})}),[o,y]),n.a.createElement("div",{className:"player-footer-container"},r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"player-footer-progress-container"},n.a.createElement("div",{className:"player-footer-progress",style:g})),n.a.createElement("div",{className:"player-footer"},n.a.createElement("div",{className:"player-footer-main"},n.a.createElement("div",{className:"player-footer-info"},n.a.createElement("p",null,r.item.name,n.a.createElement("i",{className:"fas fa-circle"}),n.a.createElement("span",{className:"player-footer-artists"},r.item.artists.map((function(e){return e.name})).join(", ")))),n.a.createElement("img",{className:"player-footer-img",src:r.item.album.images[1].url})),n.a.createElement("button",{onClick:y?function(){fetch("https://api.spotify.com/v1/me/player/pause",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return N(!1)}))}:function(){fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return N(!0)}))},className:"player-footer-btn"},y?n.a.createElement("i",{className:"fas fa-pause"}):n.a.createElement("i",{className:"fas fa-play"})))))};var d=function(e){var a=Object(c.useState)({}),t=Object(l.a)(a,2),r=t[0],s=t[1],i=Object(m.h)().albumId;return Object(c.useEffect)((function(){fetch("https://api.spotify.com/v1/albums/".concat(i),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),void 0!==r.name&&n.a.createElement("div",{className:"album-container"},n.a.createElement("div",{className:"album-info"},n.a.createElement("h2",{className:"album-info-name"},r.name),n.a.createElement("p",{className:"album-info-artists"},"Album by ",r.artists.map((function(e){return e.name})).join(", ")," ",n.a.createElement("i",{className:"fas fa-circle"})," ",r.release_date.slice(0,4)),n.a.createElement("img",{className:"album-info-img",src:r.images[1].url})),n.a.createElement("ul",{className:"track-list"},r.tracks.items.map((function(a){return n.a.createElement("div",{key:a.id,className:"track-list-item"},n.a.createElement("div",{className:"track-list-item-info",onClick:function(){return e.play(a.uri)}},n.a.createElement("p",{className:"track-list-item-name"},a.name),n.a.createElement("p",{className:"track-list-item-artists"},a.artists.map((function(e){return e.name})).join(", "))),n.a.createElement("i",{onClick:function(){return console.log("Hello")},className:"fas fa-ellipsis-v"}))}))))},E=["user-read-currently-playing","user-read-playback-state","user-modify-playback-state","streaming","user-read-email","user-read-private"];var b=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(c.useState)({album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0}),y=Object(l.a)(b,2),N=(y[0],y[1],Object(m.g)());function v(e){fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",body:JSON.stringify({uris:[e]}),headers:{Authorization:"Bearer ".concat(o)}}),r(e)}return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,a){if(a){var t=a.split("=");e[t[0]]=decodeURIComponent(t[1])}return e}),{});window.location.hash="";var a=e.access_token;a&&(u(a),N.push("/search"))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/"},!o&&n.a.createElement(f,{authEndpoint:"https://accounts.spotify.com/authorize",clientId:"5ab1ad0488a045ada24732decaec33d3",redirectUri:"http://localhost:3000",scopes:E})),n.a.createElement(m.b,{path:"/search"},o?n.a.createElement(p,{play:v,token:o}):n.a.createElement(m.a,{to:"/"})),n.a.createElement(m.b,{path:"/album/:albumId"},o?n.a.createElement(d,{play:v,token:o}):n.a.createElement(m.a,{to:"/"}))),n.a.createElement("footer",null,o&&n.a.createElement(h,{currentUri:t,token:o})))};s.a.render(n.a.createElement(i.a,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6b0063b6.chunk.js.map