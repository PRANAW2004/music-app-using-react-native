import TrackPlayer,{Event} from "react-native-track-player";

module.exports = async function(){
    
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    // TrackPlayer.setupPlayer();

    // TrackPlayer.addEventListener("remote-play", () => {
    //     TrackPlayer.play();
    // })
    // TrackPlayer.addEventListener("remote-pause", () => {
    //     TrackPlayer.pause();
    // })
}