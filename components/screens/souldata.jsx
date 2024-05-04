const souldata = [
    {
        id:1,
        title: "After All",
        artist: "Noha Saré",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FAfter%20All.mp3?alt=media&token=54a87f0b-a24e-4407-905c-f35f1d70410b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FAfter%20All%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=507e9965-a073-44ed-941f-d182ce1b6105",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:2,
        title: "All My Love",
        artist: "KIRBY",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FAll%20My%20Love.mp3?alt=media&token=b0aa4d63-3335-4a99-b30a-3fcc04f1a685",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FAll%20My%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=86bd0005-e77b-4fab-8552-09d7cc62f618",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:3,
        title: "Back to Me",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FBack%20to%20Me%20(Acoustic).mp3?alt=media&token=60d5935e-5213-4bd3-9dac-300bef40bcfc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FBack%20to%20Me%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=52b7d1c6-217e-495d-b287-a32311cc5b07",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:4,
        title: "Biting These Bullets",
        artist: "NAVENI",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FBiting%20These%20Bullets.mp3?alt=media&token=c1afab0c-a46b-4884-ab94-198e0afbf6b9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FBiting%20These%20Bullets%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a637aa86-ab1b-4255-95a3-201140285efd",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:5,
        title: "Can't Have It All",
        artist: "Cobi",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCan't%20Have%20It%20All%20(Acoustic).mp3?alt=media&token=ec1c1d10-f4cb-4757-8cfc-b89022dfb244",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCan't%20Have%20It%20All%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=152d41fc-7cb2-4039-9e80-7a954d1e1d39",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:6,
        title: "Coffee in the Morning",
        artist: "Aaron Taylor ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCoffee%20in%20the%20Morning.mp3?alt=media&token=531e64d1-37ce-45fc-b04b-207a10cb0be3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCoffee%20in%20the%20Morning%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ac143e20-bbaf-4cca-9284-98ccbe82c9fd",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:7,
        title: "Coolin",
        artist: "Jacob Banks",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCoolin.mp3?alt=media&token=6575bc28-b260-4c55-95f2-bcedd5224761",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCoolin%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=664e7e6e-da65-49cc-a05c-4155b2624279",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:8,
        title: "Cure",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCure%20(Acoustic).mp3?alt=media&token=425d3063-c97a-46a7-92eb-dc1b1092e159",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCure%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c6558366-4b67-4bb5-9b34-1f1c3ec87d2b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:9,
        title: "Deliverer",
        artist: "Antoine Bradford",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FDeliverer.mp3?alt=media&token=5d5af01c-7e41-4cd3-a2c3-c1bfb8fe53ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FDeliverer%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4bf64896-8bd5-4ea6-af18-85b010a5c6dc",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:10,
        title: "Don't Lay It All On Me",
        artist: "Janice",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FDon't%20Lay%20It%20All%20On%20Me.mp3?alt=media&token=1d2b65c0-6775-4fcb-b3c2-7476500d752c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FDon't%20Lay%20It%20All%20On%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c5064afa-cd36-4580-a9a1-7dc7a557d79d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:11,
        title: "GTC(live from my stoop)",
        artist: "Kubla",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGTC%20(live%20from%20my%20stoop).mp3?alt=media&token=b681e9cc-92b8-47e0-8b5c-d468efb6f53d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGTC%20(live%20from%20my%20stoop)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6af3b50f-1af9-4527-81e1-83a9fac70a55",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:12,
        title: "Good Man Down",
        artist: "Common Hymnal",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGood%20Man%20Down.mp3?alt=media&token=622b58bc-a362-417e-b841-3381139daf21",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGood%20Man%20Down%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ed43d565-559a-45e8-83f8-70d531eabdc8",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:13,
        title: "Good Things Fall Apart",
        artist: "Rhonda",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGood%20Things%20Fall%20Apart.mp3?alt=media&token=4a54c159-6b4a-47f6-b075-d57620d66bad",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGood%20Things%20Fall%20Apart%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c3c4c6bc-4364-44c8-8243-c13b2ac40011",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:14,
        title: "Hiding",
        artist: "JELISA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHiding.mp3?alt=media&token=f614d554-c49c-44f1-a9cb-a2908d792a5e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHiding%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=08b58ea2-d922-44a2-9896-ba029c541dda",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:15,
        title: "Hills",
        artist: "Naomi Sharon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHills.mp3?alt=media&token=87610679-5627-4b31-afd3-9d83ffc209c8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHills%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6f1dc846-3d87-464a-bb0b-1656bc45db59",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:16,
        title: "Horsepower For The Streets",
        artist: "Jonathan Jeremiah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHorsepower%20For%20The%20Streets%20-%20Acoustic%20String%20Version.mp3?alt=media&token=be7fdafd-6e4e-4873-ab9d-4bca55da3cb2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHorsepower%20For%20The%20Streets%20-%20Acoustic%20String%20Version%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ac79a90e-4e2f-43b4-a9dd-4cf8c15b7111",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:17,
        title: "Human being",
        artist: "Cézanne",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHuman%20being.mp3?alt=media&token=ca2afc8a-2382-45c3-a8b0-c5f22eeb7f39",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHuman%20being%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0c3814a6-8f9c-4af9-b350-0cfa57212483",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:18,
        title: "I'm Different",
        artist: "Debbie",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FI'm%20Different%20-%20Live%20Acoustic.mp3?alt=media&token=c1e4cb2c-e50b-4f7c-bfa5-a707ba03db61",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FI'm%20Different%20-%20Live%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8e2449af-969f-4eae-a07e-0e6bec87ce1d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:19,
        title: "Is It Any Wonder? ",
        artist: "Durand Jones & The Indications",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FIs%20It%20Any%20Wonder_%20-%20Live%20at%20Paste.mp3?alt=media&token=6b35e0c7-7bad-4863-9ea5-df9985708a80",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FIs%20It%20Any%20Wonder_%20-%20Live%20at%20Paste%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=28cc82b7-8e60-4e5f-87c2-d14682b8d653",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:20,
        title: "Is This Love",
        artist: "Allen Stone",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FIs%20This%20Love.mp3?alt=media&token=562cb2cf-1899-4b8b-b44e-7be8892457b2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FIs%20This%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=47da2eae-18e7-4ec1-ace2-7247dfc8e19f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:21,
        title: "I’m Leaving",
        artist: "The Teskey Brothers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FI%E2%80%99m%20Leaving%20-%20The%20Circle%20Session%2C%202023.mp3?alt=media&token=bae8458c-99fe-473f-8da3-25385bd1c1c4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FI%E2%80%99m%20Leaving%20-%20The%20Circle%20Session%2C%202023%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e7e01493-52bf-4cd2-8a37-e55c6f3bb70e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:22,
        title: "Kaleidoscope",
        artist: "Otis Kane",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FKaleidoscope.mp3?alt=media&token=14428c92-3e0e-4514-99b4-6079521a33f6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FKaleidoscope%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=23e105b8-5a54-436f-8e05-582619af3a7f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:23,
        title: "Let me try",
        artist: "Jamily",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLet%20me%20try.mp3?alt=media&token=1a6ba008-b3dd-44bf-98e5-2a1c6f0d18a2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLet%20me%20try%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=83ed46e7-349a-4532-87a1-34e3c8e72e70",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:24,
        title: "Lonely Love Song",
        artist: "St. Paul & The Broken Bones",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLonely%20Love%20Song.mp3?alt=media&token=cc5a4841-0cc5-4ee6-87d6-f26a961f0a56",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLonely%20Love%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d4b870a8-365c-48eb-aa41-bfcdb65fd72b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:25,
        title: "Lose Control",
        artist: "Teddy Swims",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLose%20Control%20-%20Piano%20Version.mp3?alt=media&token=929af29f-97cc-4dfa-964b-7bcf399d0c94",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLose%20Control%20-%20Piano%20Version%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=00cdd1d5-5333-49d2-8916-182914d58f39",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:26,
        title: "Love Is A Losing Game",
        artist: "TEEKS",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLove%20Is%20A%20Losing%20Game%20-%20Live%20at%20Stebbing%20Studio.mp3?alt=media&token=884a4401-d082-4995-8516-541bcb1ddabd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLove%20Is%20A%20Losing%20Game%20-%20Live%20at%20Stebbing%20Studio%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ff56a67c-e002-48ef-8de1-62acdfa9b8c0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:27,
        title: "Lover, You Should’ve Come Over",
        artist: "Elmiene",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLover%2C%20You%20Should%E2%80%99ve%20Come%20Over.mp3?alt=media&token=a49f363c-ec5a-4830-a44f-903f4fbdc5da",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLover%2C%20You%20Should%E2%80%99ve%20Come%20Over%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5a15c400-8bc2-4ea5-8591-35f5f3b806b8",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:28,
        title: "Mad About You",
        artist: "Son Little",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FMad%20About%20You.mp3?alt=media&token=8a1e6e5a-6bd6-4e52-a8be-4f14b2abec88",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FMad%20About%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=135ff870-cc37-435a-936b-2fe294dd9f71",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:29,
        title: "Magic",
        artist: "Sabrina Starke",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FMagic.mp3?alt=media&token=b5c6f0c3-3abb-4acc-a4a6-3159c9872d1b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FMagic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f8af0990-5dc2-4e55-bbb0-83cad4462137",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:30,
        title: "No Clouds No Love",
        artist: "whothefislou",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FNo%20Clouds%20No%20Love.mp3?alt=media&token=94073095-f21f-4b1b-9cd6-a53e0951a13e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FNo%20Clouds%20No%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=77c7a887-3ce8-418f-9baf-e0b9e29d48ec",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:31,
        title: "Not Serious",
        artist: "Mychelle",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FNot%20Serious%20-%20Acoustic.mp3?alt=media&token=f2482ad0-d810-45f3-840d-e5eb2738a8f9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FNot%20Serious%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6bd988e0-2c55-4965-91f0-7ee2b15c9769",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:32,
        title: "Rent Free",
        artist: "6LACK",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FRent%20Free%20-%20Acoustic.mp3?alt=media&token=1c69eb19-ef57-4383-8fbc-55d12835779f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FRent%20Free%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2da65474-2ce1-441d-8241-85d7db21bba5",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:33,
        title: "SOMEWHERE FAR",
        artist: "Jordan Astra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSOMEWHERE%20FAR.mp3?alt=media&token=c5c5a5e7-fa3f-450a-866b-250a9f6be86c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSOMEWHERE%20FAR%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=64043218-85a7-4a92-8c1b-c36503e6336e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:34,
        title: "STILL HAVE YOU",
        artist: "Jake Isaac",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSTILL%20HAVE%20YOU.mp3?alt=media&token=743f545a-fdeb-4935-9824-fc532b620dea",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSTILL%20HAVE%20YOU%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cb4a280e-e7c3-4544-972e-53ab42ee236a",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:35,
        title: "Say Something",
        artist: "Sinéad Harnett",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSay%20Something.mp3?alt=media&token=c5a832c6-694f-4d38-9673-2d7fa242e1a8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSay%20Something%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5d85d635-f826-4d7c-8f65-6896bf378e95",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:36,
        title: "Self Sabotage",
        artist: "Mychelle",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSelf%20Sabotage%20-%20Acoustic.mp3?alt=media&token=58c2efa8-e9e6-4752-81db-835e79746fd0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSelf%20Sabotage%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0a82bff5-2062-4974-95a9-4eb5e7de0e8e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:37,
        title: "Someday-Unplugged",
        artist: "Elmiene",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSomeday%20-%20Unplugged.mp3?alt=media&token=08a5ea08-e8f9-4dfc-a300-b2ce51f78880",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSomeday%20-%20Unplugged%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ae6d6c10-256b-4eaa-85d7-8ea4b7d1596e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:38,
        title: "Southern Comfort",
        artist: "Bluey Robinson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSouthern%20Comfort.mp3?alt=media&token=b69331d9-7ece-4b74-bc52-d3f15fb00ccd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSouthern%20Comfort%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a323a0df-710a-4a19-9ee1-4a14ba02caa7",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:39,
        title: "The Truth",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThe%20Truth%20(Acoustic).mp3?alt=media&token=1b7d6d57-0fd7-458b-a7d9-58d858cd6bb4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThe%20Truth%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=35ace186-736e-4c2c-ac1a-db15553fa251",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:40,
        title: "Things Meant For Me",
        artist: "Eric Roberson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThings%20Meant%20For%20Me.mp3?alt=media&token=12943889-defd-4c57-b4d6-dd2e45c262d4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThings%20Meant%20For%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c9183299-ee08-475c-b6ba-e1a74c801be6",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:41,
        title: "This Life",
        artist: "Kendra Morris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThis%20Life%20-%20Live.mp3?alt=media&token=0b0f0bdf-cd87-44f6-8b8a-b894e5bb05ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThis%20Life%20-%20Live%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2d102272-b0c5-4936-a02d-4bfc46a52807",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:42,
        title: "Through The Night",
        artist: "Maeta",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThrough%20The%20Night%20(feat.%20Free%20Nationals).mp3?alt=media&token=b8447168-1bb0-4493-9a39-be8623824443",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThrough%20The%20Night%20(feat.%20Free%20Nationals)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5b303fe6-1326-47ea-8c87-3d77c17a7b29",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:43,
        title: "To be naive",
        artist: "Adja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FTo%20be%20naive.mp3?alt=media&token=21f9ef94-9796-483f-b4f9-ce94fc228e47",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FTo%20be%20naive%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2b4ddd35-317d-40c8-9c84-763df63dba86",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:44,
        title: "Unaware",
        artist: "Allen Stone",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FUnaware.mp3?alt=media&token=4a84a408-a40f-40b3-839b-85d77e5cad5c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FUnaware%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bd69b9ce-b632-41e5-b13e-44fa44dc6979",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:45,
        title: "Video Game",
        artist: "Budjerah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FVideo%20Game.mp3?alt=media&token=ea4306dd-3c84-407f-922c-44503d891074",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FVideo%20Game%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9812cac6-4d38-4277-b991-1c05e1f7ac5a",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:46,
        title: "Wake Up",
        artist: "Majo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWake%20Up.mp3?alt=media&token=aa9b689b-b1a1-4b7c-baac-fe12085e8b5a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWake%20Up%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=efdd82b2-4f34-4be7-9674-860c5aeadb64",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:47,
        title: "Where Do We Go",
        artist: "Andra Day",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWhere%20Do%20We%20Go.mp3?alt=media&token=4bd6ead9-7145-4b76-9fb5-c914778fc969",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWhere%20Do%20We%20Go%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1a6865de-49a3-43f1-a72b-cc3f64eebc9d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:48,
        title: "Whoever You Are",
        artist: "ELIZA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWhoever%20You%20Are%20-%20Live%20at%20RAK.mp3?alt=media&token=1e338f7b-726f-4db6-a740-5afcc35184a1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWhoever%20You%20Are%20-%20Live%20at%20RAK%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1a0986f1-bdc3-4e38-996f-ccbe626c0ce0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:49,
        title: "burn out",
        artist: "SOLOMON",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2Fburn%20out.mp3?alt=media&token=6a4c7d4f-1c8b-4f24-91e4-ef88e6437bc0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2Fburn%20out%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c9b8c52-4a5a-4ca5-a816-f875cb80a8d4",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:50,
        title: "i would if i could",
        artist: "Santino Le Saint",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2Fi%20would%20if%20i%20could.mp3?alt=media&token=b5891182-09e3-45a5-bbac-df08c5456336",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2Fi%20would%20if%20i%20could%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=84018930-72e7-4228-aeea-b5d91cb78a9d",
        liked: "cards-heart-outline",
        color: "white"
    }
]

export default souldata;