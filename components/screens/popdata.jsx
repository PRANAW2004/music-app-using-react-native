const popdata = [
    {
        id:1,
        title: "#SELFIE",
        artist: "The Chainsmokers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2F%23SELFIE.mp3?alt=media&token=640886ad-446e-461c-93a2-acbd219d9d47",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2Fdownloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e47d6602-1b90-4b8f-996c-54771350679a",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:2,
        title: "A Little Party Never Killed Nobody",
        artist: "Fergie",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FA%20Little%20Party%20Never%20Killed%20Nobody%20(All%20We%20Got).mp3?alt=media&token=0e025ecd-bf70-416c-85b6-b2e7d846134b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FA%20Little%20Party%20Never%20Killed%20Nobody%20(All%20We%20Got)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=92d524aa-d055-46fc-9f66-69981140218f",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:3,
        title: "Am I Wrong",
        artist: "Nico & Vinz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FAm%20I%20Wrong.mp3?alt=media&token=3a1f1c83-2309-48e0-86cc-c5f407941d13",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FAm%20I%20Wrong%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=56db2bcb-973e-4aa9-9242-2cb5f8970a46",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:4,
        title: "Animals - Extended",
        artist: "Martin Garrix",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FAnimals%20-%20Extended.mp3?alt=media&token=29da8145-f181-490e-8ae4-96c3c99afdee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FAnimals%20-%20Extended%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=02a626d9-5065-4e16-8b3e-f11a6b7a458b",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:5,
        title: "Best Day Of My Life",
        artist: "American Authors",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBest%20Day%20Of%20My%20Life.mp3?alt=media&token=af170644-70fb-421d-a682-eac74b12839a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBest%20Day%20Of%20My%20Life%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f955421f-c3ef-4254-99b5-9c0ce6f5c4b3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:6,
        title: "Blurred Lines",
        artist: "Robin Thicke",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBlurred%20Lines.mp3?alt=media&token=66808dd6-ea97-4b26-b3c0-837c24366a21",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBlurred%20Lines%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=decf44bc-c9a3-4221-9624-23fc18a839fe",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:7,
        title: "Bonfire Heart",
        artist: "James Blunt",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBonfire%20Heart.mp3?alt=media&token=d3aea8db-99c9-46cf-862f-7ca7193bd2d8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBonfire%20Heart%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a2e7e126-53b1-4d35-b240-f62dcb6b64b5",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:8,
        title: "Burn",
        artist: "Ellie Goulding",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBurn.mp3?alt=media&token=d065c124-1a3c-49c5-8f25-27f541516ae7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBurn%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=faac26fb-2a13-46eb-814a-0b207573115c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:9,
        title: "Busy Doin' Nothin'",
        artist: "Ace Wilder",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBusy%20Doin'%20Nothin'.mp3?alt=media&token=5ba4e53d-d9f5-4e3c-8fcc-4408c06867b6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBusy%20Doin'%20Nothin'%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=439bdfcb-d5c0-4b55-8e66-b22523cfbe1c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:10,
        title: "Can't Hold Us (feat. Ray Dalton)",
        artist: "Macklemore & Ryan Lewis",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCan't%20Hold%20Us%20(feat.%20Ray%20Dalton).mp3?alt=media&token=1f3478e5-7c0c-483a-a096-01b6a8fcb9d1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCan't%20Hold%20Us%20(feat.%20Ray%20Dalton)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c564bdf8-dcfe-4cb9-90c9-adf1e829b291",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:11,
        title: "Can't Remember to Forget You",
        artist: "Shakira",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCan't%20Remember%20to%20Forget%20You.mp3?alt=media&token=e9431eea-1e7b-4bed-bd17-4feff8f52b8d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCan't%20Remember%20to%20Forget%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3eaa075a-8fff-4a30-b991-ae930661b706",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:12,
        title: "Counting Stars",
        artist: "OneRepublic",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCounting%20Stars.mp3?alt=media&token=dd7eef36-1ed6-48f9-9699-fb3069ee57b3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCounting%20Stars%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ba332777-d5e1-4f8b-8a7a-04f3e9daf172",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:13,
        title: "Dark Horse",
        artist: "Katy Perry",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FDark%20Horse.mp3?alt=media&token=5fe5b4d2-38a0-4304-a609-9e61e881e672",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FDark%20Horse%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0127d02e-5f93-46b2-851e-8312f774ba09",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:14,
        title: "Do What U Want",
        artist: "Lady Gaga",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FDo%20What%20U%20Want.mp3?alt=media&token=532d0fd0-c4d3-468e-bff0-d66239a9a0a4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FDo%20What%20U%20Want%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b3f6a8b0-3f5e-41ca-aa21-fdb4fa574ce3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:15,
        title: "Faith - Radio Edit",
        artist: "Blasterjaxx",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FFaith%20-%20Radio%20Edit.mp3?alt=media&token=996b71f3-6b6b-4edf-8ae2-c758118d6490",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FFaith%20-%20Radio%20Edit%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d97e4953-1aee-44b9-bcbd-7976cc23c876",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:16,
        title: "Feelin' Myself",
        artist: "will.i.am",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FFeelin'%20Myself.mp3?alt=media&token=60e7b4b2-8493-47dc-b40c-073b20603b04",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FFeelin'%20Myself%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=712ddd73-44d0-43cc-a899-047e3417a36d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:17,
        title: "Get Lucky (Radio Edit)",
        artist: "Daft Punk",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FGet%20Lucky%20(Radio%20Edit)%20%5Bfeat.%20Pharrell%20Williams%20and%20Nile%20Rodgers%5D.mp3?alt=media&token=80da148b-d861-4101-93e8-416016586c85",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FGet%20Lucky%20(Radio%20Edit)%20%5Bfeat.%20Pharrell%20Williams%20and%20Nile%20Rodgers%5D%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0c71ebba-7f86-44a2-bc2b-5bc8451e66db",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:18,
        title: "Hall of Fame",
        artist: "The Script",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHall%20of%20Fame%20(feat.%20will.i.am).mp3?alt=media&token=43f0c7ab-0617-4e3d-aca1-1bc4c700a116",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHall%20of%20Fame%20(feat.%20will.i.am)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5e13c3c5-a798-434e-8423-05711e68c9c2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:19,
        title: "Happy",
        artist: "Pharrell Williams",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHappy.mp3?alt=media&token=0149eb8a-986a-4c64-b66a-a0ff89910aff",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHappy%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ad12d0c9-1a9c-4263-bb45-00418678d8ab",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:20,
        title: "Hey Brother",
        artist: "Avicii",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHey%20Brother.mp3?alt=media&token=9d520633-a9e4-4a11-9674-d1f4165ceed4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHey%20Brother%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1f71509e-5727-438f-a04d-e5106693277c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:21,
        title: "Ho Hey",
        artist: "The Lumineers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHo%20Hey.mp3?alt=media&token=e576563d-947f-481c-a5b1-c1a9b09eda66",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHo%20Hey%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c945ecf6-f6a9-4f64-a681-35fb37fc591d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:22,
        title: "Holy Grail",
        artist: "JAY-Z",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHoly%20Grail.mp3?alt=media&token=4b8f5bb7-85c0-4a21-9f47-89d1efe9c291",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHoly%20Grail%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0868c401-211e-4277-8802-175bd6034034",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:23,
        title: "Just Give Me a Reason",
        artist: "P!NK",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FJust%20Give%20Me%20a%20Reason%20(feat.%20Nate%20Ruess).mp3?alt=media&token=0ef0e75b-ec77-4e82-aabe-167116351e99",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FJust%20Give%20Me%20a%20Reason%20(feat.%20Nate%20Ruess)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f47c3494-5d23-408a-8fd9-d190317a07ee",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:24,
        title: "La La La",
        artist: "Naughty Boy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLa%20La%20La.mp3?alt=media&token=2c992e06-f98c-42a2-b712-54ac6b5617c0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLa%20La%20La%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cf209fe9-3340-4e83-8fb6-e332f7496c61",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:25,
        title: "Let Her Go",
        artist: "Passenger",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20Her%20Go.mp3?alt=media&token=91f4fe58-de43-4c0b-9e42-2899e5d91ba8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20Her%20Go%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bac39e90-de16-4b5d-8662-0518fb3919a3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:26,
        title: "Let It Go-Single Version",
        artist: "Demi Lovato",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20it%20go%20Single%20Version.mp3?alt=media&token=9d13652e-7969-4391-adf7-64415cd5a514",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20It%20Go%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_%20(1).jpg?alt=media&token=271ae472-4277-4468-a906-f02b6fb39481",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:27,
        title: "Let It Go-Soundtrack Version",
        artist: "Idina Menzel",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20it%20go%20Soundtrack%20Version.mp3?alt=media&token=161c3473-ec0c-4b08-b431-2244a2ecf0ce",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20It%20Go%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7fbcc48c-d063-4088-a435-c3fa975c3d91",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:28,
        title: "Love Me Again",
        artist: "John Newman",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLove%20Me%20Again.mp3?alt=media&token=fe7dd1d7-aa2a-4804-9cbb-b0f23ec58783",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLove%20Me%20Again%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=00d557f8-1642-4ce9-92ed-bca09698d00b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:29,
        title: "Magic",
        artist: "Coldplay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMagic.mp3?alt=media&token=610715d0-1449-40fe-a13b-cb86644a0166",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMagic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7e9d3a26-0ce7-4d18-8c11-428d257d9a28",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:30,
        title: "Mirrors",
        artist: "Justin Timberlake",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMirrors.mp3?alt=media&token=0e4f1151-9d9f-40bb-8c78-0929138cdb48",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMirrors%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1bb6bcb7-1a38-4bce-932f-22fbcf890540",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:31,
        title: "Money On My Mind",
        artist: "Sam Smith",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMoney%20On%20My%20Mind.mp3?alt=media&token=3524e853-2452-4074-9656-55be04a881b6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMoney%20On%20My%20Mind%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=721de4e0-0627-466e-b8a8-cdd5474b5f8d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:32,
        title: "Papaoutai",
        artist: "Stromae",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FPapaoutai.mp3?alt=media&token=bb22c8d8-d8c3-42f7-a5db-297b2e0c4fb0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FPapaoutai%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79fc1cd8-0f80-4df2-a1bb-39c751301583",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:33,
        title: "Pompeii",
        artist: "Bastille",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FPompeii.mp3?alt=media&token=d3ad2b1f-1776-41a8-a9e8-6bd1cf3396bf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FPompeii%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f8a5b11e-5500-4f18-8712-e68aeb144e86",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:34,
        title: "Rather Be (feat. Jess Glynne)",
        artist: "Clean Bandit",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FRather%20Be%20(feat.%20Jess%20Glynne).mp3?alt=media&token=90633c4b-ab7f-4d32-bdee-d69430a591a9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FRather%20Be%20(feat.%20Jess%20Glynne)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b915889a-1761-4cea-8bcf-1d4f51a72e41",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:35,
        title: "Red Lights",
        artist: "Tiësto",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FRed%20Lights.mp3?alt=media&token=ce748603-6b31-43c0-b4a8-0f7990d77237",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FRed%20Lights%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=eda00227-54e3-406d-b200-67d3461b1050",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:36,
        title: "Safe And Sound",
        artist: "Capital Cities",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSafe%20And%20Sound.mp3?alt=media&token=32703fc1-8926-4e7b-94ab-e45fd3d55891",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSafe%20And%20Sound%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=df11f6d5-4b95-416b-a2db-76e558f41296",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:37,
        title: "Sail",
        artist: "AWOLNATION",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSail.mp3?alt=media&token=510cd8b4-59a5-487a-bef8-97c575965eee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSail%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79db37c4-9f70-42f0-950e-9a4551bf34ea",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:38,
        title: "Say Something",
        artist: "A Great Big World",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSay%20Something.mp3?alt=media&token=d77cbcd7-02ae-4067-987a-7fdda1f58df1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSay%20Something%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=87b35242-a33b-4ec7-8ebf-a2d11000dee6",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:39,
        title: "Shot Me Down",
        artist: "David Guetta",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FShot%20Me%20Down%20(feat.%20Skylar%20Grey)%20-%20Radio%20Edit.mp3?alt=media&token=c0adb61e-0872-478c-94be-df3b8f839e12",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FShot%20Me%20Down%20(feat.%20Skylar%20Grey)%20-%20Radio%20Edit%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d3a5ff45-8ddc-458f-8f0d-d174749c6158",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:40,
        title: "Stay The Night",
        artist: "Zedd",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FStay%20The%20Night%20-%20featuring%20Hayley%20Williams%20of%20Paramore.mp3?alt=media&token=90cab1c5-0bd6-4ca0-9eee-e2a5695e8a73",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FStay%20The%20Night%20-%20featuring%20Hayley%20Williams%20of%20Paramore%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1fed67f8-1e1a-435d-925a-91ee29a6bf22",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:41,
        title: "Story of My Life",
        artist: "One Direction",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FStory%20of%20My%20Life.mp3?alt=media&token=d1b07bcb-c254-48a5-9770-9c35226c9403",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FStory%20of%20My%20Life%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=33e697ae-b828-4076-b07e-42ce1f750f71",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:42,
        title: "Summertime Sadness",
        artist: "Lana Del Rey",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSummertime%20Sadness%20(Lana%20Del%20Rey%20Vs.%20Cedric%20Gervais)%20-%20Cedric%20Gervais%20Remix.mp3?alt=media&token=03ee760d-8c87-42d6-b144-22be9613091a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSummertime%20Sadness%20(Lana%20Del%20Rey%20Vs.%20Cedric%20Gervais)%20-%20Cedric%20Gervais%20Remix%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a3b9fdea-ff62-4bdd-8144-ddad13c4331d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:43,
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSweater%20Weather.mp3?alt=media&token=8f6faeab-d6af-4d30-80da-a6e2e122d6e2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSweater%20Weather%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=fc4789a2-5c7a-438b-804a-4795eb57ae06",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:44,
        title: "Team",
        artist: "Lorde",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTeam.mp3?alt=media&token=db78ab87-ba81-4185-a37f-a1dc6dd015c7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTeam%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ec70c315-ea18-42cb-8e89-ea775bc5e7b0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:45,
        title: "The Man",
        artist: "Aloe Blacc",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FThe%20Man.mp3?alt=media&token=4ad8abe7-497b-49a4-b972-32ecbbd6f130",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FThe%20Man%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5e2ad9f1-cde2-4da4-86de-0f411e54dbab",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:46,
        title: "Timber",
        artist: "Pitbull",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTimber.mp3?alt=media&token=d31d946e-3460-4b01-996c-a6dde0f92bfb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTimber%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e7c6858b-3112-40b0-bbbd-de10be82bbc1",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:47,
        title: "Treasure",
        artist: "Bruno Mars",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTreasure.mp3?alt=media&token=632a2079-00ed-48ff-9aab-e7c5ab2776ee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTreasure%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6af146a9-3530-4621-b5ea-573f6bfe6656",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:48,
        title: "Under Control",
        artist: "Calvin Harris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FUnder%20Control%20(feat.%20Hurts).mp3?alt=media&token=85da404e-13de-4c3d-9832-f26022ef5567",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FUnder%20Control%20(feat.%20Hurts)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9fd639e5-fd86-44a0-b324-cbd9a0b31442",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:49,
        title: "White Walls",
        artist: "Macklemore & Ryan Lewis",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FWhite%20Walls%20(feat.%20ScHoolboy%20Q%20%26%20Hollis).mp3?alt=media&token=ad808f84-3c47-4730-ab07-738ba6237285",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FWhite%20Walls%20(feat.%20ScHoolboy%20Q%20%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=790d66e3-a011-4a18-b051-102a457875e8",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:50,
        title: "Wrecking Ball",
        artist: "Miley Cyrus",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FWrecking%20Ball.mp3?alt=media&token=3f73b540-de52-4c91-8555-da5f2c50eb97",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FWrecking%20Ball%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=98114a04-7a7d-47b9-a148-7800be99709a",
        liked: "cards-heart-outline",
        color: "white"
    }
]

export default popdata;