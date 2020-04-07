(this["webpackJsonpclassical-junkie"]=this["webpackJsonpclassical-junkie"]||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/home_background.3af6fdb3.PNG"},25:function(e,a,t){e.exports=t.p+"static/media/portrait_placeholder.4788048f.png"},26:function(e,a,t){e.exports=t(46)},36:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),s=t.n(r),i=t(6),l=t(7);function m(){var e=Object(l.h)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var o=t(1),u=(t(36),t(24)),f=t.n(u);var p=function(e){return c.a.createElement("div",{className:"home",style:{backgroundImage:"url(".concat(f.a,")")}},c.a.createElement("div",{className:"home-container"},c.a.createElement("h1",{className:"home-header"},"Classical Junkie"),c.a.createElement("p",{className:"home-subtitle"},"Scratch your classical music itch and listen to the classics you've been searching for"),c.a.createElement("a",{className:"home-btn-link",href:"".concat(e.authEndpoint,"?client_id=").concat(e.clientId,"&redirect_uri=").concat(e.redirectUri,"&scope=").concat(e.scopes.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),c.a.createElement("p",{className:"home-attribution"},"Powered By the Spotify Web API and Web Playback SDK")))},h=t(25),d=t(16),E=t.n(d);E.a.setAppElement("#root");var b=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(l.g)();function m(){s(!1)}return c.a.createElement("div",null,c.a.createElement("i",{onClick:function(){s(!0)},className:"fas fa-ellipsis-v"}),c.a.createElement(E.a,{isOpen:r,onRequestClose:m,className:"modal",overlayClassName:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h3",{className:"modal-header-name"},e.trackName),c.a.createElement("p",{className:"modal-header-artists"},e.trackArtists),c.a.createElement("img",{className:"modal-header-img",src:e.trackImg})),c.a.createElement("ul",{className:"modal-options"},c.a.createElement("div",{onClick:"album"===e.itemType?function(){fetch("https://api.spotify.com/v1/albums/".concat(e.id),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(a){a.tracks.items.forEach((function(a){return fetch("https://api.spotify.com/v1/me/player/queue?uri=".concat(a.uri),{method:"POST",headers:{Authorization:"Bearer ".concat(e.token)}})}))})),m()}:function(){fetch("https://api.spotify.com/v1/me/player/queue?uri=".concat(e.trackUri),{method:"POST",headers:{Authorization:"Bearer ".concat(e.token)}}),m()},className:"modal-option"},c.a.createElement("i",{className:"fas fa-layer-group"}),c.a.createElement("p",{className:"modal-option-description"},"Add to Queue")),c.a.createElement("div",{onClick:function(){return i.push("/album/".concat(e.albumId))},className:"modal-option"},c.a.createElement("i",{className:"fas fa-compact-disc"}),c.a.createElement("p",{className:"modal-option-description"},"View Album")),c.a.createElement("div",{onClick:function(){return i.push("/artist/".concat(e.artistId))},className:"modal-option"},c.a.createElement("i",{className:"fas fa-user"}),c.a.createElement("p",{className:"modal-option-description"},"View Artist"))))))};var N=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(n.useState)({}),m=Object(o.a)(i,2),u=m[0],f=m[1],p=Object(l.g)();return c.a.createElement("div",{className:"search-container container"},c.a.createElement("h1",{className:"search-header"},"Search"),c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{className:"search-input",type:"text",value:r,onChange:function(e){var a=e.target.value;s(a)}}),c.a.createElement("button",{className:"search-btn",onClick:function(a){a.preventDefault(),fetch("https://api.spotify.com/v1/search?q=".concat(r.split(" ").join("%20"),"&type=artist,track,album&limit=2"),{method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),f(e)})),p.push("/search/".concat(r))}},c.a.createElement("i",{className:"fas fa-search"}))),void 0===u.tracks?c.a.createElement("div",{className:"search-empty"},c.a.createElement("i",{className:"fas fa-search"}),c.a.createElement("p",{className:"search-call-to-action"},"Search Classical Junkie"),c.a.createElement("p",null,"Find your favorite classical music and artists.")):c.a.createElement("ul",{className:"search-list"},void 0!==u.tracks.items&&u.tracks.items.map((function(a){return c.a.createElement("div",{className:"search-item",key:a.id},c.a.createElement("div",{className:"search-item-main",onClick:function(){return e.play(a.uri)}},c.a.createElement("div",{className:"search-item-info"},c.a.createElement("p",{className:"search-item-name"},a.name),c.a.createElement("p",{className:"search-item-artists"},"track"===a.type?"Song":a.type," ",c.a.createElement("i",{className:"fas fa-circle"})," ",a.artists.map((function(e){return e.name})).join(", "))),c.a.createElement("img",{className:"search-item-img",src:a.album.images[1].url})),c.a.createElement(b,{albumId:a.album.id,artistId:a.album.artists[0].id,token:e.token,trackUri:a.uri,trackName:a.name,trackArtists:a.artists.map((function(e){return e.name})).join(", "),trackImg:a.album.images[1].url}))})),void 0!==u.albums.items&&u.albums.items.map((function(a){return c.a.createElement("div",{className:"search-item",key:a.id},c.a.createElement("div",{className:"search-item-main",onClick:function(){return p.push("/album/".concat(a.id))}},c.a.createElement("div",{className:"search-item-info"},c.a.createElement("p",{className:"search-item-name"},a.name),c.a.createElement("p",{className:"search-item-artists"},"track"===a.type?"Song":a.type," ",c.a.createElement("i",{className:"fas fa-circle"})," ",a.artists.map((function(e){return e.name})).join(", "))),c.a.createElement("img",{className:"search-item-img",src:a.images[1].url})),c.a.createElement(b,{albumId:a.id,artistId:a.artists[0].id,itemType:a.type,token:e.token,trackUri:a.uri,trackName:a.name,trackArtists:a.artists.map((function(e){return e.name})).join(", "),trackImg:a.images[1].url}))})),void 0!==u.artists.items&&u.artists.items.map((function(e){return c.a.createElement("div",{className:"search-item",key:e.id},c.a.createElement("div",{className:"search-item-main",onClick:function(){return p.push("/artist/".concat(e.id))}},c.a.createElement("div",{className:"search-item-info"},c.a.createElement("p",{className:"search-item-name"},e.name),c.a.createElement("p",{className:"search-item-artists"},"track"===e.type?"Song":e.type," ",c.a.createElement("i",{className:"fas fa-circle"})," ",e.name)),c.a.createElement("img",{className:"search-item-img search-artist-img",src:void 0===e.images[1]?h.portrait_placeholder:e.images[1].url})))}))))};var k=function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(n.useState)(0),l=Object(o.a)(i,2),m=l[0],u=l[1],f=Object(n.useState)(0),p=Object(o.a)(f,2),h=p[0],d=p[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),N=b[0],k=b[1],v=Object(n.useState)({}),y=Object(o.a)(v,2),g=y[0],j=y[1];function O(){setTimeout((function(){fetch("https://api.spotify.com/v1/me/player/currently-playing",{method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){s(e),d(e.item.duration_ms),u(0),u(e.progress_ms),k(e.is_playing)})).catch((function(e){return console.log(e)}))}),1e3)}return Object(n.useEffect)((function(){O()}),[e.currentUri]),Object(n.useEffect)((function(){if(r&&m<h&&N){var e=setTimeout((function(){j({width:"".concat(100*m/h,"%")}),u((function(e){return e+1e3}))}),1e3);return function(){return clearTimeout(e)}}m>=h?(j({width:"0%"}),O()):k(!1)}),[m,N]),c.a.createElement("div",{className:"player-footer-container"},r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"player-footer"},c.a.createElement("div",{className:"player-footer-info"},c.a.createElement("div",{className:"player-footer-controls"},c.a.createElement("button",{onClick:function(){fetch("https://api.spotify.com/v1/me/player/previous",{method:"POST",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return O()}))},className:"player-footer-btn"},c.a.createElement("i",{className:"fas fa-step-backward"})),c.a.createElement("button",{onClick:N?function(){fetch("https://api.spotify.com/v1/me/player/pause",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return k(!1)}))}:function(){fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return k(!0)}))},className:"player-footer-btn"},N?c.a.createElement("i",{className:"fas fa-pause"}):c.a.createElement("i",{className:"fas fa-play"})),c.a.createElement("button",{onClick:function(){fetch("https://api.spotify.com/v1/me/player/next",{method:"POST",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(){return O()}))},className:"player-footer-btn"},c.a.createElement("i",{className:"fas fa-step-forward"}))),c.a.createElement("div",{className:"player-footer-progress-container"},c.a.createElement("div",{className:"player-footer-progress",style:g})),c.a.createElement("div",{className:"player-footer-track"},c.a.createElement("p",{className:"player-footer-track-info"},r.item.name,c.a.createElement("i",{className:"fas fa-circle"}),c.a.createElement("span",{className:"player-footer-artists"},r.item.artists.map((function(e){return e.name})).join(", "))))),c.a.createElement("img",{className:"player-footer-img",src:r.item.album.images[0].url}))))};var v=function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(l.i)().albumId,m=Object(l.g)();return Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/albums/".concat(i),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{onClick:function(){return m.push("/search")},className:"search fas fa-search"}),c.a.createElement("i",{onClick:function(){return m.goBack()},className:"go-back fas fa-arrow-left"}),void 0!==r.name&&c.a.createElement("div",{className:"album-container"},c.a.createElement("div",{className:"album-info"},c.a.createElement("h2",{className:"album-info-name"},r.name),c.a.createElement("p",{className:"album-info-artists"},"Album by ",r.artists.map((function(e){return e.name})).join(", ")," ",c.a.createElement("i",{className:"fas fa-circle"})," ",r.release_date.slice(0,4)),c.a.createElement("img",{className:"album-info-img",src:r.images[1].url})),c.a.createElement("ul",{className:"container track-list"},r.tracks.items.map((function(a){return c.a.createElement("div",{key:a.id,className:"track-list-item"},c.a.createElement("div",{className:"track-list-item-info",onClick:function(){return e.play(a.uri)}},c.a.createElement("p",{className:"track-list-item-name"},a.name),c.a.createElement("p",{className:"track-list-item-artists"},a.artists.map((function(e){return e.name})).join(", "))),c.a.createElement(b,{albumId:r.id,artistId:r.artists[0].id,token:e.token,trackUri:a.uri,trackName:a.name,trackArtists:a.artists.map((function(e){return e.name})).join(", "),trackImg:r.images[1].url}))})))))},y=t(10);var g=function(e){var a=Object(n.useState)({info:{},releases:[],topTracks:[],relatedArtists:{}}),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(l.i)().artistId,m=Object(l.g)();return Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/artists/".concat(i),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){return s((function(a){return Object(y.a)({},a,{info:e})}))}))}),[]),Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/artists/".concat(i,"/top-tracks?market=from_token"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){return s((function(a){return Object(y.a)({},a,{topTracks:e.tracks})}))}))}),[]),Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/artists/".concat(i,"/albums?limit=5"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){return s((function(a){return Object(y.a)({},a,{releases:e.items})}))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{onClick:function(){return m.push("/search")},className:"search fas fa-search"}),c.a.createElement("i",{onClick:function(){return m.goBack()},className:"go-back fas fa-arrow-left"}),void 0!==r.info.images&&c.a.createElement("div",{className:"artist-container"},c.a.createElement("div",{className:"artist-info",style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #111111),\n          url(".concat(r.info.images[0].url,")")}},c.a.createElement("h1",{className:"artist-info-name"},r.info.name)),c.a.createElement("main",{className:"container artist-main"},c.a.createElement("section",{className:"artist-popular artist-section"},void 0!==r.topTracks&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"artist-section-header"},"Popular"),c.a.createElement("ul",{className:"artist-track-list"},r.topTracks.map((function(a,t){if(t<5)return c.a.createElement("div",{key:a.id,className:"track-list-item"},c.a.createElement("div",{className:"track-list-item-info artist-track-list-item-info",onClick:function(){return e.play(a.uri)}},c.a.createElement("p",{className:"track-list-item-num"},t+1),c.a.createElement("div",null,c.a.createElement("p",{className:"track-list-item-name"},a.name),c.a.createElement("p",{className:"track-list-item-artists"},a.artists.map((function(e){return e.name})).join(", ")))),c.a.createElement(b,{albumId:a.album.id,artistId:i,token:e.token,trackUri:a.uri,trackName:a.name,trackArtists:a.artists.map((function(e){return e.name})).join(", "),trackImg:a.album.images[1].url}))}))))),c.a.createElement("section",{className:"artist-releases artist-section"},void 0!==r.releases&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"artist-section-header"},"Latest Releases"),c.a.createElement("ul",{className:"releases-list"},r.releases.map((function(e){return c.a.createElement("div",{className:"releases-item",key:e.id,onClick:function(){return m.push("/album/".concat(e.id))}},c.a.createElement("div",{className:"releases-item-info"},c.a.createElement("p",{className:"releases-item-name"},e.name),c.a.createElement("p",{className:"releases-item-year"},e.release_date.slice(0,4),c.a.createElement("i",{className:"fas fa-circle"}),"track"===e.type?"Song":e.type)),c.a.createElement("img",{className:"releases-item-img",src:e.images[1].url}))}))),c.a.createElement("button",{onClick:function(){return m.push("/artist/".concat(i,"/releases"))},className:"releases-btn"},c.a.createElement("strong",null,"See Discography")))))))};var j=function(e){var a=Object(n.useState)({albums:[],singles:[]}),t=Object(o.a)(a,2),r=t[0],s=t[1],i=Object(l.i)().artistId,m=Object(l.g)();return Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/artists/".concat(i,"/albums?include_groups=album"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),s((function(a){return Object(y.a)({},a,{albums:e.items})}))}))}),[]),Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/artists/".concat(i,"/albums?include_groups=single"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),s((function(a){return Object(y.a)({},a,{singles:e.items})}))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{onClick:function(){return m.push("/search")},className:"search fas fa-search"}),c.a.createElement("i",{onClick:function(){return m.goBack()},className:"go-back fas fa-arrow-left"}),c.a.createElement("main",{className:"all-releases container"},void 0!==r.albums&&c.a.createElement("section",{className:"all-releases-albums all-releases-section"},c.a.createElement("h3",{className:"artist-section-header"},"Albums"),c.a.createElement("ul",{className:"all-releases-list"},r.albums.map((function(e){return c.a.createElement("div",{className:"releases-item",key:e.id,onClick:function(){return m.push("/album/".concat(e.id))}},c.a.createElement("div",{className:"releases-item-info"},c.a.createElement("p",{className:"releases-item-name"},e.name),c.a.createElement("p",{className:"releases-item-year"},e.release_date.slice(0,4))),c.a.createElement("img",{className:"releases-item-img",src:e.images[1].url}))})))),void 0!==r.singles&&c.a.createElement("section",{className:"all-releases-singles all-releases-section"},c.a.createElement("h3",{className:"artist-section-header"},"Singles"),c.a.createElement("ul",{className:"all-releases-list"},r.singles.map((function(e){return c.a.createElement("div",{className:"releases-item",key:e.id,onClick:function(){return m.push("/album/".concat(e.id))}},c.a.createElement("div",{className:"releases-item-info"},c.a.createElement("p",{className:"releases-item-name"},e.name),c.a.createElement("p",{className:"releases-item-year"},e.release_date.slice(0,4))),c.a.createElement("img",{className:"releases-item-img",src:e.images[1].url}))}))))))},O=["user-read-currently-playing","user-read-playback-state","user-modify-playback-state","streaming","user-read-email","user-read-private"];var S=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),m=i[0],u=i[1],f=Object(n.useState)(null),h=Object(o.a)(f,2),d=h[0],E=h[1],b=Object(l.g)();function y(e){fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(d),{method:"PUT",body:JSON.stringify({uris:[e]}),headers:{Authorization:"Bearer ".concat(m)}}),r(e)}return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,a){if(a){var t=a.split("=");e[t[0]]=decodeURIComponent(t[1])}return e}),{});window.location.hash="";var a=e.access_token;a&&(u(a),b.push("/search"))}),[]),Object(n.useEffect)((function(){m&&(window.onSpotifyWebPlaybackSDKReady=function(){var e=new window.Spotify.Player({name:"Classical Junkie Player",getOAuthToken:function(e){e(m)}});e.connect(),e.addListener("ready",(function(a){var t=a.device_id;E(t),e.removeListener("ready")}))})}),[m]),c.a.createElement("div",{className:"App"},c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"},!m&&c.a.createElement(p,{authEndpoint:"https://accounts.spotify.com/authorize",clientId:"5ab1ad0488a045ada24732decaec33d3",redirectUri:"http://localhost:3000",scopes:O})),c.a.createElement(l.b,{path:"/search"},m?c.a.createElement(N,{play:y,token:m}):c.a.createElement(l.a,{to:"/"})),c.a.createElement(l.b,{path:"/album/:albumId"},m?c.a.createElement(v,{play:y,token:m}):c.a.createElement(l.a,{to:"/"})),c.a.createElement(l.b,{exact:!0,path:"/artist/:artistId"},m?c.a.createElement(g,{play:y,token:m}):c.a.createElement(l.a,{to:"/"})),c.a.createElement(l.b,{path:"/artist/:artistId/releases"},m?c.a.createElement(j,{play:y,token:m}):c.a.createElement(l.a,{to:"/"}))),c.a.createElement("footer",null,m&&c.a.createElement(k,{deviceId:d,setCurrentUri:r,currentUri:t,token:m})))};s.a.render(c.a.createElement(i.a,null,c.a.createElement(m,null),c.a.createElement(S,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6ee86b3d.chunk.js.map