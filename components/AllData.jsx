const alldata = [
    {
        id:1,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan-faded.mp3?alt=media&token=915dfb8f-2feb-40ba-8758-49201ce86ad5",
        title: "Faded",
        artist: "alan-walker",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan.jpeg?alt=media&token=3a50b284-f9e6-4e2a-9e7f-5c62fefd3930",
        liked: 'cards-heart-outline',
        color: "white"
    },
    {
        id:2,
        title: "Take me to church",
        artist: "Hozier",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Hozier%20-%20Take%20Me%20To%20Church.mp3?alt=media&token=dfbf3fac-dffb-4bbb-8c0c-cb59994b99fa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fhozier.jpg?alt=media&token=6027f8d6-7b95-416c-9fac-1264f8b1db65",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:3,
        title: "SUBEME LA RADIO",
        artist: "Enrique Iglesias",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Enrique%20Iglesias%20-%20SUBEME%20LA%20RADIO.mp3?alt=media&token=8bff92c4-ea2c-46de-bd51-0601f67d3724",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsubema.jpg?alt=media&token=be3b8e18-7bac-4260-a575-928559f2bc0f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:4,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/Believer.mp3?alt=media&token=09e723f5-c19a-46a0-9eee-5bbba68f237f",
        title: "Beleiver",
        artist: "Imagine Dragons",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/believer.jpeg?alt=media&token=1d7f892b-b20e-401f-a16f-d267c37df2bb",
        liked: 'cards-heart-outline',
        color: "white"
    },
    {
        id:5,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/Animals---Maroon-5(PagalWorlld.Com).mp3?alt=media&token=5ef8a75e-3aca-4c9a-aa7e-84fe9560d491",
        title: "Animals",
        artist: "Maroon5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/animals.png?alt=media&token=7a0cdf53-65fe-4d58-844e-e8d95e09e330",
        liked: 'cards-heart-outline',
        color: "white"
    },
    {
        id:6,
        title: "Faded",
        artist: "Alan Walker",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FAlan-Walker%20Faded.mp3?alt=media&token=4b0becf4-50be-4f89-a7c2-5edf44ca4990",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falan-walker.jpeg?alt=media&token=14fbb4bf-ef80-4ba0-88ec-7012e24ad6b2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:7,
        title: "MockingBird",
        artist: "Eminem",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FEminem-MockingBird.mp3?alt=media&token=e14436ce-8fae-4f98-93ed-1b9ca714bd7f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fmockingbird.jpeg?alt=media&token=59114bb3-16f1-4718-a372-9ee7d34620fd",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:8,
        title: "Gangnam Style",
        artist: "PSY",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FGangnam%20Style%20PSY.mp3?alt=media&token=24736b11-b9f3-4128-9fc8-223ac12afc8d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fgangam.png?alt=media&token=29b2ab14-deca-4865-a433-479671f6feb9",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:9,
        title: "Believer",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FImagin-Dragons%20Believer.mp3?alt=media&token=19872702-3625-4c61-a1d1-12ee3fb1be0c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fbeliever.jpeg?alt=media&token=d84c5852-eda4-423b-8605-cf1f4e235fd6",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:10,
        title: "Legends never die",
        artist: "League of legends",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FLegends%20Never%20Die.mp3?alt=media&token=b46c855d-a87d-43fb-99a2-740d9b0e4687",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Flegends.jpeg?alt=media&token=fe45139d-5556-468e-85b0-1a4b042582f5",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:6,
        title: "Lovely",
        artist: "Billie Eilish, Khalid",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FLovely%20Billie%20Eilish%20320%20Kbps.mp3?alt=media&token=9ceeff34-004a-4245-a11a-e3070f26b2bc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Flovely.jpg?alt=media&token=f63da862-2a30-43c5-a2ba-3eeba6fb2520",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:7,
        title: "Blank Space",
        artist: "Taylor Swift",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FTaylor%20Swift-Blank%20Space.mp3?alt=media&token=0b111758-a435-4c9b-a027-3091b95b7b8c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fblankspace.jpeg?alt=media&token=7f8011aa-c649-4d4b-a088-7bef45b37511",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:8,
        title: "Despacito",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fdespacito.mp3?alt=media&token=938695e6-9ee6-4b07-b355-d77d195cfdf1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fdespacito.jpg?alt=media&token=0793c187-1465-4ea1-918f-77aaccf3803f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:9,
        title: "On my Way",
        artist: "Alan Walker",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alan%20Walker%20-%20On%20My%20Way.mp3?alt=media&token=2133e10f-cffb-4fa3-b42f-54bb0b5e78d1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsabrina.jpg?alt=media&token=b59df578-b49a-4e42-a7f0-2eee585a6611",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:10,
        title: "If we have each other",
        artist: "Alec Benjamin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alec%20Benjamin%20-%20If%20We%20Have%20Each%20Other.mp3?alt=media&token=4e795ec5-7f77-4372-bb14-731e8d8e74f5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falec1.jpg?alt=media&token=acd43fd7-3e9f-46b5-8fc5-8f2ab6b5fda1",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:11,
        title: "Fairy Tale",
        artist: "Alexander Rybak",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alexander%20rybak%20-%20fairy%20tale.mp3?alt=media&token=ff4fae17-eeef-466f-a7e0-49b295d4c0d6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Ffairytale.jpeg?alt=media&token=549a4c70-0983-4923-8f05-7bb1bb17fea3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:12,
        title: "Barbie Girl",
        artist: "Aqua",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Aqua%20-%20Barbie%20Girl.mp3?alt=media&token=b1906a4d-10ae-4954-9d1d-e0648086916d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fbarbie.jpg?alt=media&token=9976220d-f802-4fa0-91e1-42b7f6d8972a",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:13,
        title: "Rasputin",
        artist: "Boney M",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Boney%20M%20-%20Rasputin.mp3?alt=media&token=4c126310-5e8c-41f1-a942-3a5e65d53359",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Frasputin.jpeg?alt=media&token=67442aa3-a187-4eed-8bde-8f9302adc3ad",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:14,
        title: "Hymn for the weekend",
        artist: "Coldplay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Coldplay%20-%20Hymn%20For%20The%20Weekend.mp3?alt=media&token=5b3225d0-dfcf-4487-beb1-474cb163d577",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fcoldplay.jpg?alt=media&token=4bf1bda9-cdbb-4d8c-b254-76692df3f104",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:15,
        title: "Gangsta's Paradise",
        artist: "Coolio",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Coolio%20-%20Gangsta's%20Paradise.mp3?alt=media&token=b5dec526-0b87-41bd-9ad3-b551c6035989",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fcoolio.jpg?alt=media&token=c3bcde24-7c92-467c-8cc8-fcdd832ec9f3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:16,
        title: "Shape of You",
        artist: "Ed sheeren",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Ed%20Sheeran%20-%20Shape%20of%20You.mp3?alt=media&token=4f75bfb8-5cc7-4df2-8637-8a1421ef0215",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fshape.png?alt=media&token=8108a0e7-9224-4a95-b0e9-4e9fd05fb2bf",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:18,
        title: "HOPE",
        artist: "xxxtentacion",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Hope-xxxtentacion.mp3?alt=media&token=9971a855-b807-4630-911a-973c571c39b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fxxxtentacion.jpeg?alt=media&token=02097ebf-451a-467b-873a-176237e6136a",
        liked: "cards-heart-outline",
        color: "white"
    },
    
    {
        id:20,
        title: "Satisfya",
        artist: "Imran Khan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Imran%20Khan%20-%20Satisfya.mp3?alt=media&token=a11186c0-2359-4480-8f99-f2d255d19b55",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsatisfya.jpeg?alt=media&token=8eef5e24-2294-4786-998c-a73295860507",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:21,
        title: "Ainsi Bas La Vida",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Indila%20-%20Ainsi%20Bas%20La%20Vida.mp3?alt=media&token=90379248-a2ef-4891-bf0d-7a5aecaa91b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fainsi.jpeg?alt=media&token=13e37698-376b-4240-87a3-36b01590f779",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:22,
        title: "Let me down slowely",
        artist: "Alec Benjamin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Let%20me%20down%20slowly.mp3?alt=media&token=7310c24c-8992-4900-81f4-02cc6aa4bc24",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falec.jpeg?alt=media&token=ad4e1cd6-cb4b-49ed-8218-e602687853d3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:23,
        title: "Perfect",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Perfect%20-%20Ed%20Sheeran.mp3?alt=media&token=adb51f84-33cd-4d92-bcd1-d82d5616a5ff",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fperfect.jpg?alt=media&token=d3a72a01-16b8-494c-a00d-cc16e0c41f8b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:24,
        title: "Dernire Danse",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Indila%20-%20Derni%C3%A8re%20Danse.mp3?alt=media&token=48e4483c-7439-49f9-bb99-c5349996b17d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Findilia.png?alt=media&token=213fb226-a160-421d-94ba-56770db4c26e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:25,
        title: "We will rock you",
        artist: "Queens",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Queen%20-%20We%20will%20rock%20you.mp3?alt=media&token=f8e5f992-fd7b-46c9-bfa4-5e36cac459f2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fqueen.png?alt=media&token=09ed0f63-bcd8-4845-9db2-28eeabdba71d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:26,
        title: "колыбельная",
        artist: "Rauf and Kaif",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Rauf%20%26%20Faik%20-%20%D0%BA%D0%BE%D0%BB%D1%8B%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.mp3?alt=media&token=92aff4f3-7c4b-4f0f-93e0-34e5d5073f33",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Ffaik.jpg?alt=media&token=6fee1169-2338-42da-963a-535c90684ee0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:27,
        title: "Señorita",
        artist: "Camila Cabello, Shawn Mendes",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Senorita.mp3?alt=media&token=789cbeb9-c48d-4964-ae6b-3ad9c0aa2f23",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsenorita.jpeg?alt=media&token=7d47d9d0-e75e-4161-aa38-ea4e5b5efc88",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:28,
        title: "Waka Waka",
        artist: "Shaikra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Shakira%20-%20Waka%20Waka.mp3?alt=media&token=66d1734d-0cdd-4f8d-b12e-c08de5e5637b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fshakira.jpg?alt=media&token=c6774992-8241-4611-a46c-6a4d810a1760",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:29,
        title: "Uptown Funk",
        artist: "Mark Ronson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Uptown%20Funk.mp3?alt=media&token=c8976051-8a3a-4e6f-bddb-7504691098ba",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fuptown.png?alt=media&token=7c75b858-486f-437b-a316-6a9a8095f8d9",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:30,
        title: "See you again",
        artist: "Wiz Khalifa, ft. charlie Puth",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Wiz%20Khalifa%20-%20See%20You%20Again%20ft.%20Charlie%20Puth.mp3?alt=media&token=6b398003-4d07-41c3-94a3-39bb6a517d8f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fkhalifa.jpg?alt=media&token=1bc56812-e8be-4219-9d29-0dd74dd270b2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:31,
        title: "This Is Me/Scars to Your Beautiful",
        artist: "Joey Stampen",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%20Scars%20to%20Your%20Beautiful.mp3?alt=media&token=d5ed14d4-b6bf-490d-af42-d36aa222c879",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FThis%20Is%20Me%20_%20Scars%20to%20Your%20Beautiful%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c8d2828-ecd3-424e-b510-135baedc5ebb",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:32,
        title: "3:15 - Slowed Down + Reverb",
        artist: "Russ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F15%20-%20Slowed%20Down%20%2B%20Reverb.mp3?alt=media&token=67104306-0f15-4bf6-8b3f-3a1042fd997f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F3_15%20-%20Slowed%20Down%20%20%20Reverb%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=fa677598-0194-4fb1-9988-c636fd430d77",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:33,
        title: "After Hours",
        artist: "The weekend",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAfter%20Hours.mp3?alt=media&token=5846de42-fc42-4e7b-9b3c-7a3e76775189+",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAfter%20Hours%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=21c1fe6f-e0f0-4161-82e7-1758b83b7d1a",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:34,
        title: "All Eyez on Me (Remix Gangsta)",
        artist: "Thug Life",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAll%20Eyez%20on%20Me%20(Remix%20Gangsta).mp3?alt=media&token=4a5bc6a7-30a9-4359-b504-52852c9ac090",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAll%20Eyez%20on%20Me%20(Remix%20Gangsta)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=13ce7be5-048d-4077-b7dc-83c0c2fdafe1",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:35,
        title: "Animals",
        artist: "Marroon 5",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAnimals.mp3?alt=media&token=204c5ca0-7641-4fec-92f6-0df09d9b9fac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAnimals%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=90f83a0c-e1e0-41b7-aa61-10b847672c52",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:36,
        title: "Arcade",
        artist: "Duncan Laurence",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FArcade.mp3?alt=media&token=7e9eff2e-7bb9-4a1c-88aa-472e12683629",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FArcade%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9d72e52f-4fdf-4466-8345-81b42f017781",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:37,
        title: " At My Worst (feat. Kehlani)",
        artist: "Pink Sweet$",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAt%20My%20Worst%20(feat.%20Kehlani).mp3?alt=media&token=5d2e553d-45d8-4c37-b0b2-83c35b1e1e53",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAt%20My%20Worst%20(feat.%20Kehlani)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=000a8929-0fa4-4b61-8f6d-f61155a05bdf",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:38,
        title: "Baby",
        artist: "Justin Bieber",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBaby.mp3?alt=media&token=3ed9b232-824a-4c54-804a-cd5a96b64d09",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBaby%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c094e7b9-dace-4d42-aac2-72a2e3220f7b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:39,
        title: "Bad Boy (feat. Luana Kiara)",
        artist: "Raaban",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBad%20Boy%20(feat.%20Luana%20Kiara).mp3?alt=media&token=62e1803e-8fd6-409e-bd8b-baf80b5d21d8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBad%20Boy%20(feat.%20Luana%20Kiara)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7141772d-dd6f-4666-b791-8d859aef4e08",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:40,
        title: "Barbie Girl",
        artist: "Aqua",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBarbie%20Girl.mp3?alt=media&token=da173fd3-b564-4282-b05c-03a9b747a58c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBarbie%20Girl%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ec77cff9-cb97-49c0-b0ba-ad10e572d0e3",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:41,
        title: "Black Beatles",
        artist: "Rae Sremmurd |",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBlack%20Beatles.mp3?alt=media&token=b6999a51-be1e-4675-b874-f6e6266db13d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBlack%20Beatles%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7a0aabce-2e7e-4df6-85dd-2531fd2accbd",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:42,
        title: "Blood Mary",
        artist: "Lady Gaga",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBloody%20Mary.mp3?alt=media&token=5d3dab0d-ee4f-4b94-9d57-203ef411c76d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBloody%20Mary%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=27b682a2-f6f6-4ae3-b5e8-671f30a50900",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:43,
        title: "Bones",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBones.mp3?alt=media&token=cd5d3bfe-9778-4968-b304-998738d59236",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBones%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7aab0089-8705-4c45-9972-97d23c0e27c0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:44,
        title: "Cheap Thrills",
        artist: "Sia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCheap%20Thrills.mp3?alt=media&token=9d6bd0a2-523a-43b9-b570-3bb1b65d4e57",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCheap%20Thrills%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2ddc426d-f476-469d-a512-c438f713d801",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:45,
        title: "Closer",
        artist: "The Chainsmokers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCloser.mp3?alt=media&token=8081e134-5a74-461c-87b5-8a9eba716a96",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCloser%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=73a9feea-52e2-4b37-a94f-f18cca302d4d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:46,
        title: "Co2",
        artist: "Prateek Kuhad",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCo2.mp3?alt=media&token=91513642-9152-4929-803e-b6ba1d489353",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCo2%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=18d8ffa7-2e1c-45de-8d8e-e1c8e224044f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:47,
        title: "Dancing with your Ghost",
        artist: "Sasha Alex Sloan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDancing%20With%20Your%20Ghost.mp3?alt=media&token=aba77c83-bab9-424a-906d-345a9e2f6f44",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDancing%20With%20Your%20Ghost%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=58d2910b-7d03-46c0-840f-303b3d226457",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:48,
        title: "Dandelions",
        artist: "Ruth B.",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDandelions.mp3?alt=media&token=0daed2ff-3879-4763-8e9d-07f44bff9a37",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDandelions%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=abacc2e4-d9c2-49da-bed5-a75f7e06b6f9",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:49,
        title: "Dangerous Women",
        artist: "Ariana Grande",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDangerous%20Woman.mp3?alt=media&token=cdce7924-df98-434d-8a57-2f39bfe6a53f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDangerous%20Woman%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5d2bfe0d-4012-49cc-910c-f7eddf11f30c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:50,
        title: "Desperado",
        artist: "Raghav",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDesperado.mp3?alt=media&token=b72ee574-0bad-4a34-9da7-be6edba4d3a9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDesperado%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f326f763-878c-419f-ab4e-53997cbc2f3d",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:51,
        title: "Dj Don't Stop",
        artist: "Vinky Yete",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDj%20Don't%20Stop.mp3?alt=media&token=88193955-8b52-4859-ba91-68cd5bab0373",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDj%20Don't%20Stop%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3e29ee77-f14b-4dc1-a60a-027f10cb27a2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:52,
        title: "Eenie Meenie",
        artist: "Sean Kingston",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FEenie%20Meenie.mp3?alt=media&token=1ce36ba5-7527-4624-8329-e57ce3bd8683",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FEenie%20Meenie%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=395455ba-3ce4-4ac9-9f4d-4f311f07d1f0",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:53,
        title: "Far alone",
        artist: "Novichok Xenephon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FFar%20Alone.mp3?alt=media&token=0f5b8c81-cd3a-4a1e-aedd-f4cc2e098f1e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FFar%20Alone%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=59e92044-9cc6-4376-b12b-0f327ae93a2c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:54,
        title: "Gangsta's Paradise",
        artist: "Coolio",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGangsta's%20Paradise.mp3?alt=media&token=577a5b4e-e7c5-4d24-8cd7-2de58d6d79f1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGangsta's%20Paradise%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=230a5492-70e2-4e19-8d3c-f1888ad7cc9e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:55,
        title: "Gasolina",
        artist: "Daddy Yankee",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGasolina.mp3?alt=media&token=c65e6b8d-a8b4-469a-9109-7ddbe54ed09d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGasolina%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8cb0526c-6d60-4b3d-b843-a5100cd76e37",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:56,
        title: "Ghenda Phool",
        artist: "Badshah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGenda%20Phool%20(feat.%20Payal%20Dev).mp3?alt=media&token=5292ed41-293e-4a81-8fea-a6de059b1f1c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGenda%20Phool%20(feat.%20Payal%20Dev)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f3c81033-c869-44cc-bf2a-d91ea17e06ed",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:57,
        title: "Give it to me",
        artist: "Timbaland ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGive%20It%20To%20Me.mp3?alt=media&token=c8652624-5cca-4cf4-aea6-456ad321a04d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGive%20It%20To%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f20b6955-e0a0-49e6-b5fe-bf9aabc04efa",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:58,
        title: "Harleys in Hawaii",
        artist: "Katy Perry",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHarleys%20In%20Hawaii.mp3?alt=media&token=f017c275-2092-4376-a55d-cdb89e40f5e9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHarleys%20In%20Hawaii%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0112cdfb-6051-4f9f-b5a9-f43a6978202e",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:59,
        title: "Hate Me (with Juice WRLD)",
        artist: "Ellie Goulding",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHate%20Me%20(with%20Juice%20WRLD).mp3?alt=media&token=803541b2-640e-4be8-a927-2744b0671451",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHate%20Me%20(with%20Juice%20WRLD)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1d54b862-5525-4d50-bbf1-394678293784",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:60,
        title: "Heartbreak Anniversary",
        artist: "Giveon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHeartbreak%20Anniversary.mp3?alt=media&token=068a7fae-7b3b-4388-8330-973ad578e0ae",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHeartbreak%20Anniversary%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9a1ce0ad-7d61-46ec-b140-4a3d31b6df9c",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:61,
        title: "Heat Waves",
        artist: "Glass Animals",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHeat%20Waves.mp3?alt=media&token=c377fb74-258b-42f7-a290-d45cae8d2de4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHeat%20Waves%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d54534e1-c0ba-4d50-bd01-ccc3ba93becb",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:62,
        title: "Hope",
        artist: "XXXTENTACION",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHope.mp3?alt=media&token=adfe57b0-f25a-4ce8-b3b3-27ca3001ed5a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHope%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79e4088e-c3d2-4f30-ab58-c4a5def6bd8d",
        liked: "cards-heart-outline",
        color: "white"

    },
    {
        id:63,
        title: "Hurts so good",
        artist: "Astrid S ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHurts%20So%20Good.mp3?alt=media&token=99d69b86-fb01-4477-bb1d-9d0c8d826f4a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHurts%20So%20Good%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9c684430-170d-441e-af68-47d6336f0366",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:64,
        title: " I Don't Fuck With You",
        artist: "Big Sean",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Don't%20Fuck%20With%20You.mp3?alt=media&token=3826972b-6737-45d8-a22f-714a3ba7a5c2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Don't%20Fuck%20With%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=29c23a6f-234f-4155-bc43-c7d8869ecece",
        liked: "cards-heart-outline",
        color: "white" 
    },
    {
        id:65,
        title: "I wanna be yours",
        artist: "Arctic Monkeys",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Wanna%20Be%20Yours.mp3?alt=media&token=1271d80d-9201-4929-9876-378adf1c5074",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Wanna%20Be%20Yours%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8977624e-c04d-4241-8387-8d21ba26c325",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:66,
        title: "I was never there",
        artist: "The Weeknd",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Was%20Never%20There.mp3?alt=media&token=692d891a-12ce-4d96-a8d3-d3fb329c08fd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Was%20Never%20There%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=afb6f821-097f-4028-8930-6803f0cb1da2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:67,
        title: "INDUSTRY BABY (feat. Jack Harlow)",
        artist: "Lil Nas X",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FINDUSTRY%20BABY%20(feat.%20Jack%20Harlow).mp3?alt=media&token=92998fdd-a964-4bd6-8f5b-4096e97ee3e4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FINDUSTRY%20BABY%20(feat.%20Jack%20Harlow)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=33118471-204b-4c5f-ae6d-50fce4aa4433",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:68,
        title: "In the End",
        artist: "Tommee Profitt",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FIn%20The%20End.mp3?alt=media&token=c0363627-3625-4ef3-8f56-381955fc6a44",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FIn%20The%20End%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=985503d6-6d7c-4d03-a703-b82b8f8c3cf2",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:69,
        title: "Jalebi Baby",
        artist: "Tesher x Jason Derulo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FJalebi%20Baby%20(Tesher%20x%20Jason%20Derulo).mp3?alt=media&token=8f8f4c46-a1ee-4f02-a444-2a43f265f58e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FJalebi%20Baby%20(Tesher%20x%20Jason%20Derulo)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=689c6709-3967-4725-8b9f-2c8278df4bc1",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:70,
        title: "Levitating",
        artist: "Dua Lipa",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FLevitating.mp3?alt=media&token=e2b8c44f-4613-4f74-a90b-39a67b5a7774",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FLevitating%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=320eb473-bf05-4f77-ae00-b8d70493eab6",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:71,
        title: "Middle of the night",
        artist: "Elley Duhé",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMIDDLE%20OF%20THE%20NIGHT.mp3?alt=media&token=770b28f6-3137-4d94-8e9b-ef45e9b0564a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMIDDLE%20OF%20THE%20NIGHT%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=559ab40d-5319-4224-8778-3ccd213b619b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:72,
        title: "Mask Off",
        artist: "Future",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMask%20Off.mp3?alt=media&token=64197e9a-f8c4-46a0-977e-40b7097f1c9c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMask%20Off%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a4b8575f-fc4c-410a-a176-a07893efaebc",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:73,
        title: "MockingBird",
        artist: "Eminem",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMockingbird.mp3?alt=media&token=7eb3e909-657a-493c-8f2d-e81edf79cb4d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMockingbird%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=da43121a-dc36-485e-b66c-7ebf1fcddf25",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:74,
        title: "No Lie",
        artist: "Sean Paul",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FNo%20Lie.mp3?alt=media&token=c04a9ac6-46c2-4fbf-ad90-b850549aa352",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FNo%20Lie%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b13511c7-2f57-4f16-981a-1abf7e0cb9f7",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:75,
        title: "Old Town Road - Remix",
        artist: "Lil Nas X",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FOld%20Town%20Road%20-%20Remix.mp3?alt=media&token=446e16b5-8624-427c-a4d5-30c78383ac98",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FOld%20Town%20Road%20-%20Remix%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0136a6b0-2632-4bc2-b529-db67a71c9fd1",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:76,
        title: "One Kiss (with Dua Lipa)",
        artist: "Calvin Harris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FOne%20Kiss%20(with%20Dua%20Lipa).mp3?alt=media&token=d40e7e4b-3734-4145-96f8-1b74c7720725",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FOne%20Kiss%20(with%20Dua%20Lipa)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a660a1c1-f47f-4b9d-9195-f970c42ba451",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:77,
        title: "Peaky Blinder",
        artist: "Otnicka",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FPeaky%20Blinder.mp3?alt=media&token=d3af740a-e2d8-44b6-8c95-dd7a9bb4f0b7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FPeaky%20Blinder%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f0d6976d-a013-4c8b-87af-b0946ee0bb6f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:78,
        title: "Perfect",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FPerfect.mp3?alt=media&token=f0d1356b-d3d8-4e84-81ba-7218a2369321",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FPerfect%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f24f3037-9eb9-426c-9d70-e9519f29088b",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:79,
        title: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FSee%20You%20Again%20(feat.%20Charlie%20Puth).mp3?alt=media&token=73a1365c-3e14-44f9-adf9-cfcb4120249c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FSee%20You%20Again%20(feat.%20Charlie%20Puth)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=92bf4d6c-73c8-4187-887e-49637d949350",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:80,
        title: "Señorita",
        artist: "Shawn Mendes",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FSe%C3%B1orita.mp3?alt=media&token=36ccfd6d-7e5f-4e14-89d2-e83888fd1af2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FSe%C3%B1orita%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=42674464-3afd-47c8-a26f-db8fe1bcbaa9",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:81,
        title: "Shape of You",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FShape%20of%20You.mp3?alt=media&token=bd2b2aae-e3c1-464b-a1d8-b3fcdf4ea9a4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FShape%20of%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=604af5bc-50cc-4264-83e6-b2a54bd1454f",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:82,
        title: "Wannabe",
        artist: "why mona",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FWannabe.mp3?alt=media&token=1a74d255-b5b9-43bf-bb51-26e4113f1e81",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FWannabe%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3e921f2d-fd2e-4947-bd13-9023f7762231",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:83,
        title: "Lovely",
        artist: "Billie Eilish",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2Flovely%20(with%20Khalid).mp3?alt=media&token=1b5739a0-b1b2-4ecc-a026-6967bd67ff77",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2Flovely%20(with%20Khalid)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0b816d69-6509-4d91-8d76-56ae33ef0788",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:84,
        title: "Отключаю телефон",
        artist: "INSTASAMKA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%D0%9E%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%8E%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD.mp3?alt=media&token=2d68549c-b57b-473f-8259-055e9475ee27",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F%D0%9E%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%8E%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cbff244e-98ae-41c6-a2f2-ae70ba7548a6",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:85,
        title: "燈",
        artist: "Soushi Sakiyama",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%E7%87%88.mp3?alt=media&token=960f3a86-a12a-41b5-8cc8-367a403148c1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F%E7%87%88%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=aa34f759-311f-4a94-bada-8fda2839cef8",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:86,
        title: "Stereo Love",
        artist: "Edward Maya",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FStereo%20Love.mp3?alt=media&token=12f3a782-e3a4-437a-bab7-0df20213e392",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FStereo%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b4090b32-c1f8-42c1-bebf-d53642395197",
        liked: "cards-heart-outline",
        color: "white"
    },
    {
        id:87,
        title: "Time Traveller",
        artist: "M.I.A.",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FTime%20Traveller.mp3?alt=media&token=c7518b18-c383-43df-9621-ec2bd9691c8f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FTime%20Traveller%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ce9d0c62-ac5f-4a8c-a378-032e836bb2bc",
        liked: "cards-heart-outline",
        color: "white"
    },

]

export default alldata;