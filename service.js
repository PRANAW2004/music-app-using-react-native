import TrackPlayer,{Event} from "react-native-track-player";

export const Notification = async function(){
    
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    // TrackPlayer.setupPlayer();

    // try{
    //  TrackPlayer.addEventListener("remote-play", () => {
    //     TrackPlayer.play();
    // })
    //  TrackPlayer.addEventListener("remote-pause", () => {
    //     TrackPlayer.pause();
    // })
    //  TrackPlayer.addEventListener("remote-next", () => {
    //     TrackPlayer.skipToNext();
    // })
    //  TrackPlayer.addEventListener("remote-previous", () => {
    //     TrackPlayer.skipToPrevious();
    // })
    // }catch(err){}
}