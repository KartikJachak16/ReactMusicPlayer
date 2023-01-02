import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)


  useEffect(() => setPlay(true), [trackUri])

if (!accessToken) return null 
return (
  <SpotifyPlayer
    token={accessToken}
    showSaveIcon
    callback={state => {
      if (!state.isPlaying) setPlay(false)
    }}
    play={play}
    uris={trackUri ? [trackUri] : []}
  />
  
)
}

// setnext(true),setprevious(true),

// return (
//   <SpotifyPlayer
//     token={accessToken}
//     showSaveIcon
//     callback={state => {
//       if (!state.isPlaying) setPlay(false) && setnext(true) && setprevious(true)
//     }}
//     previous={previous}
//     play={play}
//     next={next}
//     uris={trackUri ? [trackUri] : []}
//   />
  
// )
