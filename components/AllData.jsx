const alldata = [
    {
        id:1,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan-faded.mp3?alt=media&token=915dfb8f-2feb-40ba-8758-49201ce86ad5",
        title: "Faded",
        artist: "alan-walker",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan.jpeg?alt=media&token=3a50b284-f9e6-4e2a-9e7f-5c62fefd3930",
        liked: 'cards-heart-outline',
        color: "white",
        
    },
    {
        id:2,
        title: "Take me to church",
        artist: "Hozier",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Hozier%20-%20Take%20Me%20To%20Church.mp3?alt=media&token=dfbf3fac-dffb-4bbb-8c0c-cb59994b99fa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fhozier.jpg?alt=media&token=6027f8d6-7b95-416c-9fac-1264f8b1db65",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:3,
        title: "SUBEME LA RADIO",
        artist: "Enrique Iglesias",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Enrique%20Iglesias%20-%20SUBEME%20LA%20RADIO.mp3?alt=media&token=8bff92c4-ea2c-46de-bd51-0601f67d3724",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsubema.jpg?alt=media&token=be3b8e18-7bac-4260-a575-928559f2bc0f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:4,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/Believer.mp3?alt=media&token=09e723f5-c19a-46a0-9eee-5bbba68f237f",
        title: "Beleiver",
        artist: "Imagine Dragons",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/believer.jpeg?alt=media&token=1d7f892b-b20e-401f-a16f-d267c37df2bb",
        liked: 'cards-heart-outline',
        color: "white",
        
    },
    {
        id:5,
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/Animals---Maroon-5(PagalWorlld.Com).mp3?alt=media&token=5ef8a75e-3aca-4c9a-aa7e-84fe9560d491",
        title: "Animals",
        artist: "Maroon5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/animals.png?alt=media&token=7a0cdf53-65fe-4d58-844e-e8d95e09e330",
        liked: 'cards-heart-outline',
        color: "white",
        
    },
    {
        id:6,
        title: "Faded",
        artist: "Alan Walker",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FAlan-Walker%20Faded.mp3?alt=media&token=4b0becf4-50be-4f89-a7c2-5edf44ca4990",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falan-walker.jpeg?alt=media&token=14fbb4bf-ef80-4ba0-88ec-7012e24ad6b2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:7,
        title: "MockingBird",
        artist: "Eminem",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FEminem-MockingBird.mp3?alt=media&token=e14436ce-8fae-4f98-93ed-1b9ca714bd7f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fmockingbird.jpeg?alt=media&token=59114bb3-16f1-4718-a372-9ee7d34620fd",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:8,
        title: "Gangnam Style",
        artist: "PSY",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FGangnam%20Style%20PSY.mp3?alt=media&token=24736b11-b9f3-4128-9fc8-223ac12afc8d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fgangam.png?alt=media&token=29b2ab14-deca-4865-a433-479671f6feb9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:9,
        title: "Believer",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FImagin-Dragons%20Believer.mp3?alt=media&token=19872702-3625-4c61-a1d1-12ee3fb1be0c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fbeliever.jpeg?alt=media&token=d84c5852-eda4-423b-8605-cf1f4e235fd6",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:10,
        title: "Legends never die",
        artist: "League of legends",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FLegends%20Never%20Die.mp3?alt=media&token=b46c855d-a87d-43fb-99a2-740d9b0e4687",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Flegends.jpeg?alt=media&token=fe45139d-5556-468e-85b0-1a4b042582f5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:11,
        title: "Lovely(german pop)",
        artist: "Billie Eilish, Khalid",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FLovely%20Billie%20Eilish%20320%20Kbps.mp3?alt=media&token=9ceeff34-004a-4245-a11a-e3070f26b2bc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Flovely.jpg?alt=media&token=f63da862-2a30-43c5-a2ba-3eeba6fb2520",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:12,
        title: "Blank Space",
        artist: "Taylor Swift",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2FTaylor%20Swift-Blank%20Space.mp3?alt=media&token=0b111758-a435-4c9b-a027-3091b95b7b8c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fblankspace.jpeg?alt=media&token=7f8011aa-c649-4d4b-a088-7bef45b37511",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:13,
        title: "Despacito",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fdespacito.mp3?alt=media&token=938695e6-9ee6-4b07-b355-d77d195cfdf1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fdespacito.jpg?alt=media&token=0793c187-1465-4ea1-918f-77aaccf3803f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:14,
        title: "On my Way",
        artist: "Alan Walker",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alan%20Walker%20-%20On%20My%20Way.mp3?alt=media&token=2133e10f-cffb-4fa3-b42f-54bb0b5e78d1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsabrina.jpg?alt=media&token=b59df578-b49a-4e42-a7f0-2eee585a6611",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:15,
        title: "If we have each other",
        artist: "Alec Benjamin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alec%20Benjamin%20-%20If%20We%20Have%20Each%20Other.mp3?alt=media&token=4e795ec5-7f77-4372-bb14-731e8d8e74f5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falec1.jpg?alt=media&token=acd43fd7-3e9f-46b5-8fc5-8f2ab6b5fda1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:16,
        title: "Fairy Tale",
        artist: "Alexander Rybak",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Alexander%20rybak%20-%20fairy%20tale.mp3?alt=media&token=ff4fae17-eeef-466f-a7e0-49b295d4c0d6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Ffairytale.jpeg?alt=media&token=549a4c70-0983-4923-8f05-7bb1bb17fea3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:17,
        title: "Barbie Girl",
        artist: "Aqua",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Aqua%20-%20Barbie%20Girl.mp3?alt=media&token=b1906a4d-10ae-4954-9d1d-e0648086916d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fbarbie.jpg?alt=media&token=9976220d-f802-4fa0-91e1-42b7f6d8972a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:18,
        title: "Rasputin",
        artist: "Boney M",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Boney%20M%20-%20Rasputin.mp3?alt=media&token=4c126310-5e8c-41f1-a942-3a5e65d53359",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Frasputin.jpeg?alt=media&token=67442aa3-a187-4eed-8bde-8f9302adc3ad",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:19,
        title: "Hymn for the weekend",
        artist: "Coldplay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Coldplay%20-%20Hymn%20For%20The%20Weekend.mp3?alt=media&token=5b3225d0-dfcf-4487-beb1-474cb163d577",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fcoldplay.jpg?alt=media&token=4bf1bda9-cdbb-4d8c-b254-76692df3f104",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:20,
        title: "Gangsta's Paradise",
        artist: "Coolio",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Coolio%20-%20Gangsta's%20Paradise.mp3?alt=media&token=b5dec526-0b87-41bd-9ad3-b551c6035989",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fcoolio.jpg?alt=media&token=c3bcde24-7c92-467c-8cc8-fcdd832ec9f3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:21,
        title: "Shape of You",
        artist: "Ed sheeren",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Ed%20Sheeran%20-%20Shape%20of%20You.mp3?alt=media&token=4f75bfb8-5cc7-4df2-8637-8a1421ef0215",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fshape.png?alt=media&token=8108a0e7-9224-4a95-b0e9-4e9fd05fb2bf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:22,
        title: "HOPE",
        artist: "xxxtentacion",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Hope-xxxtentacion.mp3?alt=media&token=9971a855-b807-4630-911a-973c571c39b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fxxxtentacion.jpeg?alt=media&token=02097ebf-451a-467b-873a-176237e6136a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    
    {
        id:23,
        title: "Satisfya",
        artist: "Imran Khan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Imran%20Khan%20-%20Satisfya.mp3?alt=media&token=a11186c0-2359-4480-8f99-f2d255d19b55",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsatisfya.jpeg?alt=media&token=8eef5e24-2294-4786-998c-a73295860507",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:24,
        title: "Ainsi Bas La Vida",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Indila%20-%20Ainsi%20Bas%20La%20Vida.mp3?alt=media&token=90379248-a2ef-4891-bf0d-7a5aecaa91b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fainsi.jpeg?alt=media&token=13e37698-376b-4240-87a3-36b01590f779",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:25,
        title: "Let me down slowely",
        artist: "Alec Benjamin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Let%20me%20down%20slowly.mp3?alt=media&token=7310c24c-8992-4900-81f4-02cc6aa4bc24",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Falec.jpeg?alt=media&token=ad4e1cd6-cb4b-49ed-8218-e602687853d3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:26,
        title: "Perfect",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Perfect%20-%20Ed%20Sheeran.mp3?alt=media&token=adb51f84-33cd-4d92-bcd1-d82d5616a5ff",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fperfect.jpg?alt=media&token=d3a72a01-16b8-494c-a00d-cc16e0c41f8b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:27,
        title: "Dernire Danse",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Indila%20-%20Derni%C3%A8re%20Danse.mp3?alt=media&token=48e4483c-7439-49f9-bb99-c5349996b17d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Findilia.png?alt=media&token=213fb226-a160-421d-94ba-56770db4c26e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:28,
        title: "We will rock you",
        artist: "Queens",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Queen%20-%20We%20will%20rock%20you.mp3?alt=media&token=f8e5f992-fd7b-46c9-bfa4-5e36cac459f2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fqueen.png?alt=media&token=09ed0f63-bcd8-4845-9db2-28eeabdba71d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:29,
        title: "колыбельная",
        artist: "Rauf and Kaif",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Rauf%20%26%20Faik%20-%20%D0%BA%D0%BE%D0%BB%D1%8B%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.mp3?alt=media&token=92aff4f3-7c4b-4f0f-93e0-34e5d5073f33",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Ffaik.jpg?alt=media&token=6fee1169-2338-42da-963a-535c90684ee0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:30,
        title: "Señorita",
        artist: "Camila Cabello, Shawn Mendes",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Senorita.mp3?alt=media&token=789cbeb9-c48d-4964-ae6b-3ad9c0aa2f23",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fsenorita.jpeg?alt=media&token=7d47d9d0-e75e-4161-aa38-ea4e5b5efc88",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:31,
        title: "Waka Waka",
        artist: "Shaikra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Shakira%20-%20Waka%20Waka.mp3?alt=media&token=66d1734d-0cdd-4f8d-b12e-c08de5e5637b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fshakira.jpg?alt=media&token=c6774992-8241-4611-a46c-6a4d810a1760",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:32,
        title: "Uptown Funk",
        artist: "Mark Ronson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Uptown%20Funk.mp3?alt=media&token=c8976051-8a3a-4e6f-bddb-7504691098ba",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fuptown.png?alt=media&token=7c75b858-486f-437b-a316-6a9a8095f8d9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:33,
        title: "See you again",
        artist: "Wiz Khalifa, ft. charlie Puth",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fbest%2Fsongs_Wiz%20Khalifa%20-%20See%20You%20Again%20ft.%20Charlie%20Puth.mp3?alt=media&token=6b398003-4d07-41c3-94a3-39bb6a517d8f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fbest%2Fkhalifa.jpg?alt=media&token=1bc56812-e8be-4219-9d29-0dd74dd270b2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:34,
        title: "This Is Me/Scars to Your Beautiful",
        artist: "Joey Stampen",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%20Scars%20to%20Your%20Beautiful.mp3?alt=media&token=d5ed14d4-b6bf-490d-af42-d36aa222c879",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FThis%20Is%20Me%20_%20Scars%20to%20Your%20Beautiful%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c8d2828-ecd3-424e-b510-135baedc5ebb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:35,
        title: "3:15 - Slowed Down + Reverb",
        artist: "Russ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F15%20-%20Slowed%20Down%20%2B%20Reverb.mp3?alt=media&token=67104306-0f15-4bf6-8b3f-3a1042fd997f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F3_15%20-%20Slowed%20Down%20%20%20Reverb%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=fa677598-0194-4fb1-9988-c636fd430d77",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:36,
        title: "After Hours",
        artist: "The weekend",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAfter%20Hours.mp3?alt=media&token=5846de42-fc42-4e7b-9b3c-7a3e76775189+",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAfter%20Hours%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=21c1fe6f-e0f0-4161-82e7-1758b83b7d1a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:37,
        title: "All Eyez on Me (Remix Gangsta)",
        artist: "Thug Life",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAll%20Eyez%20on%20Me%20(Remix%20Gangsta).mp3?alt=media&token=4a5bc6a7-30a9-4359-b504-52852c9ac090",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAll%20Eyez%20on%20Me%20(Remix%20Gangsta)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=13ce7be5-048d-4077-b7dc-83c0c2fdafe1",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:38,
        title: "Animals",
        artist: "Marroon 5",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAnimals.mp3?alt=media&token=204c5ca0-7641-4fec-92f6-0df09d9b9fac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAnimals%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=90f83a0c-e1e0-41b7-aa61-10b847672c52",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:39,
        title: "Arcade",
        artist: "Duncan Laurence",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FArcade.mp3?alt=media&token=7e9eff2e-7bb9-4a1c-88aa-472e12683629",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FArcade%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9d72e52f-4fdf-4466-8345-81b42f017781",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:40,
        title: " At My Worst (feat. Kehlani)",
        artist: "Pink Sweet$",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FAt%20My%20Worst%20(feat.%20Kehlani).mp3?alt=media&token=5d2e553d-45d8-4c37-b0b2-83c35b1e1e53",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FAt%20My%20Worst%20(feat.%20Kehlani)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=000a8929-0fa4-4b61-8f6d-f61155a05bdf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:41,
        title: "Baby",
        artist: "Justin Bieber",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBaby.mp3?alt=media&token=3ed9b232-824a-4c54-804a-cd5a96b64d09",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBaby%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c094e7b9-dace-4d42-aac2-72a2e3220f7b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:42,
        title: "Bad Boy (feat. Luana Kiara)",
        artist: "Raaban",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBad%20Boy%20(feat.%20Luana%20Kiara).mp3?alt=media&token=62e1803e-8fd6-409e-bd8b-baf80b5d21d8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBad%20Boy%20(feat.%20Luana%20Kiara)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7141772d-dd6f-4666-b791-8d859aef4e08",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:43,
        title: "Barbie Girl",
        artist: "Aqua",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBarbie%20Girl.mp3?alt=media&token=da173fd3-b564-4282-b05c-03a9b747a58c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBarbie%20Girl%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ec77cff9-cb97-49c0-b0ba-ad10e572d0e3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:44,
        title: "Black Beatles",
        artist: "Rae Sremmurd |",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBlack%20Beatles.mp3?alt=media&token=b6999a51-be1e-4675-b874-f6e6266db13d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBlack%20Beatles%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7a0aabce-2e7e-4df6-85dd-2531fd2accbd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:45,
        title: "Blood Mary",
        artist: "Lady Gaga",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBloody%20Mary.mp3?alt=media&token=5d3dab0d-ee4f-4b94-9d57-203ef411c76d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBloody%20Mary%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=27b682a2-f6f6-4ae3-b5e8-671f30a50900",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:46,
        title: "Bones",
        artist: "Imagine Dragons",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FBones.mp3?alt=media&token=cd5d3bfe-9778-4968-b304-998738d59236",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FBones%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7aab0089-8705-4c45-9972-97d23c0e27c0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:47,
        title: "Cheap Thrills",
        artist: "Sia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCheap%20Thrills.mp3?alt=media&token=9d6bd0a2-523a-43b9-b570-3bb1b65d4e57",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCheap%20Thrills%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2ddc426d-f476-469d-a512-c438f713d801",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:48,
        title: "Closer",
        artist: "The Chainsmokers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCloser.mp3?alt=media&token=8081e134-5a74-461c-87b5-8a9eba716a96",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCloser%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=73a9feea-52e2-4b37-a94f-f18cca302d4d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:49,
        title: "Co2",
        artist: "Prateek Kuhad",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FCo2.mp3?alt=media&token=91513642-9152-4929-803e-b6ba1d489353",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FCo2%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=18d8ffa7-2e1c-45de-8d8e-e1c8e224044f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:50,
        title: "Dancing with your Ghost",
        artist: "Sasha Alex Sloan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDancing%20With%20Your%20Ghost.mp3?alt=media&token=aba77c83-bab9-424a-906d-345a9e2f6f44",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDancing%20With%20Your%20Ghost%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=58d2910b-7d03-46c0-840f-303b3d226457",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:51,
        title: "Dandelions",
        artist: "Ruth B.",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDandelions.mp3?alt=media&token=0daed2ff-3879-4763-8e9d-07f44bff9a37",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDandelions%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=abacc2e4-d9c2-49da-bed5-a75f7e06b6f9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:52,
        title: "Dangerous Women",
        artist: "Ariana Grande",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDangerous%20Woman.mp3?alt=media&token=cdce7924-df98-434d-8a57-2f39bfe6a53f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDangerous%20Woman%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5d2bfe0d-4012-49cc-910c-f7eddf11f30c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:53,
        title: "Desperado",
        artist: "Raghav",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDesperado.mp3?alt=media&token=b72ee574-0bad-4a34-9da7-be6edba4d3a9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDesperado%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f326f763-878c-419f-ab4e-53997cbc2f3d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:54,
        title: "Dj Don't Stop",
        artist: "Vinky Yete",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FDj%20Don't%20Stop.mp3?alt=media&token=88193955-8b52-4859-ba91-68cd5bab0373",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FDj%20Don't%20Stop%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3e29ee77-f14b-4dc1-a60a-027f10cb27a2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:55,
        title: "Eenie Meenie",
        artist: "Sean Kingston",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FEenie%20Meenie.mp3?alt=media&token=1ce36ba5-7527-4624-8329-e57ce3bd8683",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FEenie%20Meenie%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=395455ba-3ce4-4ac9-9f4d-4f311f07d1f0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:56,
        title: "Far alone",
        artist: "Novichok Xenephon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FFar%20Alone.mp3?alt=media&token=0f5b8c81-cd3a-4a1e-aedd-f4cc2e098f1e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FFar%20Alone%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=59e92044-9cc6-4376-b12b-0f327ae93a2c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:57,
        title: "Gangsta's Paradise",
        artist: "Coolio",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGangsta's%20Paradise.mp3?alt=media&token=577a5b4e-e7c5-4d24-8cd7-2de58d6d79f1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGangsta's%20Paradise%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=230a5492-70e2-4e19-8d3c-f1888ad7cc9e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:58,
        title: "Gasolina",
        artist: "Daddy Yankee",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGasolina.mp3?alt=media&token=c65e6b8d-a8b4-469a-9109-7ddbe54ed09d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGasolina%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8cb0526c-6d60-4b3d-b843-a5100cd76e37",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:59,
        title: "Ghenda Phool",
        artist: "Badshah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGenda%20Phool%20(feat.%20Payal%20Dev).mp3?alt=media&token=5292ed41-293e-4a81-8fea-a6de059b1f1c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGenda%20Phool%20(feat.%20Payal%20Dev)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f3c81033-c869-44cc-bf2a-d91ea17e06ed",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:60,
        title: "Give it to me",
        artist: "Timbaland ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FGive%20It%20To%20Me.mp3?alt=media&token=c8652624-5cca-4cf4-aea6-456ad321a04d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FGive%20It%20To%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f20b6955-e0a0-49e6-b5fe-bf9aabc04efa",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:61,
        title: "Harleys in Hawaii",
        artist: "Katy Perry",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHarleys%20In%20Hawaii.mp3?alt=media&token=f017c275-2092-4376-a55d-cdb89e40f5e9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHarleys%20In%20Hawaii%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0112cdfb-6051-4f9f-b5a9-f43a6978202e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:62,
        title: "Hate Me (with Juice WRLD)",
        artist: "Ellie Goulding",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHate%20Me%20(with%20Juice%20WRLD).mp3?alt=media&token=803541b2-640e-4be8-a927-2744b0671451",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHate%20Me%20(with%20Juice%20WRLD)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1d54b862-5525-4d50-bbf1-394678293784",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:63,
        title: "Heartbreak Anniversary",
        artist: "Giveon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHeartbreak%20Anniversary.mp3?alt=media&token=068a7fae-7b3b-4388-8330-973ad578e0ae",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHeartbreak%20Anniversary%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9a1ce0ad-7d61-46ec-b140-4a3d31b6df9c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:64,
        title: "Heat Waves",
        artist: "Glass Animals",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHeat%20Waves.mp3?alt=media&token=c377fb74-258b-42f7-a290-d45cae8d2de4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHeat%20Waves%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d54534e1-c0ba-4d50-bd01-ccc3ba93becb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:65,
        title: "Hope",
        artist: "XXXTENTACION",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHope.mp3?alt=media&token=adfe57b0-f25a-4ce8-b3b3-27ca3001ed5a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHope%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79e4088e-c3d2-4f30-ab58-c4a5def6bd8d",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:66,
        title: "Hurts so good",
        artist: "Astrid S ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FHurts%20So%20Good.mp3?alt=media&token=99d69b86-fb01-4477-bb1d-9d0c8d826f4a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FHurts%20So%20Good%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9c684430-170d-441e-af68-47d6336f0366",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:67,
        title: " I Don't Fuck With You",
        artist: "Big Sean",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Don't%20Fuck%20With%20You.mp3?alt=media&token=3826972b-6737-45d8-a22f-714a3ba7a5c2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Don't%20Fuck%20With%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=29c23a6f-234f-4155-bc43-c7d8869ecece",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:68,
        title: "I wanna be yours",
        artist: "Arctic Monkeys",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Wanna%20Be%20Yours.mp3?alt=media&token=1271d80d-9201-4929-9876-378adf1c5074",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Wanna%20Be%20Yours%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8977624e-c04d-4241-8387-8d21ba26c325",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:69,
        title: "I was never there",
        artist: "The Weeknd",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FI%20Was%20Never%20There.mp3?alt=media&token=692d891a-12ce-4d96-a8d3-d3fb329c08fd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FI%20Was%20Never%20There%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=afb6f821-097f-4028-8930-6803f0cb1da2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:70,
        title: "INDUSTRY BABY (feat. Jack Harlow)",
        artist: "Lil Nas X",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FINDUSTRY%20BABY%20(feat.%20Jack%20Harlow).mp3?alt=media&token=92998fdd-a964-4bd6-8f5b-4096e97ee3e4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FINDUSTRY%20BABY%20(feat.%20Jack%20Harlow)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=33118471-204b-4c5f-ae6d-50fce4aa4433",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:71,
        title: "In the End",
        artist: "Tommee Profitt",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FIn%20The%20End.mp3?alt=media&token=c0363627-3625-4ef3-8f56-381955fc6a44",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FIn%20The%20End%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=985503d6-6d7c-4d03-a703-b82b8f8c3cf2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:72,
        title: "Jalebi Baby",
        artist: "Tesher x Jason Derulo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FJalebi%20Baby%20(Tesher%20x%20Jason%20Derulo).mp3?alt=media&token=8f8f4c46-a1ee-4f02-a444-2a43f265f58e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FJalebi%20Baby%20(Tesher%20x%20Jason%20Derulo)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=689c6709-3967-4725-8b9f-2c8278df4bc1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:73,
        title: "Levitating",
        artist: "Dua Lipa",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FLevitating.mp3?alt=media&token=e2b8c44f-4613-4f74-a90b-39a67b5a7774",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FLevitating%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=320eb473-bf05-4f77-ae00-b8d70493eab6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:74,
        title: "Middle of the night",
        artist: "Elley Duhé",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMIDDLE%20OF%20THE%20NIGHT.mp3?alt=media&token=770b28f6-3137-4d94-8e9b-ef45e9b0564a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMIDDLE%20OF%20THE%20NIGHT%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=559ab40d-5319-4224-8778-3ccd213b619b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:75,
        title: "Mask Off",
        artist: "Future",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMask%20Off.mp3?alt=media&token=64197e9a-f8c4-46a0-977e-40b7097f1c9c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMask%20Off%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a4b8575f-fc4c-410a-a176-a07893efaebc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:76,
        title: "MockingBird",
        artist: "Eminem",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FMockingbird.mp3?alt=media&token=7eb3e909-657a-493c-8f2d-e81edf79cb4d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FMockingbird%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=da43121a-dc36-485e-b66c-7ebf1fcddf25",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:77,
        title: "No Lie",
        artist: "Sean Paul",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FNo%20Lie.mp3?alt=media&token=c04a9ac6-46c2-4fbf-ad90-b850549aa352",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FNo%20Lie%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b13511c7-2f57-4f16-981a-1abf7e0cb9f7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:78,
        title: "Old Town Road - Remix",
        artist: "Lil Nas X",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FOld%20Town%20Road%20-%20Remix.mp3?alt=media&token=446e16b5-8624-427c-a4d5-30c78383ac98",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FOld%20Town%20Road%20-%20Remix%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0136a6b0-2632-4bc2-b529-db67a71c9fd1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:79,
        title: "One Kiss (with Dua Lipa)",
        artist: "Calvin Harris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FOne%20Kiss%20(with%20Dua%20Lipa).mp3?alt=media&token=d40e7e4b-3734-4145-96f8-1b74c7720725",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FOne%20Kiss%20(with%20Dua%20Lipa)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a660a1c1-f47f-4b9d-9195-f970c42ba451",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:80,
        title: "Peaky Blinder",
        artist: "Otnicka",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FPeaky%20Blinder.mp3?alt=media&token=d3af740a-e2d8-44b6-8c95-dd7a9bb4f0b7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FPeaky%20Blinder%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f0d6976d-a013-4c8b-87af-b0946ee0bb6f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:81,
        title: "Perfect",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FPerfect.mp3?alt=media&token=f0d1356b-d3d8-4e84-81ba-7218a2369321",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FPerfect%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f24f3037-9eb9-426c-9d70-e9519f29088b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:82,
        title: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FSee%20You%20Again%20(feat.%20Charlie%20Puth).mp3?alt=media&token=73a1365c-3e14-44f9-adf9-cfcb4120249c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FSee%20You%20Again%20(feat.%20Charlie%20Puth)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=92bf4d6c-73c8-4187-887e-49637d949350",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:83,
        title: "Señorita",
        artist: "Shawn Mendes",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FSe%C3%B1orita.mp3?alt=media&token=36ccfd6d-7e5f-4e14-89d2-e83888fd1af2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FSe%C3%B1orita%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=42674464-3afd-47c8-a26f-db8fe1bcbaa9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:84,
        title: "Shape of You",
        artist: "Ed Sheeran",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FShape%20of%20You.mp3?alt=media&token=bd2b2aae-e3c1-464b-a1d8-b3fcdf4ea9a4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FShape%20of%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=604af5bc-50cc-4264-83e6-b2a54bd1454f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:85,
        title: "Wannabe",
        artist: "why mona",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FWannabe.mp3?alt=media&token=1a74d255-b5b9-43bf-bb51-26e4113f1e81",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FWannabe%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3e921f2d-fd2e-4947-bd13-9023f7762231",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:86,
        title: "Lovely",
        artist: "Billie Eilish",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2Flovely%20(with%20Khalid).mp3?alt=media&token=1b5739a0-b1b2-4ecc-a026-6967bd67ff77",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2Flovely%20(with%20Khalid)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0b816d69-6509-4d91-8d76-56ae33ef0788",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:87,
        title: "Отключаю телефон",
        artist: "INSTASAMKA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%D0%9E%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%8E%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD.mp3?alt=media&token=2d68549c-b57b-473f-8259-055e9475ee27",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F%D0%9E%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%8E%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cbff244e-98ae-41c6-a2f2-ae70ba7548a6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:88,
        title: "燈",
        artist: "Soushi Sakiyama",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2F%E7%87%88.mp3?alt=media&token=960f3a86-a12a-41b5-8cc8-367a403148c1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2F%E7%87%88%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=aa34f759-311f-4a94-bada-8fda2839cef8",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:89,
        title: "Stereo Love",
        artist: "Edward Maya",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FStereo%20Love.mp3?alt=media&token=12f3a782-e3a4-437a-bab7-0df20213e392",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FStereo%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b4090b32-c1f8-42c1-bebf-d53642395197",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:90,
        title: "Time Traveller",
        artist: "M.I.A.",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fenglish%2FTime%20Traveller.mp3?alt=media&token=c7518b18-c383-43df-9621-ec2bd9691c8f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fenglish%2FTime%20Traveller%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ce9d0c62-ac5f-4a8c-a378-032e836bb2bc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:91,
        title: "Aise Kyun",
        artist: "Anurag Saikia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FAise%20Kyun.mp3?alt=media&token=8e5c82a7-7917-4c48-baa3-abaaf7ba3c0e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FAise%20Kyun%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=151deb7d-6d4d-42ec-868f-b9c3ffe2d96c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:92,
        title: "Akhiyaan Gulaab",
        artist: "Mitraz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FAkhiyaan%20Gulaab%20(From%20_Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya_).mp3?alt=media&token=9829de15-6177-429e-bd3a-aac72deaf8ee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FAkhiyaan%20Gulaab%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ca88cd28-3ac5-4576-99dc-d96d9a9c2509",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:93,
        title: "Besharam Rang",
        artist: "Vishal-Shekhar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FBesharam%20Rang%20(From%20_Pathaan_).mp3?alt=media&token=b653b75d-c666-4f7f-a7a6-ba4f7e58f9c1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FBesharam%20Rang%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=581dfeeb-b54a-41af-b7a9-254abd2f4224",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:94,
        title: "Chale Jaana Phir",
        artist: "Denny",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FChale%20Jaana%20Phir%20(Humko%20Tere%20Bina).mp3?alt=media&token=17d1fa18-fd69-43f8-bcd3-449f3d663afd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FChale%20Jaana%20Phir%20(Humko%20Tere%20Bina)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=64f4ced0-9131-431e-a604-3202b0fea09d",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:95,
        title: "Chaleya",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FChaleya%20(From%20_Jawan_).mp3?alt=media&token=ba506134-9b85-4413-bff8-79251eab7d25",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FChaleya%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d4ca7450-0b53-425a-bfb9-f1f1cbcb49b9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:96,
        title: "Choli Ke Peeche",
        artist: "Diljit Dosanjh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FCholi%20Ke%20Peeche%20(From%20_Crew_).mp3?alt=media&token=8884eff4-3cae-42f4-9ca3-83276e45ed44",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FCholi%20Ke%20Peeche%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a13ac5f0-86fa-43af-a0a3-afadbb6da3d1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:97,
        title: "Daaku",
        artist: "Badshah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FDaaku.mp3?alt=media&token=ee4f984c-5e0c-4860-ac93-7df577245b62",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FDaaku%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=66c7fffb-f946-441d-bc3b-d6ca5025bec3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:98,
        title: "Dil Haareya",
        artist: "Arijit Singh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FDil%20Haareya.mp3?alt=media&token=e47cac2f-a779-405f-9f4a-a59ab5154680",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FDil%20Haareya%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c3234e7-a17b-4317-8d8b-063989740a7c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:99,
        title: "Dil Jhoom",
        artist: "Mithoon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FDil%20Jhoom.mp3?alt=media&token=f1bb8a40-973e-4a32-8562-9304baa70ef1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FDil%20Jhoom%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e05c3fb8-410c-4204-a006-3c4143d96756",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:100,
        title: "Dil Se Dil Tak",
        artist: "Akashdeep Sengupta",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FDil%20Se%20Dil%20Tak%20(From%20_Bawaal_).mp3?alt=media&token=e8072c0d-f7d8-419e-8843-df12afd9bd59",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FDil%20Se%20Dil%20Tak%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b65d8b2a-c40c-4bb8-a540-b53cd95f24bf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:101,
        title: "Heeriye",
        artist: "Jasleen Royal",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FHeeriye%20(feat.%20Arijit%20Singh).mp3?alt=media&token=9f1c9c04-9b68-41b1-8c20-99218fc78bc5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FHeeriye%20(feat.%20Arijit%20Singh)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1d0a5029-baf3-44ba-83e4-696873c9d12c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:102,
        title: "Hua Main",
        artist: "Raghav Chaitanya",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FHua%20Main%20(From%20_ANIMAL_).mp3?alt=media&token=03016c31-6beb-405e-bdab-cd6650718952",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FHua%20Main%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1344821b-7301-4e8e-ba60-f3ddc5606af4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:103,
        title: "Husn",
        artist: "Anuv Jain",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FHusn.mp3?alt=media&token=ec52cc33-513c-46da-91cc-1d56e7cf1692",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FHusn%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b359fbdf-c095-438e-9e84-1b44ed1a0049",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:104,
        title: "Ishq ",
        artist: "Faheem Abdullah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FIshq%20-%20From%20_Lost%3BFound_.mp3?alt=media&token=f3b8176b-7318-457e-8823-33ee9e70a1a1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FIshq%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6b7abf80-19c4-49bd-920d-acce46932e56",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:105,
        title: "Ishq Mitaye",
        artist: "Mohit Chauhan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FIshq%20Mitaye.mp3?alt=media&token=62bc9ab1-26c3-4fe1-82db-d574556da13e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FIshq%20Mitaye%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=42bceaac-0e44-46a2-9043-5c13611bf68a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:106,
        title: "Janiye",
        artist: "Vishal Mishra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FJaniye%20(from%20the%20Netflix%20Film%20_Chor%20Nikal%20Ke%20Bhaga_).mp3?alt=media&token=00a06898-292f-4d8f-a3a3-fa42ae862c30",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FJaniye%20(from%20the%20Netflix%20Film%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9474ace5-0fd0-4ab5-b732-0e9fe0dec9e2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:107,
        title: " Jhoome Jo Pathaan",
        artist: "Vishal-Shekhar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FJhoome%20Jo%20Pathaan.mp3?alt=media&token=c77b3dd5-e69f-4691-8ad9-b69ca2b17d58",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FJhoome%20Jo%20Pathaan%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=39111220-5bed-4557-9f5a-837d1bc3b1e7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:108,
        title: "Lutt Putt Gaya",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FLutt%20Putt%20Gaya.mp3?alt=media&token=60297ff5-56ec-4a5a-bfb5-656c8b57b692",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FLutt%20Putt%20Gaya%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=be4d18cd-5d80-4eaa-b3d0-3505f23bffbb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:109,
        title: "Maan Meri Jaan",
        artist: "King",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FMaan%20Meri%20Jaan.mp3?alt=media&token=8342c7c9-d404-478e-9d58-33e1758db3cb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FMaan%20Meri%20Jaan%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3250db9e-24df-46e9-8f03-7a780d19b3b5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:110,
        title: "Mahiye Jinna Sohna",
        artist: "Darshan Raval",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FMahiye%20Jinna%20Sohna.mp3?alt=media&token=9e622b4f-4984-47dd-b8a4-7d6fe64aad72",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FMahiye%20Jinna%20Sohna%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0d477ffe-d432-4983-a9a0-3f2d2a96948a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:111,
        title: "Malang Sajna",
        artist: "Sachet Tandon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FMalang%20Sajna.mp3?alt=media&token=02f57805-26d4-41a9-8156-544e1cc12492",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FMalang%20Sajna%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=115f1a67-ef1a-46dd-9cba-3b32dc23996a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:112,
        title: "Manjha",
        artist: "Vishal Mishra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FManjha.mp3?alt=media&token=ace48adc-c90d-4e96-a930-9f25e5cf1023",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FManjha%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4458a781-3772-4740-ba27-062f80d0bcdd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:113,
        title: "Mannat",
        artist: "Darshan Raval",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FMannat.mp3?alt=media&token=7752e300-def1-450f-81fd-d04d2b20c158",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FMannat%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=371a39f1-32ab-4963-9306-b0b18acee027",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:114,
        title: "Naina",
        artist: "Diljit Dosanjh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FNaina%20(From%20_Crew_).mp3?alt=media&token=a3dce81d-51ea-4618-aca9-161ff4a42692",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FNaina%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=651f8e31-90f2-43d9-8fa8-864ec3f9fa46",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:115,
        title: "Naseeb Se",
        artist: "Payal Dev",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FNaseeb%20Se%20(From%20_Satyaprem%20Ki%20Katha_).mp3?alt=media&token=c5a47da3-30ac-4b17-851c-7c6b00da3234",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FNaseeb%20Se%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8cfe7c14-5d1f-4f8c-b1b3-514cb33edd91",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:116,
        title: "O Maahi",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FO%20Maahi%20(From%20_Dunki_).mp3?alt=media&token=8130d4b0-8225-4e43-8d7a-8d6d3b60fc25",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FO%20Maahi%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ceefe075-e417-4282-932c-494fb934d603",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:117,
        title: "Pehle Bhi Main",
        artist: "Vishal Mishra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FPehle%20Bhi%20Main.mp3?alt=media&token=868b8846-fb57-4bb9-9fcc-d14b713fdc7b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FPehle%20Bhi%20Main%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=86f81447-f419-4f42-8989-57a14d05b85b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:118,
        title: "Phir Aur Kya Chahiye",
        artist: "Sachin-Jigar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FPhir%20Aur%20Kya%20Chahiye%20(From%20_Zara%20Hatke%20Zara%20Bachke_).mp3?alt=media&token=0aeba3d3-f00c-4cf2-ad51-54415cfc2b51",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FPhir%20Aur%20Kya%20Chahiye%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e848db55-e383-4ff2-a820-384b38e9029d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:119,
        title: "Pyaar Hota Kayi Baar Hai",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FPyaar%20Hota%20Kayi%20Baar%20Hai%20(From%20_Tu%20Jhoothi%20Main%20Makkaar_).mp3?alt=media&token=4d0ea0cc-069c-4ccc-a346-1344092d6821",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FPyaar%20Hota%20Kayi%20Baar%20Hai%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=341ed469-726d-4a06-b8c0-e5a216ea0979",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:120,
        title: "Rang Lageya",
        artist: "Mohit Chauhan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FRang%20Lageya.mp3?alt=media&token=b2de19cb-0aee-4b04-994e-ffdfee855e45",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FRang%20Lageya%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2f8b1c06-190e-4772-8092-f09d5e798b8e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:121,
        title: "Saajan Ve",
        artist: "Darshan Raval",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSaajan%20Ve.mp3?alt=media&token=3f624491-fac4-4132-ae27-26f9c1bbe695",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSaajan%20Ve%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=404ef2cf-1fb1-49f2-a164-f713d4661d5f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:122,
        title: "Seanware",
        artist: "Akhil Sachdeva",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSaanware.mp3?alt=media&token=7b9e0a0a-098e-491a-984e-0c5040f6d8ef",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSaanware%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=605fd354-a371-4a64-ba67-ac56006c9676",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:123,
        title: "Saari Duniya Jalaa Denge",
        artist: "Jaani",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSaari%20Duniya%20Jalaa%20Denge.mp3?alt=media&token=e0ca6373-2619-4966-b5d5-72e2b88bf2fc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSaari%20Duniya%20Jalaa%20Denge%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d182d9de-8813-4d7c-83aa-3ca0372293ee",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:124,
        title: "Sadqay",
        artist: "Aashir Wajahat",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSadqay.mp3?alt=media&token=71d6bac6-0e8f-407c-8e6a-9c68dc2dc244",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSadqay%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=03063dd9-c019-4dd7-b2f8-2d34c71035db",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:125,
        title: "Satranga",
        artist: "Arijit Singh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSatranga%20(From%20_ANIMAL_).mp3?alt=media&token=7432556c-51a7-4377-893d-6e832510beb6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSatranga%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f0537e3f-4faf-43ab-8422-a4a219b84819",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:126,
        title: "Soulmate",
        artist: "Badshah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FSoulmate.mp3?alt=media&token=8b9cf0e9-f2c2-4246-bb53-b57ffb60de4f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FSoulmate%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3a7cb69e-0fd3-4eca-a14b-251cfcfabb2e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:127,
        title: "Tere Pyaar Mein",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTere%20Pyaar%20Mein.mp3?alt=media&token=6d4b83ec-283c-4589-82eb-aab2dcea9438",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTere%20Pyaar%20Mein%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3928dc66-d632-46d8-a5aa-a4a60c33e9ce",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:128,
        title: "Tere Vaaste",
        artist: "Varun Jain",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTere%20Vaaste%20(From%20_Zara%20Hatke%20Zara%20Bachke_).mp3?alt=media&token=09958ac9-a7c3-4b50-acfe-f24187c6cf05",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTere%20Vaaste%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bdc3924f-1f86-4b39-81b4-d1e441ebbde4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:129,
        title: "Teri Baaton Mein Aisa Uljha Jiya Title Song",
        artist: "Raghav",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTeri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%20Title%20Song.mp3?alt=media&token=a07a200c-3d7b-43ef-9dcd-9cd8559bb464",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTeri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%20Title%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f6fdde06-c301-40ab-8f99-064d442da3cb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:130,
        title: "Tu Jaana Na Piya",
        artist: "King",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTu%20Jaana%20Na%20Piya.mp3?alt=media&token=f716222d-a8c2-4857-b0a1-cce7c5faf85c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTu%20Jaana%20Na%20Piya%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a603a325-c3f2-4f95-b4b6-7e6247f6df89",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:131,
        title: "Tu Kya Jaane",
        artist: "Yashika Sikka",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTu%20Kya%20Jaane.mp3?alt=media&token=357b7212-0952-4d22-abb7-88d95a0b7b41",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTu%20Kya%20Jaane%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=24e2a7fe-7362-4120-81d1-b65596199354",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:132,
        title: "Tu hai kahan",
        artist: "AUR",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTu%20hai%20kahan.mp3?alt=media&token=ef9ecd37-331d-4058-a6b0-80e5e18f6a5d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTu%20hai%20kahan%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b8efe681-517e-4b7e-ae59-7f20c93e3e06",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:133,
        title: "Tum Kya Mile",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTum%20Kya%20Mile%20(From%20_Rocky%20Aur%20Rani%20Kii%20Prem%20Kahaani_).mp3?alt=media&token=0f6b4440-96f6-40c5-9835-0c564377c16c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTum%20Kya%20Mile%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f668a9d4-bee8-4b2c-9a62-7c1e665a96b2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:134,
        title: "Tum Se",
        artist: "Sachin-Jigar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTum%20Se%20(From%20_Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya_).mp3?alt=media&token=ddda9e0c-eba5-4dfa-9ab1-b183eefb5c1f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTum%20Se%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1ad246a0-3ba7-4d46-937d-c5bcb8e5bd8d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:135,
        title: "Tumhe Kitna Pyaar",
        artist: "Mithoon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FTumhe%20Kitna%20Pyaar%20Karte%20(From%20_Bawaal_).mp3?alt=media&token=d5d52f47-78c7-4336-bd4b-7b1b2b5b0947",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FTumhe%20Kitna%20Pyaar%20Karte%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f80a079e-e026-4890-a9d7-8b6b4d2fb17e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:136,
        title: "Ve Kamleya",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FVe%20Kamleya%20(From%20_Rocky%20Aur%20Rani%20Kii%20Prem%20Kahaani_).mp3?alt=media&token=2e431a05-289a-4e88-b7e7-b6122bd872ee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FVe%20Kamleya%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=200dbb54-00bc-4abb-9865-323a1df26dee",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:137,
        title: "Vida Karo",
        artist: "Arijit Singh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FVida%20Karo.mp3?alt=media&token=41837c0d-458a-4adc-a9cb-c43e3f575ba9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FVida%20Karo%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6bec5282-09fd-4332-8c06-9b04fb52c7c6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:138,
        title: "What Jhumka",
        artist: "Pritam",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FWhat%20Jhumka%20_%20(From%20_Rocky%20Aur%20Rani%20Kii%20Prem%20Kahaani_).mp3?alt=media&token=7ae4e62e-c4fd-4d3e-8488-da3b85c7d5e5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2Fforce_download.jpg?alt=media&token=8de27152-2874-402c-aa68-9d594bb15411",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:139,
        title: "Yimmy Yimmy",
        artist: "Tayc",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FYimmy%20Yimmy.mp3?alt=media&token=3882d256-2b68-44d1-9dd7-bb8284a4e536",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FYimmy%20Yimmy%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=01ac55f3-9523-4c26-a6d7-acf3fefc3119",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:140,
        title: "Zihaal e Miskin",
        artist: "Javed-Mohsin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fhindi%2FZihaal%20e%20Miskin.mp3?alt=media&token=86e8e434-1961-4f14-a68c-382891468c0d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fhindi%2FZihaal%20e%20Miskin%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e233b7da-d3a2-4e68-95a4-4b28f1f55fd4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:141,
        title: "Acharuli Gandagana [ TRAP REMIX]",
        artist: "Georgian Folk",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FAcharuli%20Gandagana%20%5B%20TRAP%20REMIX%5D.mp3?alt=media&token=a35153d7-c40d-4dff-8487-da1868b08e4a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fachrauli.jpg?alt=media&token=621683ec-3594-4ea7-a755-10747c1f6c03",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:142,
        title: "O Fortuna",
        artist: "Carl Orff",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FAndr%C3%A9%20Rieu%20-%20O%20Fortuna.mp3?alt=media&token=f47e0e5b-f0f0-4250-ba6f-77efea573734",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Ffortuna.webp?alt=media&token=410312fc-b29a-490e-9639-57677c988916",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:143,
        title: "Bre Petrunko",
        artist: "Koutev Bulgarian National Ensemble",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FBre%20Petrunko.mp3?alt=media&token=2ce11d3c-b047-42b9-ba3f-b3ffedd2fe17",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fpertunko.jpg?alt=media&token=a67a9897-81fc-4eee-8554-59371c0e2129",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:144,
        title: "Cleopatra Stratan - Zunea Zunea",
        artist: "Cleopatra Stratan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FCleopatra%20Stratan%20-%20Zunea%20Zunea.mp3?alt=media&token=25a63070-7da8-46c3-b077-4a3921adabfa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fzunea.jpg?alt=media&token=025073b6-2c3e-4f8c-8d37-f2bc8331af9d",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:145,
        title: "Gasolina",
        artist: "Daddy Yankee",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FDaddy%20Yankee%20-%20Gasolina.mp3?alt=media&token=a42eaec6-6dac-477a-a7bc-4da6e76f4e1d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fgasolina.jpg?alt=media&token=b4c1de0e-a4c8-4f45-8046-0ae6f94799fb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:146,
        title: "Tokyo Drift",
        artist: "Teriyaki Boyz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FDj%20Kantik%20-%20Teriyaki%20Boyz.mp3?alt=media&token=86a926de-6119-425a-84d6-09de188f9812",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Ftokyo.jpg?alt=media&token=03684e3d-f4e3-4a40-8113-2dd8e7c95b87",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:147,
        title: "Bailando",
        artist: "Enrique Iglesias",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FEnrique%20Iglesias%20-%20Bailando.mp3?alt=media&token=dc4e836f-42e8-4004-b8f9-0f2734149d83",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fbailando.jpg?alt=media&token=a3a757ef-5a81-4d90-be5b-f84cf85ce7f7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:148,
        title: "SUBEME LA RADIO",
        artist: "Enrique Iglesias",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FEnrique%20Iglesias%20-%20SUBEME%20LA%20RADIO.mp3?alt=media&token=ab1d35ed-2c0b-4f58-86fe-d03bd147e1d8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fsubema.jpg?alt=media&token=75cef865-709d-41b5-a691-e39414cceb5d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:149,
        title: "Pepas",
        artist: "Farruko",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FFarruko%20-%20Pepas.mp3?alt=media&token=f1e3c31c-e6da-4dbf-92bb-0b4763026339",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fpepas.webp?alt=media&token=8f0d4c72-531d-4205-bb41-1b889c8f2376",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:150,
        title: "Gangnam Style",
        artist: "PSY",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FGangnam%20Style%20PSY.mp3?alt=media&token=4027af36-c0e2-4582-bebc-121a26c44a1d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fgangam.png?alt=media&token=3aaa4f76-8d5d-464a-a1ee-692228292efd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:151,
        title: "Habibi",
        artist: "Dardan,zuna,Ricky Rick",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FHabibi.mp3?alt=media&token=dfc4fb19-b69d-499e-b05d-aa638569ab67",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fhabibi.png?alt=media&token=1d31b250-beb4-48e3-a0a0-fa86aa18ebe4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:152,
        title: "I'm an Albatraoz",
        artist: "AronChupa",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FI'm%20an%20Albatraoz.mp3?alt=media&token=ac7ae575-40ce-44e4-bb26-3335110b9d12",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Falbatroz.jpg?alt=media&token=a7dc93d4-d670-45d2-a03c-62e2c34a9204",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:153,
        title: "Satisfya",
        artist: "Imran Khan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FImran%20Khan%20-%20Satisfya.mp3?alt=media&token=db52636e-3858-4dae-8bc2-c8b23c79ddfa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fsatisfya.jpeg?alt=media&token=7282d3a1-79c0-4c62-9757-953873fd9386",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:154,
        title: "Ainsi Bas La Vida",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FIndila%20-%20Ainsi%20Bas%20La%20Vida.mp3?alt=media&token=d185662c-5d85-4d0c-95b7-918c6ffdf0bf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fainsi.jpeg?alt=media&token=413b95b5-4593-4299-a03c-52a159c69e94",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:155,
        title: "Dernière Danse",
        artist: "Indilia",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FIndila%20-%20Derni%C3%A8re%20Danse.mp3?alt=media&token=fbc3f3db-3d8e-4a16-9222-d59c1d409681",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Findilia.png?alt=media&token=471a97f2-8cca-4ffc-bb68-09e2897a3dcc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:156,
        title: "Lambada",
        artist: "Kaoma",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FKaoma%20-%20Lambada.mp3?alt=media&token=f720b2c1-a083-4f6a-8f00-65c8345c19d2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Flambada.jpg?alt=media&token=1fc87cd7-0e75-4f87-8a56-5b31ff74452c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:157,
        title: "C'est La Vie",
        artist: "Khaled",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FKhaled%20-%20C'est%20La%20Vie.mp3?alt=media&token=9ed16e44-40f1-44ee-8fea-2fc614277c62",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fkhaled.jpg?alt=media&token=0fd52f5b-2bef-4f45-9ef9-215c01f916d1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:158,
        title: "Bella Ciao",
        artist: "El Profesor",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FLa%20Casa%20De%20Papel%20-%20Bella%20Ciao.mp3?alt=media&token=89eb390b-b866-4530-bddc-b5bb1e321129",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fbellaciao.jpg?alt=media&token=eaeeba13-af06-4c2d-97a1-3215ecff321c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:159,
        title: "Kosandra",
        artist: "Miyagi & Andy Panda",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FMiyagi%20%26%20Andy%20-%20Kosandra.mp3?alt=media&token=c508709d-c333-4904-ac6d-3f1b7cd857ba",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fkosandra.jpg?alt=media&token=f5abcc2f-ef4d-4f41-958c-ec96b337ef45",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:160,
        title: "Pembe Mezarlık",
        artist: "Model",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FModel%20-%20Pembe%20Mezarl%C4%B1k.mp3?alt=media&token=9cfc95db-52e8-4780-b72f-6463fef29704",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fmodel.png?alt=media&token=445e4390-d60e-478b-ae9a-ff498c436e51",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:161,
        title: "Liyakun Yawmuka",
        artist: "Nasheed",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FNasheed%20-%20Liyakun%20Yawmuka.mp3?alt=media&token=5c109fca-26ce-4a9f-9811-5c9d46f78586",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fnasheed.jpg?alt=media&token=da0057fc-daa9-48a2-a368-bf239505fddf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:162,
        title: "детство",
        artist: "rauf and faik",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FRauf%20%26%20Faik%20-%20%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE.mp3?alt=media&token=f30a8fe3-87af-4b35-a29b-8b5638e887ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Frauf.jpeg?alt=media&token=2ff12bee-4114-46c6-b530-a8092031c43a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:163,
        title: "колыбельная",
        artist: "rauf and faik",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FRauf%20%26%20Faik%20-%20%D0%BA%D0%BE%D0%BB%D1%8B%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.mp3?alt=media&token=330a236d-06a2-4f7a-b4e6-48e5037f378a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Ffaik.jpg?alt=media&token=f39fb81d-945f-44dc-9e28-28266dfe5f19",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:164,
        title: "Mujeriego",
        artist: "Ryan Castro",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FRyan%20Castro%20-%20Mujeriego.mp3?alt=media&token=d98d66ed-2a90-49f5-a691-bd0c1873ce25",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fryan.jpg?alt=media&token=ae8d0dac-e025-4724-85e4-8200daffc908",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:165,
        title: "Hislerim",
        artist: "Serhat Durmus and Zerrin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FSerhat%20Durmus%20-%20Hislerim%20(ft.%20Zerrin).mp3?alt=media&token=9f762937-c917-48cf-9dea-50377404037e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fhislerim.jpeg?alt=media&token=be02d98e-a9c3-40a4-931c-68af4daa7424",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:166,
        title: "Una Noche",
        artist: "souf",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FSouf%20-%20Una%20Noche.mp3?alt=media&token=aca838d7-0fe6-4773-8fc5-8edd8c5708b3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fsouf.jpeg?alt=media&token=9558b178-ed1f-4148-b38a-c8912eb76e65",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:167,
        title: "papaoutai",
        artist: "Stromae",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FStromae%20-%20papaoutai.mp3?alt=media&token=b1825528-f54b-462f-9acb-012dfe49e482",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fstrromae.jpg?alt=media&token=22729c18-8a5e-42ae-b46b-2bfe9aa0170d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:168,
        title: "Taki Taki",
        artist: "DJ Snake",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FTaki%20Taki.mp3?alt=media&token=7eeea429-b493-4a2d-a7fc-4e9355f1c08a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Ftaki.jpg?alt=media&token=9f0f276f-f8f7-4937-8ee2-1cc5dfaa9f98",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:169,
        title: "Dinero",
        artist: "Trinidad Cardona",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2FTrinidad%20Cardona%20-%20Dinero.mp3?alt=media&token=1822c45d-8167-4921-9a77-2c67bf17504f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fdinero.jpeg?alt=media&token=10770daf-7911-4ef8-8abf-e9798abbe7ee",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:170,
        title: "Despacito",
        artist: "Luis Fonsi",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fother%2Fdespacito.mp3?alt=media&token=5c8c5d68-098d-44de-8463-ad5d866ea724",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fother%2Fdespacito.png?alt=media&token=9745ac84-f383-4e92-909e-4b4fe5215e81",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:171,
        title: "Adiye",
        artist: "Dhibu Ninan Thomas",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FAdiye%20-%20From%20_Bachelor_.mp3?alt=media&token=2231c645-32ae-4ab1-aa77-e9d9c8429e56",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FAdiye%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f28d28a1-7aa8-4a8f-a8a4-c0b412bc2742",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:172,
        title: "Anbenum",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FAnbenum%20(From%20_Leo_).mp3?alt=media&token=d103ae7a-706a-4ff9-8f64-9f74c4c8e2ae",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FAnbenum%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=64bb3970-e182-46db-b7ec-e722a6d4f331",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:173,
        title: "Arabic Kuthu - Halamithi Habibo",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FArabic%20Kuthu%20-%20Halamithi%20Habibo%20(From%20_Beast_).mp3?alt=media&token=be972e28-4f62-429c-a039-31b3b6d15c1f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FArabic%20Kuthu%20-%20Halamithi%20Habibo%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=494ab8e6-9c84-4275-88ad-cc74d62ca13a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:174,
        title: "Badass",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FBadass%20(From%20_Leo_).mp3?alt=media&token=0efd6781-f8d8-4dde-a8d2-5b6ec7d6e633",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FBadass%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a963d1f3-ebff-4d9f-9d65-852c4b234460",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:175,
        title: "Bae",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FBae%20(From%20_Don_).mp3?alt=media&token=001ff3f8-51ea-4af5-9c08-b2057281edf1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FBae%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=73952719-8249-4ede-a54b-cfd9be14a370",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:176,
        title: "Beast Mode",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FBeast%20Mode%20(From%20_Beast_).mp3?alt=media&token=66be511e-2746-49bc-bb0c-9b0e81f56924",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FBeast%20Mode%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5b366bbe-b766-4baf-ab5c-617005370b75",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:177,
        title: "Bullet Song",
        artist: "Devi Sri Prasad",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FBullet%20Song.mp3?alt=media&token=ecfe3d62-b7f2-42c8-bbf1-bc49e6c8bdce",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FBullet%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a51ff212-f8d4-42d8-bd61-774b9898553c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:178,
        title: "Chellamma",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FChellamma.mp3?alt=media&token=0abb3983-4b7b-4543-9d7f-cde7f0dbed63",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FChellamma%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7739c499-403b-4ced-803a-6b408cacf52e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:179,
        title: "Dippam Dappam",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FDippam%20Dappam%20(From%20_Kaathuvaakula%20Rendu%20Kaadhal_).mp3?alt=media&token=33ae4aa5-f735-4e2e-8fb2-fa5306bdbdd0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FDippam%20Dappam%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=696a3f02-fdac-416d-b301-99c001091225",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:180,
        title: "En Rojaa Neeye",
        artist: "Hesham Abdul Wahab",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FEn%20Rojaa%20Neeye.mp3?alt=media&token=c62708b5-4225-4790-9385-567ed6ec8354",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FEn%20Rojaa%20Neeye%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=efa58183-2596-484c-ba85-999246a38c64",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:181,
        title: "Ennai Vittu",
        artist: "Yuvan Shankar Raja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FEnnai%20Vittu.mp3?alt=media&token=3f76f5b3-379a-4d9c-9381-82c55f1cf617",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FEnnai%20Vittu%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7c3b5052-1196-4411-80e0-58ecb8d41dd3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:182,
        title: "Hukum-Thalaivar Alappara",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FHukum%20-%20Thalaivar%20Alappara.mp3?alt=media&token=0455293f-4b91-4cf8-a728-4f6ec465d003",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FHukum%20-%20Thalaivar%20Alappara%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5234c5bf-20d2-47c6-a83e-2d3e1937e8da",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:183,
        title: "I'm Scared",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FI'm%20Scared%20(From%20_Leo_).mp3?alt=media&token=6cdae280-67a1-4b6e-9160-cd736dd006cb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FI'm%20Scared%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9785d4ce-e5e6-428d-a37a-aee14863a433",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:184,
        title: "Jalabulajangu",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FJalabulajangu%20(From%20_Don_).mp3?alt=media&token=cc027f7b-93a9-46da-9886-79d3d83815b3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FJalabulajangu%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b51b1425-fa63-451b-8642-80ff8bc2aff7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:185,
        title: "Jimikki Ponnu",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FJimikki%20Ponnu.mp3?alt=media&token=d49cb274-f2cb-4836-a8c8-9627b37d0b17",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FJimikki%20Ponnu%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e7f6f529-4ef2-4c94-9c42-d5ed06285dad",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:186,
        title: "Jolly O Gymkhana",
        artist: "Thalapathy Vijay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FJolly%20O%20Gymkhana%20(From%20_Beast_).mp3?alt=media&token=8ac24c24-abd1-4a4e-8146-3d88bcab70b9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FJolly%20O%20Gymkhana%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=eaedb6a3-02f3-46e5-9f68-8cda9471f23b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:187,
        title: "Jujubee",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FJujubee.mp3?alt=media&token=8494bc79-1301-479a-92aa-ce5e3a071837",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FJujubee%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c1930f5-e9a9-415e-8a61-5341283777c0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:188,
        title: "Kaadhal En Kaviye",
        artist: "Sid Sriram",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FKaadhal%20En%20Kaviye%20-%20From%20_Salmon%203D_.mp3?alt=media&token=213a76bf-813f-4a5a-a865-13997bb63588",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FKaadhal%20En%20Kaviye%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0e1cd87c-5ff5-4a57-860e-7fa514d3644d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:189,
        title: "Kaattumalli",
        artist: "Ilaiyaraaja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FKaattumalli.mp3?alt=media&token=275b5e7a-bc4b-4093-8da4-47b32e18b2cf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FKaattumalli%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8930d9c9-09d7-4a5c-8478-a8774d744de3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:190,
        title: "Kaavaalaa",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FKaavaalaa%20(From%20_Jailer_).mp3?alt=media&token=8b8ab629-1408-41ac-8565-6c48f5c65cb3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FKaavaalaa%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6f307da8-6775-4eb0-a667-bbd73b18f6f0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:191,
        title: "Kanja Poovu Kannala",
        artist: "Yuvan Shankar Raja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FKanja%20Poovu%20Kannala%20(From%20_Viruman_).mp3?alt=media&token=61479c32-a1cd-41f9-8f99-3dce0aa02c3a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FKanja%20Poovu%20Kannala%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5aaa0f07-f162-45ac-bfc2-30b18e335eb2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:192,
        title: "Katchi Sera",
        artist: "Sai Abhyankkar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FKatchi%20Sera%20-%20From%20_Think%20Indie_.mp3?alt=media&token=1c9440a5-ea89-443b-94e0-aa79e7ee9d84",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FKatchi%20Sera%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a3978c11-b1a3-4d0d-a541-5ab0490f0e7e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:193,
        title: "Lokiverse - Background Score",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FLokiverse%20-%20Background%20Score.mp3?alt=media&token=ebb9704c-123f-4f9e-bb85-5015d97fa791",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FLokiverse%20-%20Background%20Score%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b566063f-1061-4cb1-b9b9-0bae8cb06669",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:194,
        title: "Maamadura",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMaamadura%20-%20From%20_Jigarthanda%20DoubleX_.mp3?alt=media&token=573a54ef-9d43-4c29-a661-32e5ffd0db68",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMaamadura%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b636f167-ace7-4626-b25b-f188af00d6ea",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:195,
        title: "Mainaru Vetti Katti",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMainaru%20Vetti%20Katti.mp3?alt=media&token=05c93ee7-2c22-4ff0-b25f-3608286aed34",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMainaru%20Vetti%20Katti%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6961d663-f908-4d4c-9014-2cc5d1a609c5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:196,
        title: "Mallipoo",
        artist: "A.R. Rahman",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMallipoo.mp3?alt=media&token=801d182f-3038-46e0-9daf-de8564ffd2b4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMallipoo%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=936614f5-9684-47bc-9fde-18537d13be35",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:197,
        title: "Mayakkama Kalakkama",
        artist: "Dhanush",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMayakkama%20Kalakkama%20(From%20_Thiruchitrambalam_).mp3?alt=media&token=403dc38b-1cab-4bee-8df0-bd284a49c116",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMayakkama%20Kalakkama%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=aea1fd26-01d7-4754-b765-0c272730fabe",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:198,
        title: "Megham Karukatha",
        artist: "Dhanush",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMegham%20Karukatha%20(From%20_Thiruchitrambalam_).mp3?alt=media&token=c3c43a6d-bffc-4090-85d7-3949963ff5ed",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMegham%20Karukatha%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=026c2a1b-9969-41bd-95b7-328fac007581",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:199,
        title: "Mudhal Nee Mudivum Nee Title Track",
        artist: "Darbuka Siva",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FMudhal%20Nee%20Mudivum%20Nee%20Title%20Track.mp3?alt=media&token=799cb061-9f7c-4bb7-94ce-bbf86f60dbd5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FMudhal%20Nee%20Mudivum%20Nee%20Title%20Track%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=afc0a5b2-8d8f-4ca8-b074-30b44cf8523b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:200,
        title: "Naa Ready",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FNaa%20Ready%20(From%20_Leo_).mp3?alt=media&token=ca2e97d8-54a4-4d25-a7dd-a0deb5367af6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FNaa%20Ready%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=17a9c57e-c0b2-4eff-9358-a22b6c39396c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:201,
        title: "Naan Pizhai",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FNaan%20Pizhai%20(From%20_Kaathuvaakula%20Rendu%20Kaadhal_).mp3?alt=media&token=0016edd2-e0c6-4c29-bd6d-81b6a8cfa5ea",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FNaan%20Pizhai%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=acd270f6-af2e-4c80-a9cb-9549df571a7c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:202,
        title: "Nee Singam Dhan",
        artist: "A.R. Rahman",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FNee%20Singam%20Dhan.mp3?alt=media&token=95c3196f-aa7d-4402-8d2c-9fa8feb7ad28",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FNee%20Singam%20Dhan%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=700bf23a-cbee-4d88-a61b-8878ef258b21",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:203,
        title: "Once Upon a Time",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FOnce%20Upon%20a%20Time.mp3?alt=media&token=8cf8d392-c5d7-49b8-a88c-42e4d886a1fa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FOnce%20Upon%20a%20Time%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8c26b2c9-83be-46e4-bb84-8cb2f729adc7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:204,
        title: "Oo Solriya Oo Oo Solriya",
        artist: "Andrea Jeremiah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FOo%20Solriya%20Oo%20Oo%20Solriya.mp3?alt=media&token=fc9de329-259b-4071-8e1e-9e2e1a439a61",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FOo%20Solriya%20Oo%20Oo%20Solriya%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=55b88a63-b1d1-4f9b-bcd2-cf49fb2914f6",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:205,
        title: "Ordinary Person",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FOrdinary%20Person%20(From%20_Leo_).mp3?alt=media&token=11a34e6a-d0d5-4718-9215-92be1d17e62e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FOrdinary%20Person%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=02581ebc-8de8-454f-a800-6fc27af46f25",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:206,
        title: "Osarattum Pathu Thala",
        artist: "A.R.Rahman",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FOsarattum%20Pathu%20Thala%20(From%20_Pathu%20Thala_).mp3?alt=media&token=62e014ec-6363-4d57-afd3-494f307ccc7b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FOsarattum%20Pathu%20Thala%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2fd468f4-64fa-46b1-8e95-b853e31bd02e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:207,
        title: "Pathala Pathala",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FPathala%20Pathala%20(From%20_Vikram_).mp3?alt=media&token=83e580cc-2c2c-4e10-93f0-d2bf522f01cc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FPathala%20Pathala%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ae1b154c-cb08-4755-8d91-3b2a8b652161",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:208,
        title: "Porkanda Singam (EDM Version)",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FPorkanda%20Singam%20(EDM%20Version)%20%5BFrom%20_Vikram_%5D.mp3?alt=media&token=68effd2c-f795-49b2-a6cc-25f2eab4aa50",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FPorkanda%20Singam%20(EDM%20Version)%20%5BFrom%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3ad76c9e-77b7-4156-b373-8a20aaeebc00",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:209,
        title: "Private Party",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FPrivate%20Party.mp3?alt=media&token=e336414f-4b13-4ebf-b700-9ab16d0380e9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FPrivate%20Party%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f5dfdc24-65ae-40b0-a522-89932b5b0e45",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:210,
        title: "Railin Oligal",
        artist: "Govind Vasantha",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FRailin%20Oligal%20-%20From%20_Blue%20Star_.mp3?alt=media&token=11b24c85-ddb9-4db3-9f6e-47e90abe9d26",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FRailin%20Oligal%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=736ba9b4-9d09-42ba-9b19-896d27672889",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:211,
        title: "Ranjithame",
        artist: "Thalapathy Vijay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FRanjithame%20(From%20_Varisu_).mp3?alt=media&token=d5cf182c-4bec-40a5-8f47-0dce4a06c4d5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FRanjithame%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3b271020-6420-46ef-a37c-ee7b048d5e7d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:212,
        title: "Srivalli",
        artist: "Sid Sriram",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FSrivalli.mp3?alt=media&token=b37dae69-7f3d-456b-8f37-bf5c31bdb5ea",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FSrivalli%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=71c3ae37-5e89-4c55-b672-12937bf2ea4c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:213,
        title: "Thaai Kelavi",
        artist: "Dhanush",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FThaai%20Kelavi%20(From%20_Thiruchitrambalam_).mp3?alt=media&token=ac2d4ff6-692e-45ef-a7e8-6a29fda71a72",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FThaai%20Kelavi%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=44d45fad-9d55-4921-9ed6-c66b51574adb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:214,
        title: "Thee Thalapathy",
        artist: "Silambarasan TR",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FThee%20Thalapathy%20(From%20_Varisu_).mp3?alt=media&token=f9b97b42-bc8b-4527-8810-659077ff2165",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FThee%20Thalapathy%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b1009e32-8c6d-4398-983a-0f11300752ae",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:215,
        title: "Thenmozhi",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FThenmozhi%20(From%20_Thiruchitrambalam_).mp3?alt=media&token=f247b047-b145-4070-b24f-b89638c0f14c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FThenmozhi%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=989a53e7-3568-4ab7-b57b-b723090de8e6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:216,
        title: "Tum Tum",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FTum%20Tum.mp3?alt=media&token=b979468f-b9c9-429f-887c-2dbb69e4b1de",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FTum%20Tum%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ffc9daa0-e0ab-48d1-8ccc-09f1028c6e86",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:217,
        title: "Unaku Thaan",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FUnakku%20Thaan.mp3?alt=media&token=44ad7acd-a755-48b0-bcab-004875c8501b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FUnakku%20Thaan%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a75ad7d6-f75e-4827-8dde-12efe9c6e18d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:218,
        title: "Vaa Vaathi",
        artist: "G. V. Prakash",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FVaa%20Vaathi.mp3?alt=media&token=5310b868-878f-4662-862a-ae598fbe1740",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FVaa%20Vaathi%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ab0c67a4-058d-4959-b199-b17eacb3f160",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:219,
        title: "Vikram-Title Track",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FVikram%20-%20Title%20Track.mp3?alt=media&token=9cf465e2-47b7-44e2-adb5-966f89b74cd1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FVikram%20-%20Title%20Track%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=72d36226-5b25-489b-92aa-68ab40f9e426",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:220,
        title: "Whistle Podu",
        artist: "Thalapathy Vijay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftamil%2FWhistle%20Podu%20(From%20_The%20Greatest%20Of%20All%20Time_).mp3?alt=media&token=7eaf0ea3-11d6-4dcc-8bca-a6b26d581a9b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftamil%2FWhistle%20Podu%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2a422900-5bfc-4dee-9e14-39f497f859eb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:221,
        title: "Almost Padipoyindhe Pilla",
        artist: "Leon James",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FAlmost%20Padipoyindhe%20Pilla.mp3?alt=media&token=62a86b64-0158-462a-a687-5e13d5206899",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FAlmost%20Padipoyindhe%20Pilla%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=502e8fb8-1902-4ffa-b865-6f7d49f07078",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:222,
        title: "Amma Song (From Oke Oka Jeevitham)",
        artist: "Jakes Bejoy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FAmma%20Song%20(From%20Oke%20Oka%20Jeevitham).mp3?alt=media&token=2e1cb976-3202-4bae-bfb2-d57267a04f63",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FAmma%20Song%20(From%20Oke%20Oka%20Jeevitham)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0578d48d-e0a9-455c-9945-0c39d8a19160",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:223,
        title: "Ammayi",
        artist: "Raghav Chaitanya",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FAmmayi.mp3?alt=media&token=7adf2ba9-94e3-4e73-a928-1c8259c2a8e6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FAmmayi%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4baa1b49-903b-4940-a083-2720c68139e9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:224,
        title: "Aradhya",
        artist: "Hesham Abdul Wahab",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FAradhya%20(From%20_Kushi_)%20(Telugu).mp3?alt=media&token=6bbbae87-e91d-4095-a0c8-20097c353f54",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FAradhya%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=601c6a45-3f1f-41d7-bda2-345d003bcf9c",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:225,
        title: "Ayyo Paapam Saaru",
        artist: "Leon James",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FAyyo%20Paapam%20Saaru%20(From%20_G.O.A.T_).mp3?alt=media&token=95603676-aa42-4f57-9b91-11a026000baf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FAyyo%20Paapam%20Saaru%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=052efa51-4e30-46d4-b12e-5574fbdabe9c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:226,
        title: "Brindavanam",
        artist: "Mangli",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FBrindavanam.mp3?alt=media&token=2e1aacd7-57ba-4a2d-9bfc-40f76568a3e3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FBrindavanam%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=dc2b5b92-6b63-4f2e-8e32-d1e1da8d1f83",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:227,
        title: "Chamkeela Angeelesi",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FChamkeela%20Angeelesi.mp3?alt=media&token=b8d0c07e-4a0e-4906-90d9-0537ecdf6ee2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FChamkeela%20Angeelesi%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3735d87a-7e3f-4d24-be64-abdfd42f018f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:228,
        title: "College Papa",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FCollege%20Papa.mp3?alt=media&token=3f90f72c-39a1-4eaf-af32-8160792cb9f7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FCollege%20Papa%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b0aae004-4934-4e93-a07a-4d5891451ff9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:229,
        title: "Dandakadiyal",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FDandakadiyal.mp3?alt=media&token=7b5ba47e-30ea-461e-9a18-5f798c232034",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FDandakadiyal%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=50767805-c6b2-4511-b6cd-0e58037752bd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:230,
        title: "Darshana",
        artist: "Chaitan Bharadwaj",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FDarshana.mp3?alt=media&token=2b12e879-1a46-45e9-a2b2-c11ab9f0332d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FDarshana%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cb2abb4a-1036-4a5f-ac89-60cf77fad3e5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:231,
        title: "Dhoom Dhaam",
        artist: "Santhosh Narayanan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FDhoom%20Dhaam.mp3?alt=media&token=66b114dd-863d-46aa-b98d-7722405d1371",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FDhoom%20Dhaam%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9a5e9a20-5b3c-465d-93fc-c3a5b1758b92",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:232,
        title: "Dum Masala",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FDum%20Masala.mp3?alt=media&token=ca496585-bc84-4cb1-80b5-4ab7b25e2073",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FDum%20Masala%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9b1ab46f-88cb-4060-8d41-d330f9418686",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:233,
        title: "Ee Raathale",
        artist: "Yuvan Shankar Raja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FEe%20Raathale.mp3?alt=media&token=19938f78-6384-4701-ba68-1e0a8d205f17",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FEe%20Raathale%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=59476021-69e8-4182-a684-17395d0673e8",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:234,
        title: "Ek Dum Ek Dum",
        artist: "G. V. Prakash",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FEk%20Dum%20Ek%20Dum%20(From%20_Tiger%20Nageswara%20Rao_)%20(Telugu).mp3?alt=media&token=add495b1-12ab-40e4-9af5-c646c8898a67",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FEk%20Dum%20Ek%20Dum%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=685583c2-eedb-43f7-96cf-b5a9e8c64a7c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:235,
        title: "Enno Ratrulosthayi Remix Song",
        artist: "S.P. Charan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FEnno%20Ratrulosthayi%20Remix%20Song.mp3?alt=media&token=0b1d116b-079a-48be-a694-2be2a8367d89",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FEnno%20Ratrulosthayi%20Remix%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8725a598-3927-4d71-b796-b1ab1335834b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:236,
        title: "Gaaju Bomma",
        artist: "Hesham Abdul Wahab",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FGaaju%20Bomma%20(From%20_Hi%20Nanna_).mp3?alt=media&token=8d67d099-9d1c-4377-832f-6bbc91d34dfc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FGaaju%20Bomma%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cd718033-131b-4d2a-95ec-0fe702ef8578",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:237,
        title: "Hukum",
        artist: "Anirudh Ravichander",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FHukum%20(From%20_Jailer_).mp3?alt=media&token=bd79f158-8c5a-4515-a398-e01d8b92cd10",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FHukum%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f21df732-2dff-49cf-a233-d1759237f6ea",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:238,
        title: "Humma Humma",
        artist: "Shekar Chandra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FHumma%20Humma.mp3?alt=media&token=1b6635ce-ec4e-4ad8-b07d-8fe36fb5e443",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FHumma%20Humma%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7f712240-2056-4d37-aafb-7a5154f9705d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:239,
        title: "Hungry Cheetah",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FHungry%20Cheetah%20(From%20_They%20Call%20Him%20OG_).mp3?alt=media&token=b204df64-c1fa-427b-ab65-60e1cf5e7c0b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FHungry%20Cheetah%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79c5791a-8b6a-4043-96e9-41c0d0cd2ba4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:240,
        title: "Jaragandi",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FJaragandi%20(From%20_Game%20Changer_)%20(Telugu).mp3?alt=media&token=494ee28c-c680-4b1d-93f8-6b63ef408f30",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FJaragandi%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4f0f6d4c-73a4-4f83-b82f-7ce768b1744d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:241,
        title: "Jinthaak Chithaka",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FJinthaak%20Chithaka.mp3?alt=media&token=a7761067-36c4-4e4a-94d0-57e38d856fd6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FJinthaak%20Chithaka%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=59a8db6b-a685-4773-9063-1309d3d718b9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:242,
        title: "Kalalo Kooda",
        artist: "Tanishk Bagchi",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FKalalo%20Kooda.mp3?alt=media&token=ac97e7cc-d4fc-4651-9ce3-b60196c5202b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FKalalo%20Kooda%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d86245e3-3a65-4059-86e0-f3e77c2eddec",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:243,
        title: "Kurchi Madathapett",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FKurchi%20Madathapetti.mp3?alt=media&token=4cd50487-b9d7-4e99-81c0-226e0f83404b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FKurchi%20Madathapetti%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=96993455-0e94-48ee-be4c-2d1394584263",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:244,
        title: "Life Ante Itta Vundaala",
        artist: "Rahul Sipligunj, Geetha Madhuri",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FLife%20Ante%20Itta%20Vundaala.mp3?alt=media&token=0a60a875-60df-483d-83f8-82d97cc0b75a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FLife%20Ante%20Itta%20Vundaala%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1f3917af-a18a-40a2-8539-4c8013d488fa",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:245,
        title: "Lingi Lingi Lingidi",
        artist: "Midhun Mukundan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FLingi%20Lingi%20Lingidi.mp3?alt=media&token=0aad1da4-66e7-4654-b771-4b9b95a7601d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FLingi%20Lingi%20Lingidi%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=63330c59-e5db-485b-b4e8-364775fbeee4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:246,
        title: "Maaye Chesi",
        artist: "Harshavardhan Rameshwar",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FMaaye%20Chesi%20(From%20_Devil%20-%20The%20British%20Secret%20Agent_).mp3?alt=media&token=8cf29931-cb18-483a-8c61-020e33de83aa",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FMaaye%20Chesi%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ffddba7e-6239-41f1-8a1a-61f9c4c66e34",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:247,
        title: "Mastaaru Mastaaru",
        artist: "G. V. Prakash",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FMastaaru%20Mastaaru.mp3?alt=media&token=0b099340-2575-4106-ac29-ae3197fa0729",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FMastaaru%20Mastaaru%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=63003938-ced1-433d-8cab-416760d5cbea",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:248,
        title: "My Dear Markandeya",
        artist: "L. V. Revanth",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FMy%20Dear%20Markandeya%20(From%20_BRO_).mp3?alt=media&token=baff995c-2681-440e-99d8-fb90d1c9e0d6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FMy%20Dear%20Markandeya%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ee2af4c5-825c-448d-b166-0d5ab179aa68",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:249,
        title: "Na Roja Nuvve",
        artist: "Hesham Abdul Wahab",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FNa%20Roja%20Nuvve.mp3?alt=media&token=12f8f444-26d1-45a2-bbf9-479b7a63ca92",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FNa%20Roja%20Nuvve%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=02150370-d3da-46dd-a40e-26d1fb7eb8f3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:250,
        title: "Nachavule Nachavule",
        artist: "B.Ajaneesh Loknath",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FNachavule%20Nachavule.mp3?alt=media&token=26ec423c-9481-402c-acb2-32300ec77306",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FNachavule%20Nachavule%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=90725eaf-5070-4880-9eca-5bdbc38ba09e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:251,
        title: "Nijame Ne Chebutunna",
        artist: "Sid Sriram",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FNijame%20Ne%20Chebutunna.mp3?alt=media&token=579c20fe-4826-4ed4-8db8-8f962cdbe150",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FNijame%20Ne%20Chebutunna%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6d9338fe-ad73-440b-81cb-db168b735b2a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:252,
        title: "Nuvvu Navvukuntu",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FNuvvu%20Navvukuntu.mp3?alt=media&token=c4444fba-55ba-44b1-98b2-7174d29b27ed",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FNuvvu%20Navvukuntu%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8f9d9478-017e-4c34-9195-b10f7192f09f",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:253,
        title: "O Rendu Prema Meghaalila",
        artist: "Vijai Bulganin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FO%20Rendu%20Prema%20Meghaalila%20(First%20Love%20Song)%20%5BFrom%20_Baby_%5D.mp3?alt=media&token=1e146b27-1ba2-4736-863b-49115c20eb40",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FO%20Rendu%20Prema%20Meghaalila%20(First%20Love%20Song)%20%5BFrom%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f43f3029-a2f4-4ba1-9668-5b16d8cedb54",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:254,
        title: "Odiyamma",
        artist: "Dhruv Vikram",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FOdiyamma%20(From%20_Hi%20Nanna_)%20%5BTELUGU%5D.mp3?alt=media&token=b1614a57-7355-4d0a-8e14-337b416ae591",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FOdiyamma%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2328bd3e-321c-40d5-bcc7-fd854ed3e9ec",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:255,
        title: "Oh My Baby",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FOh%20My%20Baby.mp3?alt=media&token=907e0282-502e-443f-b007-257016dd2b7f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FOh%20My%20Baby%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8e3b40e3-094d-48d5-88b3-33922941e534",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:256,
        title: "Ooru Palletooru",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FOoru%20Palletooru.mp3?alt=media&token=c05fbbf3-210c-45af-acdc-dbcdf25df2cc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FOoru%20Palletooru%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1be811e0-8c40-4a93-a7b5-d721db4e4575",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:257,
        title: "Poolamme Pilla",
        artist: "GowraHari ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FPoolamme%20Pilla%20(From%20_HanuMan_)%20%5BTelugu%5D.mp3?alt=media&token=963d5dcb-b467-4cdd-8ae9-ca6097dbba43",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FPoolamme%20Pilla%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=df7ec9f5-3d8e-4e1b-a1f8-71719554eaf5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:258,
        title: "Premisthunna",
        artist: "Vijai Bulganin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FPremisthunna%20(From%20_Baby_).mp3?alt=media&token=6f424fc0-e793-4d5b-94a8-fc02120bed96",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FPremisthunna%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4a80d85a-3a83-45f1-bff7-67eb0faaedd6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:259,
        title: "Priya Mithunam",
        artist: "Ajay-Atul",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FPriya%20Mithunam%20(Telugu).mp3?alt=media&token=3f5288f8-7b98-4cc2-aa99-eef8db1e8eff",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FPriya%20Mithunam%20(Telugu)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=864a6529-9063-49f6-b23c-1003bd7ef007",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:260,
        title: "Pulsar Bike",
        artist: "Bheems Ceciroleo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FPulsar%20Bike.mp3?alt=media&token=7f6161eb-39d0-478d-b9f0-e3eb56f03900",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FPulsar%20Bike%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b5717a5e-b9f5-43e9-bdbf-dab07114b732",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:261,
        title: "Radhika",
        artist: "Ram Miriyala",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FRadhika.mp3?alt=media&token=c72a7f08-32e8-4383-b98d-a8db79063eeb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FRadhika%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cb83d03c-7633-4c41-b0e9-5002db96216c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:262,
        title: "Roar Of Kesari",
        artist: "Thaman S",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FRoar%20Of%20Kesari%20(From%20_Bhagavanth%20Kesari_).mp3?alt=media&token=b6a9e32a-0aff-49bf-8ea7-c0e77882ae37",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FRoar%20Of%20Kesari%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f0ca0dc9-9206-427f-bb72-b1af48750911",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:263,
        title: "Samayama",
        artist: "Anurag Kulkarni",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FSamayama%20(From%20_Hi%20Nanna_).mp3?alt=media&token=dd9fd5c0-0932-4dca-ab3b-3b045c814987",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FSamayama%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1dd745a5-e1b5-47c2-94d3-2b55c8914f3c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:264,
        title: "Sammohanuda",
        artist: "Shreya Ghoshal",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FSammohanuda%20(From%20_Rules%20Ranjann_).mp3?alt=media&token=9e173af1-6f40-44e8-8d72-b0d7604ba2bf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FSammohanuda%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c5ca5dac-de71-45e1-a573-b1d1f0454c43",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:265,
        title: "Sooreede",
        artist: "Ravi Basrur",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FSooreede%20(From%20_Salaar%20Cease%20Fire%20-%20Telugu_).mp3?alt=media&token=122aa9bb-e324-4513-97ba-f60db8d4611e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FSooreede%20(From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=98baa756-5270-403e-afc8-5d454913d79d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:266,
        title: "Suttamla Soosi",
        artist: "Yuvan Shankar Raja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FSuttamla%20Soosi.mp3?alt=media&token=e445ec82-0251-438d-be12-f2c277d0dc41",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FSuttamla%20Soosi%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=76c359b7-a915-4e8f-8901-37ea948babc4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:267,
        title: "Thattukolede",
        artist: "Vijai Bulganin",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FThattukolede.mp3?alt=media&token=791a93c4-517e-48a6-bd2c-06bb7867ab81",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FThattukolede%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=11a649b7-ff87-4f1a-a27e-baf99ccf92f6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:268,
        title: "Ticket Eh Konakunda",
        artist: "Ram Miriyala",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FTicket%20Eh%20Konakunda.mp3?alt=media&token=2e92c0c3-e5e6-43d6-8b0f-ee496295ae52",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FTicket%20Eh%20Konakunda%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=65e39b32-720a-469e-8635-f9b1bda65847",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:269,
        title: "Vellake",
        artist: "Bharatt-Saurabh",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FVellake.mp3?alt=media&token=e05ad109-f362-43bc-9056-5a4c60fd18e8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FVellake%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=258995b2-6a18-4c8f-aa85-e4cdb10e58c7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:270,
        title: "Yedurangula Vaana",
        artist: "Sid Sriram",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ftelugu%2FYedurangula%20Vaana.mp3?alt=media&token=de486aae-16e6-499a-aee0-0e923ae52ceb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ftelugu%2FYedurangula%20Vaana%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=de961fab-4aad-443b-a56c-8911be4da5b0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:271,
        title: "24/7",
        artist: "Margaret Glaspy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2F24_7.mp3?alt=media&token=698cc15b-fbeb-47cb-8e04-2500f4ad7a08",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2F24_7%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0fc292b5-15be-4e6b-8b9c-8e9cf53614e6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:272,
        title: "Afterglow",
        artist: "Kingfishr",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FAfterglow.mp3?alt=media&token=cdb674fc-db01-4e66-a242-ad014ae9b948",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FAfterglow%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=86059c97-0ea8-4508-bdc6-e2728f80baa5",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:273,
        title: "All I Want Is You",
        artist: "The Decemberists",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FAll%20I%20Want%20Is%20You.mp3?alt=media&token=f60b84de-4aab-4b5c-8c53-63e78758ab9e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FAll%20I%20Want%20Is%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c7362a7d-ec11-40b4-a6ba-b7a0566aa4d3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:274,
        title: "April Song",
        artist: "Peter Bradley Adams",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FApril%20Song.mp3?alt=media&token=dd8f4e07-9a6a-4f96-99ce-8cd3c111e053",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FApril%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=11d91171-6c4c-4870-96a3-14ba0bf862e8",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:275,
        title: "Bad News",
        artist: "Hovvdy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FBad%20News.mp3?alt=media&token=08c01fb7-1cb1-42df-9fd2-438c7870c557",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FBad%20News%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b23d3caa-6a62-42ab-b57f-6906947bf48b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:276,
        title: "Bones Shake",
        artist: "Hazlett",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FBones%20Shake.mp3?alt=media&token=51783b56-8cae-45ad-b360-97aecc6ea1b8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FBones%20Shake%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=35cc70e0-8102-4150-a7b9-c5d1e329a05f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:277,
        title: "Call me back",
        artist: "James Vincent McMorrow",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FCall%20me%20back.mp3?alt=media&token=693ad6b6-5739-40c7-a206-32a397a6465b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FCall%20me%20back%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=77b5810e-94c3-4fa2-b100-2e779dfc07cf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:278,
        title: "Clotheslined",
        artist: "Henrik",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FClotheslined.mp3?alt=media&token=0e20a641-dd45-4656-a797-a83525852928",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FClotheslined%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=986a5343-8e93-4f21-ba21-93c6b51599a3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:279,
        title: "Concrete 2",
        artist: "Haley Blais",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FConcrete%202.mp3?alt=media&token=fa159346-3a79-4ea2-92d0-5b822aca2fbd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FConcrete%202%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f424835f-4f6d-4227-b3a9-53e8ac433c3f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:280,
        title: "DON'T TALK TO STRANGERS",
        artist: "Papooz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FDON'T%20TALK%20TO%20STRANGERS.mp3?alt=media&token=44539282-42ad-4426-a710-a9b812580cb5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FDON'T%20TALK%20TO%20STRANGERS%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e4be7524-8712-438f-8498-18dfc666381e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:281,
        title: "Daisies",
        artist: "American Authors",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FDaisies.mp3?alt=media&token=b50dceb1-10e3-4a7d-be75-18287efbaa42",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FDaisies%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d9f42549-1296-4ff2-86d2-658dff02a3ef",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:282,
        title: "Easier",
        artist: "Evan Honer",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FEasier.mp3?alt=media&token=4aff3a21-8029-47ba-b9f8-804b09104a1f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FEasier%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6198f03f-0816-45f7-8484-de8028a0e514",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:283,
        title: "Evergreen",
        artist: "Deyaz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FEvergreen%20(feat.%20Ilsey).mp3?alt=media&token=0d61d493-542d-44d8-bdb8-04d6c453f7ad",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FEvergreen%20(feat.%20Ilsey)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=533008b6-681e-4dc6-aca6-7081f9bb54fd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:284,
        title: "Fair Bit of Time",
        artist: "Field Guide",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FFair%20Bit%20of%20Time.mp3?alt=media&token=33ca5a06-eeee-41f7-a7d3-8b38fb0708ec",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FFair%20Bit%20of%20Time%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2f7b0374-356b-4ca6-af57-15fc33d61828",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:285,
        title: "Find New Ways",
        artist: "Dan Mangan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FFind%20New%20Ways.mp3?alt=media&token=4ad4dc1d-817a-45da-ae94-dc68c80f34f3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FFind%20New%20Ways%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=04e8ab75-860f-40be-bf3d-a9af717f29ce",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:286,
        title: "Going to Georgia",
        artist: "Jake Xerxes Fussell",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FGoing%20to%20Georgia.mp3?alt=media&token=15519d97-8cc2-47cd-a3e6-53f782204a15",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FGoing%20to%20Georgia%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=968c5b2e-3846-4a45-a3ea-892a22cc2cb3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:287,
        title: "Hang In There",
        artist: "Maya Hawke",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FHang%20In%20There.mp3?alt=media&token=da8ff4e6-7689-464e-abd9-94bcbca52af2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FHang%20In%20There%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d22f1960-57b0-4500-93a1-13a7d7a2d3dd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:288,
        title: "Heartless",
        artist: "Nathaniel Rateliff & The Night Sweats",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FHeartless.mp3?alt=media&token=7eabf846-2ead-412c-81ab-f336c389b622",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FHeartless%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=72b32dd3-7297-4fe1-9a31-b4c138b144c6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:289,
        title: "Hold On Tight",
        artist: "Amos Lee",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FHold%20On%20Tight.mp3?alt=media&token=784930c2-211f-4340-a7cc-d251c9a688ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FHold%20On%20Tight%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ca11e05d-7f12-4bbf-80e6-9ecffc568781",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:290,
        title: "I Wanna Die in LA",
        artist: "Jon Bryant",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FI%20Wanna%20Die%20in%20LA.mp3?alt=media&token=49d84646-9691-4741-a4d3-067151cf84e2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FI%20Wanna%20Die%20in%20LA%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=dcc171c2-ffca-4f7b-b8cc-15a469e719b9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:291,
        title: "In The Other Room",
        artist: "Nolan Taylor",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FIn%20The%20Other%20Room.mp3?alt=media&token=0ab7c592-29b8-4e63-b4f4-9cdfe3ff237f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FIn%20The%20Other%20Room%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=04fa28b3-d5be-42ea-a566-386bca8ba965",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:292,
        title: "Isle of Strawberries Rediscovered",
        artist: "Edwin Raphael",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FIsle%20of%20Strawberries%20Rediscovered.mp3?alt=media&token=44c208f3-ba04-43ab-a274-854e40860b84",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FIsle%20of%20Strawberries%20Rediscovered%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e53b84da-0d8c-4f17-b094-8e1c49dc84cf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:293,
        title: "Let's get married",
        artist: "Delacey",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FLet's%20get%20married.mp3?alt=media&token=d48ee8ad-39f5-4ac0-a65c-e3e399074094",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FLet's%20get%20married%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0b338b0f-1f3a-4c3c-a2b1-90e293bf8c9a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:294,
        title: "Light As Grass",
        artist: "Lucy Rose",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FLight%20As%20Grass.mp3?alt=media&token=534e8652-23d9-472f-a1f3-208dfaf818d2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FLight%20As%20Grass%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6688e389-1a7f-4dbc-a100-d2ad23ae3a20",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:295,
        title: "M3",
        artist: "Hailaker",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FM3.mp3?alt=media&token=dbdf593b-73a4-468d-a8fc-4361096369d0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FM3%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2f9154cb-effc-46ff-87e6-d0cc2878a55e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:296,
        title: "Maine",
        artist: "hey, nothing",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FMaine.mp3?alt=media&token=b865571d-0dd6-4998-96c8-05e1d10f00c8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FMaine%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c6d4eb7b-26dc-4978-b250-f79ccd5a2cdd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:297,
        title: "Mansion",
        artist: "Nina Nesbitt",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FMansion.mp3?alt=media&token=bdefb563-9286-4356-9419-9105b246c3d4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FMansion%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c432df6b-e74c-47ad-870a-de1bf6df9ad9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:298,
        title: "My Best Friend Needs",
        artist: "Babehoven",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FMy%20Best%20Friend%20Needs.mp3?alt=media&token=aa56ca7b-d2cb-49a3-bbe8-ba767b447ec0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FMy%20Best%20Friend%20Needs%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=15f6aa51-540d-4992-bcbb-ae6815b7c50c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:299,
        title: "My Kind",
        artist: "Alycia Lang",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FMy%20Kind.mp3?alt=media&token=e60d242a-042d-4c2e-8a83-5de0c4c97dab",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FMy%20Kind%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=63398495-f01e-4065-a3d6-1e2b818c3ddc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:300,
        title: "One Less Question",
        artist: "Madi Diaz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FOne%20Less%20Question.mp3?alt=media&token=76b15c0c-d174-473d-ada5-d68137fd4439",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FOne%20Less%20Question%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0b662bfd-812b-4a15-9257-f7b773ed7c80",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:301,
        title: "Only One",
        artist: "Cassandra Jenkins",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FOnly%20One.mp3?alt=media&token=ded3a2cd-cd75-4731-886e-ec5cc1cd96eb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FOnly%20One%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=67c4fc68-9f0b-43aa-8dec-e76f2233550f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:302,
        title: "Poem Song",
        artist: "Lily Kershaw",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FPoem%20Song.mp3?alt=media&token=39ebd568-d204-4daa-8bc7-010716fdf521",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FPoem%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e860b7ae-11fa-4610-971c-ec6f87ceb615",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:303,
        title: "Polygraph",
        artist: "Old Sea Brigade",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FPolygraph.mp3?alt=media&token=1a282f1f-63f7-4b48-9973-75d94a257ff6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FPolygraph%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b0655159-de4c-432f-8914-0474d35b28b4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:304,
        title: "Questions, Chaos & Faith",
        artist: "Joy Oladokun",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FQuestions%2C%20Chaos%20%26%20Faith.mp3?alt=media&token=816955fc-106e-4dae-af3f-1715905e284b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FQuestions%2C%20Chaos%20%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ce3d296c-d48f-496e-98eb-e58271bbaf50",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:305,
        title: "Raat Ki Rani",
        artist: "Arooj Aftab",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FRaat%20Ki%20Rani.mp3?alt=media&token=39754b84-f873-4435-98e3-d8eff2f19513",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FRaat%20Ki%20Rani%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7a225915-f5ea-47a0-8769-6e80a87d8e57",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:306,
        title: "Riding Around In The Dark",
        artist: "Florist",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FRiding%20Around%20In%20The%20Dark%20-%20Florist.mp3?alt=media&token=06e68ba1-3470-4cda-964a-2cf4383422b2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FRiding%20Around%20In%20The%20Dark%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=51ad3853-36ae-4300-b1ab-0a2b17ea2acb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:307,
        title: "Right, Wrong or Ready",
        artist: "Kara Jackson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FRight%2C%20Wrong%20or%20Ready.mp3?alt=media&token=ea3c0d2e-dd9f-4fae-861f-5c1c4fb15605",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FRight%2C%20Wrong%20or%20Ready%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0a835568-b361-48ea-83d5-ab3c8b1c23f9",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:308,
        title: "Rise",
        artist: "Joshua Hyslop",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FRise.mp3?alt=media&token=ecacbe3e-d7ce-4cff-bc85-47272c1620a2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FRise%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=206adbfc-902d-46dd-a749-92795ec1ef8c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:309,
        title: "Seen My Man",
        artist: "Trixie Mattel",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FSeen%20My%20Man.mp3?alt=media&token=8c15473c-cbd3-4a30-a5bb-4be19d95950f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FSeen%20My%20Man%20-%20Spotify%20Singles%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c5d60857-afb7-4c4e-abfb-f1af6dbe9409",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:310,
        title: "Seize The Sun",
        artist: "Hayden Everett",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FSeize%20The%20Sun.mp3?alt=media&token=a61c13f2-7188-4006-8afe-035d5a2ae1b8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FSeize%20The%20Sun%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=dc6284a1-3dc5-4885-b261-c914db0985fd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:311,
        title: "Stupid",
        artist: "Phoebe Go",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FStupid.mp3?alt=media&token=e4ad129d-cd1f-465e-bd5b-44667bcff3b8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FStupid%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=891821f3-bfa0-463b-bcd6-21e0d3e838bf",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:312,
        title: "Sweet Talk",
        artist: "Iron & Wine",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FSweet%20Talk.mp3?alt=media&token=369020bc-f546-4854-97a9-f6d71680be03",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FSweet%20Talk%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f0c6c630-53c9-4d34-af0a-3a433d802862",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:313,
        title: "The Elevator",
        artist: "Guster",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FThe%20Elevator.mp3?alt=media&token=f0cfd28c-afcc-47ca-8c93-acf13df01877",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FThe%20Elevator%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=586e1734-aef1-4338-975a-bd3b0e05048a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:314,
        title: "Virtual Hug",
        artist: "Bloomsday",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FVirtual%20Hug.mp3?alt=media&token=aea7118d-6169-4b79-84af-7e38f1f1747e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FVirtual%20Hug%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6316435b-7878-40f6-b940-9fbb9bf43592",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:315,
        title: "Wash It Away",
        artist: "Axel Flóvent",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FWash%20It%20Away.mp3?alt=media&token=df56719c-adb3-4f2f-b086-254f7018b8f5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FWash%20It%20Away%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=78d2c00d-1a0c-48a6-83ec-9ccb696a9faa",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:316,
        title: "Why Would You Be Loved",
        artist: "Hozier",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FWhy%20Would%20You%20Be%20Loved.mp3?alt=media&token=ff6ab1e9-bc8a-42e0-8398-c285f05f29f0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FWhy%20Would%20You%20Be%20Loved%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=844c8e72-cb7d-4405-b7c8-182e0ee1d7ff",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:317,
        title: "Wienerschnitzel",
        artist: "slimdan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FWienerschnitzel.mp3?alt=media&token=85e51743-837f-47a5-bbfd-51db1c0d1c00",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FWienerschnitzel%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b66fdb63-6774-4f15-9863-be9cf2ab9243",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:318,
        title: "Wishes",
        artist: "Tiny Habits",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2FWishes%20-%20Tiny%20Habits.mp3?alt=media&token=96886993-a447-42a4-9c86-cae107855471",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2FWishes%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=de908084-356a-4f05-a64b-c89430e9210d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:319,
        title: "eyes",
        artist: "Noah Pope",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2Feyes.mp3?alt=media&token=a9368d94-1585-4054-b715-33b506250ab1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2Feyes%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0451a835-d0ba-430a-b3a5-39482bf2cee4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:320,
        title: "in loving",
        artist: "Sophie Holohan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Ffolk%2Fin%20loving.mp3?alt=media&token=faa7a883-427f-4850-9c7d-2e6e66a4f53c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Ffolk%2Fin%20loving%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cfe518e9-b659-4778-b96f-e95f2b7a904d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:321,
        title: "#SELFIE",
        artist: "The Chainsmokers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2F%23SELFIE.mp3?alt=media&token=640886ad-446e-461c-93a2-acbd219d9d47",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2Fdownloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e47d6602-1b90-4b8f-996c-54771350679a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:322,
        title: "A Little Party Never Killed Nobody",
        artist: "Fergie",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FA%20Little%20Party%20Never%20Killed%20Nobody%20(All%20We%20Got).mp3?alt=media&token=0e025ecd-bf70-416c-85b6-b2e7d846134b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FA%20Little%20Party%20Never%20Killed%20Nobody%20(All%20We%20Got)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=92d524aa-d055-46fc-9f66-69981140218f",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:323,
        title: "Am I Wrong",
        artist: "Nico & Vinz",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FAm%20I%20Wrong.mp3?alt=media&token=3a1f1c83-2309-48e0-86cc-c5f407941d13",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FAm%20I%20Wrong%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=56db2bcb-973e-4aa9-9242-2cb5f8970a46",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:324,
        title: "Animals - Extended",
        artist: "Martin Garrix",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FAnimals%20-%20Extended.mp3?alt=media&token=29da8145-f181-490e-8ae4-96c3c99afdee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FAnimals%20-%20Extended%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=02a626d9-5065-4e16-8b3e-f11a6b7a458b",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:325,
        title: "Best Day Of My Life",
        artist: "American Authors",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBest%20Day%20Of%20My%20Life.mp3?alt=media&token=af170644-70fb-421d-a682-eac74b12839a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBest%20Day%20Of%20My%20Life%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f955421f-c3ef-4254-99b5-9c0ce6f5c4b3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:326,
        title: "Blurred Lines",
        artist: "Robin Thicke",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBlurred%20Lines.mp3?alt=media&token=66808dd6-ea97-4b26-b3c0-837c24366a21",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBlurred%20Lines%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=decf44bc-c9a3-4221-9624-23fc18a839fe",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:327,
        title: "Bonfire Heart",
        artist: "James Blunt",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBonfire%20Heart.mp3?alt=media&token=d3aea8db-99c9-46cf-862f-7ca7193bd2d8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBonfire%20Heart%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a2e7e126-53b1-4d35-b240-f62dcb6b64b5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:328,
        title: "Burn",
        artist: "Ellie Goulding",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBurn.mp3?alt=media&token=d065c124-1a3c-49c5-8f25-27f541516ae7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBurn%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=faac26fb-2a13-46eb-814a-0b207573115c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:329,
        title: "Busy Doin' Nothin'",
        artist: "Ace Wilder",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FBusy%20Doin'%20Nothin'.mp3?alt=media&token=5ba4e53d-d9f5-4e3c-8fcc-4408c06867b6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FBusy%20Doin'%20Nothin'%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=439bdfcb-d5c0-4b55-8e66-b22523cfbe1c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:330,
        title: "Can't Hold Us (feat. Ray Dalton)",
        artist: "Macklemore & Ryan Lewis",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCan't%20Hold%20Us%20(feat.%20Ray%20Dalton).mp3?alt=media&token=1f3478e5-7c0c-483a-a096-01b6a8fcb9d1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCan't%20Hold%20Us%20(feat.%20Ray%20Dalton)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c564bdf8-dcfe-4cb9-90c9-adf1e829b291",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:331,
        title: "Can't Remember to Forget You",
        artist: "Shakira",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCan't%20Remember%20to%20Forget%20You.mp3?alt=media&token=e9431eea-1e7b-4bed-bd17-4feff8f52b8d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCan't%20Remember%20to%20Forget%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3eaa075a-8fff-4a30-b991-ae930661b706",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:332,
        title: "Counting Stars",
        artist: "OneRepublic",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FCounting%20Stars.mp3?alt=media&token=dd7eef36-1ed6-48f9-9699-fb3069ee57b3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FCounting%20Stars%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ba332777-d5e1-4f8b-8a7a-04f3e9daf172",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:333,
        title: "Dark Horse",
        artist: "Katy Perry",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FDark%20Horse.mp3?alt=media&token=5fe5b4d2-38a0-4304-a609-9e61e881e672",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FDark%20Horse%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0127d02e-5f93-46b2-851e-8312f774ba09",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:334,
        title: "Do What U Want",
        artist: "Lady Gaga",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FDo%20What%20U%20Want.mp3?alt=media&token=532d0fd0-c4d3-468e-bff0-d66239a9a0a4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FDo%20What%20U%20Want%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b3f6a8b0-3f5e-41ca-aa21-fdb4fa574ce3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:335,
        title: "Faith - Radio Edit",
        artist: "Blasterjaxx",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FFaith%20-%20Radio%20Edit.mp3?alt=media&token=996b71f3-6b6b-4edf-8ae2-c758118d6490",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FFaith%20-%20Radio%20Edit%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d97e4953-1aee-44b9-bcbd-7976cc23c876",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:336,
        title: "Feelin' Myself",
        artist: "will.i.am",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FFeelin'%20Myself.mp3?alt=media&token=60e7b4b2-8493-47dc-b40c-073b20603b04",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FFeelin'%20Myself%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=712ddd73-44d0-43cc-a899-047e3417a36d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:337,
        title: "Get Lucky (Radio Edit)",
        artist: "Daft Punk",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FGet%20Lucky%20(Radio%20Edit)%20%5Bfeat.%20Pharrell%20Williams%20and%20Nile%20Rodgers%5D.mp3?alt=media&token=80da148b-d861-4101-93e8-416016586c85",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FGet%20Lucky%20(Radio%20Edit)%20%5Bfeat.%20Pharrell%20Williams%20and%20Nile%20Rodgers%5D%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0c71ebba-7f86-44a2-bc2b-5bc8451e66db",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:338,
        title: "Hall of Fame",
        artist: "The Script",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHall%20of%20Fame%20(feat.%20will.i.am).mp3?alt=media&token=43f0c7ab-0617-4e3d-aca1-1bc4c700a116",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHall%20of%20Fame%20(feat.%20will.i.am)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5e13c3c5-a798-434e-8423-05711e68c9c2",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:339,
        title: "Happy",
        artist: "Pharrell Williams",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHappy.mp3?alt=media&token=0149eb8a-986a-4c64-b66a-a0ff89910aff",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHappy%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ad12d0c9-1a9c-4263-bb45-00418678d8ab",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:340,
        title: "Hey Brother",
        artist: "Avicii",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHey%20Brother.mp3?alt=media&token=9d520633-a9e4-4a11-9674-d1f4165ceed4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHey%20Brother%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1f71509e-5727-438f-a04d-e5106693277c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:341,
        title: "Ho Hey",
        artist: "The Lumineers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHo%20Hey.mp3?alt=media&token=e576563d-947f-481c-a5b1-c1a9b09eda66",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHo%20Hey%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c945ecf6-f6a9-4f64-a681-35fb37fc591d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:342,
        title: "Holy Grail",
        artist: "JAY-Z",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FHoly%20Grail.mp3?alt=media&token=4b8f5bb7-85c0-4a21-9f47-89d1efe9c291",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FHoly%20Grail%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0868c401-211e-4277-8802-175bd6034034",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:343,
        title: "Just Give Me a Reason",
        artist: "P!NK",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FJust%20Give%20Me%20a%20Reason%20(feat.%20Nate%20Ruess).mp3?alt=media&token=0ef0e75b-ec77-4e82-aabe-167116351e99",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FJust%20Give%20Me%20a%20Reason%20(feat.%20Nate%20Ruess)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f47c3494-5d23-408a-8fd9-d190317a07ee",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:344,
        title: "La La La",
        artist: "Naughty Boy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLa%20La%20La.mp3?alt=media&token=2c992e06-f98c-42a2-b712-54ac6b5617c0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLa%20La%20La%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cf209fe9-3340-4e83-8fb6-e332f7496c61",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:345,
        title: "Let Her Go",
        artist: "Passenger",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20Her%20Go.mp3?alt=media&token=91f4fe58-de43-4c0b-9e42-2899e5d91ba8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20Her%20Go%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bac39e90-de16-4b5d-8662-0518fb3919a3",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:346,
        title: "Let It Go-Single Version",
        artist: "Demi Lovato",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20it%20go%20Single%20Version.mp3?alt=media&token=9d13652e-7969-4391-adf7-64415cd5a514",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20It%20Go%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_%20(1).jpg?alt=media&token=271ae472-4277-4468-a906-f02b6fb39481",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:347,
        title: "Let It Go-Soundtrack Version",
        artist: "Idina Menzel",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLet%20it%20go%20Soundtrack%20Version.mp3?alt=media&token=161c3473-ec0c-4b08-b431-2244a2ecf0ce",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLet%20It%20Go%20-%20From%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7fbcc48c-d063-4088-a435-c3fa975c3d91",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:348,
        title: "Love Me Again",
        artist: "John Newman",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FLove%20Me%20Again.mp3?alt=media&token=fe7dd1d7-aa2a-4804-9cbb-b0f23ec58783",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FLove%20Me%20Again%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=00d557f8-1642-4ce9-92ed-bca09698d00b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:349,
        title: "Magic",
        artist: "Coldplay",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMagic.mp3?alt=media&token=610715d0-1449-40fe-a13b-cb86644a0166",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMagic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=7e9d3a26-0ce7-4d18-8c11-428d257d9a28",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:350,
        title: "Mirrors",
        artist: "Justin Timberlake",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMirrors.mp3?alt=media&token=0e4f1151-9d9f-40bb-8c78-0929138cdb48",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMirrors%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1bb6bcb7-1a38-4bce-932f-22fbcf890540",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:351,
        title: "Money On My Mind",
        artist: "Sam Smith",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FMoney%20On%20My%20Mind.mp3?alt=media&token=3524e853-2452-4074-9656-55be04a881b6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FMoney%20On%20My%20Mind%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=721de4e0-0627-466e-b8a8-cdd5474b5f8d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:352,
        title: "Papaoutai",
        artist: "Stromae",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FPapaoutai.mp3?alt=media&token=bb22c8d8-d8c3-42f7-a5db-297b2e0c4fb0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FPapaoutai%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79fc1cd8-0f80-4df2-a1bb-39c751301583",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:353,
        title: "Pompeii",
        artist: "Bastille",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FPompeii.mp3?alt=media&token=d3ad2b1f-1776-41a8-a9e8-6bd1cf3396bf",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FPompeii%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f8a5b11e-5500-4f18-8712-e68aeb144e86",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:354,
        title: "Rather Be (feat. Jess Glynne)",
        artist: "Clean Bandit",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FRather%20Be%20(feat.%20Jess%20Glynne).mp3?alt=media&token=90633c4b-ab7f-4d32-bdee-d69430a591a9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FRather%20Be%20(feat.%20Jess%20Glynne)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b915889a-1761-4cea-8bcf-1d4f51a72e41",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:355,
        title: "Red Lights",
        artist: "Tiësto",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FRed%20Lights.mp3?alt=media&token=ce748603-6b31-43c0-b4a8-0f7990d77237",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FRed%20Lights%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=eda00227-54e3-406d-b200-67d3461b1050",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:356,
        title: "Safe And Sound",
        artist: "Capital Cities",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSafe%20And%20Sound.mp3?alt=media&token=32703fc1-8926-4e7b-94ab-e45fd3d55891",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSafe%20And%20Sound%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=df11f6d5-4b95-416b-a2db-76e558f41296",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:357,
        title: "Sail",
        artist: "AWOLNATION",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSail.mp3?alt=media&token=510cd8b4-59a5-487a-bef8-97c575965eee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSail%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=79db37c4-9f70-42f0-950e-9a4551bf34ea",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:358,
        title: "Say Something",
        artist: "A Great Big World",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSay%20Something.mp3?alt=media&token=d77cbcd7-02ae-4067-987a-7fdda1f58df1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSay%20Something%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=87b35242-a33b-4ec7-8ebf-a2d11000dee6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:359,
        title: "Shot Me Down",
        artist: "David Guetta",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FShot%20Me%20Down%20(feat.%20Skylar%20Grey)%20-%20Radio%20Edit.mp3?alt=media&token=c0adb61e-0872-478c-94be-df3b8f839e12",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FShot%20Me%20Down%20(feat.%20Skylar%20Grey)%20-%20Radio%20Edit%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d3a5ff45-8ddc-458f-8f0d-d174749c6158",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:360,
        title: "Stay The Night",
        artist: "Zedd",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FStay%20The%20Night%20-%20featuring%20Hayley%20Williams%20of%20Paramore.mp3?alt=media&token=90cab1c5-0bd6-4ca0-9eee-e2a5695e8a73",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FStay%20The%20Night%20-%20featuring%20Hayley%20Williams%20of%20Paramore%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1fed67f8-1e1a-435d-925a-91ee29a6bf22",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:361,
        title: "Story of My Life",
        artist: "One Direction",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FStory%20of%20My%20Life.mp3?alt=media&token=d1b07bcb-c254-48a5-9770-9c35226c9403",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FStory%20of%20My%20Life%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=33e697ae-b828-4076-b07e-42ce1f750f71",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:362,
        title: "Summertime Sadness",
        artist: "Lana Del Rey",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSummertime%20Sadness%20(Lana%20Del%20Rey%20Vs.%20Cedric%20Gervais)%20-%20Cedric%20Gervais%20Remix.mp3?alt=media&token=03ee760d-8c87-42d6-b144-22be9613091a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSummertime%20Sadness%20(Lana%20Del%20Rey%20Vs.%20Cedric%20Gervais)%20-%20Cedric%20Gervais%20Remix%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a3b9fdea-ff62-4bdd-8144-ddad13c4331d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:363,
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FSweater%20Weather.mp3?alt=media&token=8f6faeab-d6af-4d30-80da-a6e2e122d6e2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FSweater%20Weather%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=fc4789a2-5c7a-438b-804a-4795eb57ae06",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:364,
        title: "Team",
        artist: "Lorde",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTeam.mp3?alt=media&token=db78ab87-ba81-4185-a37f-a1dc6dd015c7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTeam%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ec70c315-ea18-42cb-8e89-ea775bc5e7b0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:365,
        title: "The Man",
        artist: "Aloe Blacc",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FThe%20Man.mp3?alt=media&token=4ad8abe7-497b-49a4-b972-32ecbbd6f130",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FThe%20Man%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5e2ad9f1-cde2-4da4-86de-0f411e54dbab",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:366,
        title: "Timber",
        artist: "Pitbull",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTimber.mp3?alt=media&token=d31d946e-3460-4b01-996c-a6dde0f92bfb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTimber%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e7c6858b-3112-40b0-bbbd-de10be82bbc1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:367,
        title: "Treasure",
        artist: "Bruno Mars",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FTreasure.mp3?alt=media&token=632a2079-00ed-48ff-9aab-e7c5ab2776ee",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FTreasure%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6af146a9-3530-4621-b5ea-573f6bfe6656",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:368,
        title: "Under Control",
        artist: "Calvin Harris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FUnder%20Control%20(feat.%20Hurts).mp3?alt=media&token=85da404e-13de-4c3d-9832-f26022ef5567",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FUnder%20Control%20(feat.%20Hurts)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9fd639e5-fd86-44a0-b324-cbd9a0b31442",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:369,
        title: "White Walls",
        artist: "Macklemore & Ryan Lewis",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FWhite%20Walls%20(feat.%20ScHoolboy%20Q%20%26%20Hollis).mp3?alt=media&token=ad808f84-3c47-4730-ab07-738ba6237285",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FWhite%20Walls%20(feat.%20ScHoolboy%20Q%20%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=790d66e3-a011-4a18-b051-102a457875e8",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:370,
        title: "Wrecking Ball",
        artist: "Miley Cyrus",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fpop%2FWrecking%20Ball.mp3?alt=media&token=3f73b540-de52-4c91-8555-da5f2c50eb97",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fpop%2FWrecking%20Ball%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=98114a04-7a7d-47b9-a148-7800be99709a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:371,
        title: "Automatic Sun",
        artist: "The Warning",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FAutomatic%20Sun.mp3?alt=media&token=c232fe9d-e380-437c-86e9-1ea78e2e3db8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FAutomatic%20Sun%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1cca020b-e3c1-4bcd-a2ba-7cb6a4fd6144",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:372,
        title: "Bored of Being Sad",
        artist: "Microwave",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FBored%20of%20Being%20Sad.mp3?alt=media&token=c3538ca2-6a54-41ae-a814-5f7f709f1e9e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FBored%20of%20Being%20Sad%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d91689c1-b1c4-4bbc-805e-3610f7cb637a",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:373,
        title: "Broken Man",
        artist: "St. Vincent",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FBroken%20Man.mp3?alt=media&token=9e4141ad-18dc-4951-8278-45020605bbc0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FBroken%20Man%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=25a52721-9315-47e2-8283-893df1efd986",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:374,
        title: "Burn The Witch",
        artist: "PVRIS",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FBurn%20The%20Witch.mp3?alt=media&token=c1518ea0-585e-481d-bf57-51fe602d5231",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FBurn%20The%20Witch%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e8f5979f-c000-4fa3-ba63-db6daf72f420",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:375,
        title: "Caffeine",
        artist: "Jack Kays",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FCaffeine.mp3?alt=media&token=8422c8ea-323f-4d96-96f0-7b8ead74309c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FCaffeine%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=83d65629-df67-4941-a63e-47dacc72e2ac",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:376,
        title: "Dead To Me",
        artist: "Palaye Royale",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FDead%20To%20Me.mp3?alt=media&token=05c53f38-d3b9-48a1-89a4-d59060488d86",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FDead%20To%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=99d2f586-c6c1-4556-8c5c-6bb8d2d8c03c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:377,
        title: "Do It Faster",
        artist: "Militarie Gun",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FDo%20It%20Faster.mp3?alt=media&token=4c8e9751-1ef7-4ad1-8460-32f67862b75f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FDo%20It%20Faster%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=61883f62-6a69-47ff-89bf-3ab005cac19f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:378,
        title: "Docket",
        artist: "Blondshell",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FDocket%20(feat.%20Bully).mp3?alt=media&token=c8cb2173-69c8-42ed-a30f-15ad2956d534",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FDocket%20(feat.%20Bully)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cdcc8ee5-7ead-4640-bafd-56ffe7816dca",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:379,
        title: "Dumbest Girl Alive",
        artist: "100 gecs",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FDumbest%20Girl%20Alive.mp3?alt=media&token=659d2e9e-441b-4f56-8db3-1d9d5a6bcf3e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FDumbest%20Girl%20Alive%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=548d527f-e6ed-48b6-9875-bb6212a6769b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:380,
        title: "Edge of the Earth",
        artist: "The Beaches",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FEdge%20of%20the%20Earth.mp3?alt=media&token=53c49da1-6412-494b-a8a0-59ff82c8606b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FEdge%20of%20the%20Earth%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b0d95014-edf4-434a-a263-cda55cc1d748",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:381,
        title: "End of Beginning",
        artist: "Djo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FEnd%20of%20Beginning.mp3?alt=media&token=eae4c560-5a18-4f21-a9fb-0e9b398eb1c9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FEnd%20of%20Beginning%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=545b6ad6-78e9-4200-a5f9-10c258a72f6c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:382,
        title: "Explode!",
        artist: "Mother Mother",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FExplode!.mp3?alt=media&token=2af6bbfc-7eb3-4e47-860d-53c1369c2f2b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FExplode!%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a8bee720-04f4-42ac-bdd1-cbc669992839",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:383,
        title: "Gift Horse",
        artist: "IDLES",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FGift%20Horse.mp3?alt=media&token=a1cc51dc-afbb-4bbb-b794-35bcb46bab26",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FGift%20Horse%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bfb63fc1-8449-4e85-ab8e-529f79697626",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:384,
        title: "Karma Police",
        artist: "Pierce The Veil",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FKarma%20Police.mp3?alt=media&token=83170976-6a5e-48bf-84ca-0c3321825ee5",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FKarma%20Police%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=97893dd8-736e-4b69-89f8-3ee77191230a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:385,
        title: "Leave Her",
        artist: "d4vd",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FLeave%20Her.mp3?alt=media&token=dcf75105-0ea1-430a-b495-d08b11b9070b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FLeave%20Her%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8986aaa9-018f-4533-96f4-edb7a5e9abb5",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:386,
        title: "Like I Say (I runaway)",
        artist: "Nilüfer Yanya",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FLike%20I%20Say%20(I%20runaway).mp3?alt=media&token=2e17b7bd-c392-47dc-b56b-55f718fe12cb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FLike%20I%20Say%20(I%20runaway)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=eae0413f-d61d-4b00-996c-327cb16ab291",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:387,
        title: "Loud Bark",
        artist: "Mannequin Pussy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FLoud%20Bark.mp3?alt=media&token=002d2c5a-7e83-4661-a915-6d96ba6197b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FLoud%20Bark%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=024ecb0c-0355-48fe-8ac7-fdf92410da1d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:388,
        title: "Midas",
        artist: "Wunderhorse",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FMidas.mp3?alt=media&token=e99296a2-94af-480a-86f6-eda67519e21d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FMidas%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=fc24186d-a806-4197-921f-74e7ad41e366",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:389,
        title: "My Condition",
        artist: "Dead Poet Society",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FMy%20Condition.mp3?alt=media&token=a996996f-9cbc-43f2-9f6d-94b99ff9af62",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FMy%20Condition%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=11e2a725-52ad-4c10-a1b3-e5b203f27049",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:390,
        title: "Neon Pill",
        artist: "Cage The Elephant",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FNeon%20Pill.mp3?alt=media&token=f792b811-60b4-4101-9061-9e2e6138b164",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FNeon%20Pill%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2b128e84-fe1e-4fba-aaf1-570cc5f617e0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:391,
        title: "Next Semester",
        artist: "Twenty One Pilots",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FNext%20Semester.mp3?alt=media&token=fda24b9e-f7a8-44c2-9484-37fa232c846b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FNext%20Semester%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=94946235-0789-4847-ab23-7c959f90f8f4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:392,
        title: "Not The 1975",
        artist: "Knox",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FNot%20The%201975.mp3?alt=media&token=5982de81-3594-4e97-a20d-69c72455d8f7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FNot%20The%201975%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1b73bc01-85ed-47b3-a1e4-ab1aa6400b5b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:393,
        title: "Nothing To Do",
        artist: "Kings of Leon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FNothing%20To%20Do.mp3?alt=media&token=acfde9ef-595d-4fd2-a774-4cbbec239c1a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FNothing%20To%20Do%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b61e36b6-48a7-4300-b4d4-bae36ec58474",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:394,
        title: "Oh No :: He Said What?",
        artist: "Nothing But Thieves",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FOh%20No%20__%20He%20Said%20What_.mp3?alt=media&token=271535e9-ea68-4615-b9ad-1cb8a6bc8fd8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FOh%20No%20__%20He%20Said%20What_%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b69932b7-79d3-4f6f-9431-55a0bc8cc1f4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:395,
        title: "One Of The Pack",
        artist: "Softcult",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FOne%20Of%20The%20Pack.mp3?alt=media&token=87fc0bce-8c47-438c-beca-e7de21210b29",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FOne%20Of%20The%20Pack%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=35c66b0d-9ec7-4896-b506-feaf0663696e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:396,
        title: "Please Please Please Let Me Get What I Want - 2005 Remaster",
        artist: "Deftones",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FPlease%20Please%20Please%20Let%20Me%20Get%20What%20I%20Want%20-%202005%20Remaster.mp3?alt=media&token=1767a4cc-de89-490e-9c85-a5b81d6437db",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FPlease%20Please%20Please%20Let%20Me%20Get%20What%20I%20Want%20-%202005%20Remaster%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=221fd1f7-6ab8-4517-b826-51711459a56f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:397,
        title: "Plucked",
        artist: "Destroy Boys",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FPlucked.mp3?alt=media&token=b455a0de-d670-429a-9327-e87ff228bb28",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FPlucked%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ee807fce-763a-49b3-98af-9c1c95c43083",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:398,
        title: "SPINE",
        artist: "WesGhost",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSPINE.mp3?alt=media&token=5c059203-fe4b-4590-89f8-6917bf2a2983",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSPINE%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=b63f7fd6-f0c8-4a71-935a-ed262f5aad94",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:399,
        title: "Secrets",
        artist: "Amira Elfeky",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSecrets.mp3?alt=media&token=004c37b5-a476-422e-b266-0df9f7a3ccbd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSecrets%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6eb4e820-6c13-4160-a63b-81ec01c9f0f1",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:400,
        title: "Showtime",
        artist: "Catfish and the Bottlemen",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FShowtime.mp3?alt=media&token=302e427f-fff4-44a7-aa0d-077b4a8fbdd0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FShowtime%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8776b6bf-a2b4-47de-935d-0605ea34b079",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:401,
        title: "Sick of Being Young",
        artist: "Krooked Kings",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSick%20of%20Being%20Young.mp3?alt=media&token=52b7d536-1091-4a32-91d0-701fda74ae28",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSick%20of%20Being%20Young%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=52d82289-4f68-4aee-a159-019ff443e22f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:402,
        title: "Sinner",
        artist: "The Last Dinner Party",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSinner.mp3?alt=media&token=9c2602e5-c109-43f0-9e33-68934011aff1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSinner%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=87e80740-2730-4a9c-8602-aca2b90744e6",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:403,
        title: "So Much (For) Stardust - Edit",
        artist: "Fall Out Boy",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSo%20Much%20(For)%20Stardust%20-%20Edit.mp3?alt=media&token=7cd4ff12-681d-4b93-9e8f-0095f6a2a1a2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSo%20Much%20(For)%20Stardust%20-%20Edit%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1cd5cf13-716b-4fda-b734-4b4c287b020c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:404,
        title: "Starburster",
        artist: "Fontaines D.C.",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FStarburster.mp3?alt=media&token=2b2039a0-b056-4736-83c0-3d2c53328ecd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FStarburster%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ec890091-bee6-41fa-9c74-69e84c962457",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:405,
        title: "Stickers of Brian",
        artist: "Hot Mulligan",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FStickers%20of%20Brian.mp3?alt=media&token=9679c325-7a19-43fa-ad51-0fe92c53bf75",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FStickers%20of%20Brian%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c8dfcabb-fbc9-4d21-b295-ddfe80079e1c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:406,
        title: "Stray",
        artist: "The Mysterines",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FStray.mp3?alt=media&token=d87e82dc-09ae-4dc3-a591-9c505a7be4eb",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FStray%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d1fe8968-f38a-460b-926a-243e354c38c7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:407,
        title: "Superstar",
        artist: "Rainbow Kitten Surprise",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FSuperstar.mp3?alt=media&token=4b79183a-ed4d-4493-a3d1-56a16ab7e6b6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FSuperstar%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1244efa6-341e-4459-92a8-80ed6efd0886",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:408,
        title: "THE DRAIN",
        artist: "Bad Omens",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FTHE%20DRAIN.mp3?alt=media&token=fdc5a948-f62f-4224-bfbb-de3a86d7bb6d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FTHE%20DRAIN%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=813c10b1-5bbd-466a-ad01-69705d516ddb",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:409,
        title: "Thick Skull",
        artist: "Paramore",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FThick%20Skull.mp3?alt=media&token=a9f9d5e7-2b6d-40aa-9fbc-3c1cfdc3ff94",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FThick%20Skull%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bc1d0c15-ec78-4c21-af50-0543ec205320",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:410,
        title: "This Is Nowhere",
        artist: "The Black Keys",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FThis%20Is%20Nowhere.mp3?alt=media&token=3e1fef03-a317-41cc-9000-c772f0301103",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FThis%20Is%20Nowhere%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=02a87eb3-027b-445a-b8f0-56315485a053",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:411,
        title: "Vampire Disco",
        artist: "Friday Pilots Club",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FVampire%20Disco.mp3?alt=media&token=9936321b-4456-4670-ade8-b2b65a94193c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FVampire%20Disco%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c51a287-5869-487a-bc41-1e196a747862",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:412,
        title: "WHAT THE HELL",
        artist: "jxdn",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FWHAT%20THE%20HELL.mp3?alt=media&token=99de4a2f-b159-4606-93a0-923eb2715546",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FWHAT%20THE%20HELL%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0e2fdbaa-3a30-4054-a68c-e2c7ad78fc9d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:413,
        title: "Walk Through Fire",
        artist: "Yannis & The Yaw",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FWalk%20Through%20Fire.mp3?alt=media&token=620cfd14-f175-41cc-87d2-42cc1b6f581d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FWalk%20Through%20Fire%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d4bead74-2ba2-47ba-bbbf-b433ff8a463c",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:414,
        title: "What're We Doing Here",
        artist: "ALEXSUCKS",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FWhat're%20We%20Doing%20Here.mp3?alt=media&token=ad850480-2c38-4ba6-82c4-371633d870e7",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FWhat're%20We%20Doing%20Here%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f6a1e515-93d6-4648-bf61-087375d44a28",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:415,
        title: "When We Die (Can We Still Get High?)",
        artist: "YUNGBLUD",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FWhen%20We%20Die%20(Can%20We%20Still%20Get%20High_)%20(feat.%20Lil%20Yachty).mp3?alt=media&token=cdf94fd1-4353-4946-9a35-7d0830860a0c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FWhen%20We%20Die%20(Can%20We%20Still%20Get%20High_)%20(feat.%20Lil%20Yachty)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5fcc020b-f7e5-4c90-965b-413b6f240952",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:416,
        title: "Your Apartment",
        artist: "Wallows",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2FYour%20Apartment.mp3?alt=media&token=1e13e0d3-4fc7-41a5-9517-7e50574b2914",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2FYour%20Apartment%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2c886f70-4be2-44b5-8a1e-a2ac4bcfb42e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:417,
        title: "hostage",
        artist: "Maggie Lindemann",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2Fhostage.mp3?alt=media&token=8ada87b1-ed36-4e5f-9c8c-ab47edc8877a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2Fhostage%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8af55e9d-b427-408c-8853-e36497410811",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:418,
        title: "obsessed",
        artist: "Olivia Rodrigo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2Fobsessed.mp3?alt=media&token=ccdeda5f-2f58-48e0-af03-cce4ef2211b0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2Fobsessed%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=70add947-24ee-4683-b87c-f3b5fbeeb2bc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:419,
        title: "synthesizer",
        artist: "DE'WAYNE ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2Fsynthesizer.mp3?alt=media&token=8945f5a5-7d24-44b2-88d0-7faba2d0307b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2Fsynthesizer%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e6887e3c-2472-4cee-a0c6-632ba7006573",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:420,
        title: "that b*tch don't even kno my name...",
        artist: "ThxSoMch",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Frock%2Fthat%20b_tch%20don't%20even%20kno%20my%20name....mp3?alt=media&token=5569cf0d-d1bf-4975-879c-85d9842f7357",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Frock%2Fthat%20b_tch%20don't%20even%20kno%20my%20name...%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=626b5350-e013-4f42-adf2-85e7b4a9bc65",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:421,
        title: "After All",
        artist: "Noha Saré",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FAfter%20All.mp3?alt=media&token=54a87f0b-a24e-4407-905c-f35f1d70410b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FAfter%20All%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=507e9965-a073-44ed-941f-d182ce1b6105",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:422,
        title: "All My Love",
        artist: "KIRBY",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FAll%20My%20Love.mp3?alt=media&token=b0aa4d63-3335-4a99-b30a-3fcc04f1a685",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FAll%20My%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=86bd0005-e77b-4fab-8552-09d7cc62f618",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:423,
        title: "Back to Me",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FBack%20to%20Me%20(Acoustic).mp3?alt=media&token=60d5935e-5213-4bd3-9dac-300bef40bcfc",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FBack%20to%20Me%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=52b7d1c6-217e-495d-b287-a32311cc5b07",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:424,
        title: "Biting These Bullets",
        artist: "NAVENI",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FBiting%20These%20Bullets.mp3?alt=media&token=c1afab0c-a46b-4884-ab94-198e0afbf6b9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FBiting%20These%20Bullets%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a637aa86-ab1b-4255-95a3-201140285efd",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:425,
        title: "Can't Have It All",
        artist: "Cobi",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCan't%20Have%20It%20All%20(Acoustic).mp3?alt=media&token=ec1c1d10-f4cb-4757-8cfc-b89022dfb244",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCan't%20Have%20It%20All%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=152d41fc-7cb2-4039-9e80-7a954d1e1d39",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:426,
        title: "Coffee in the Morning",
        artist: "Aaron Taylor ",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCoffee%20in%20the%20Morning.mp3?alt=media&token=531e64d1-37ce-45fc-b04b-207a10cb0be3",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCoffee%20in%20the%20Morning%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ac143e20-bbaf-4cca-9284-98ccbe82c9fd",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:427,
        title: "Coolin",
        artist: "Jacob Banks",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCoolin.mp3?alt=media&token=6575bc28-b260-4c55-95f2-bcedd5224761",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCoolin%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=664e7e6e-da65-49cc-a05c-4155b2624279",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:428,
        title: "Cure",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FCure%20(Acoustic).mp3?alt=media&token=425d3063-c97a-46a7-92eb-dc1b1092e159",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FCure%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c6558366-4b67-4bb5-9b34-1f1c3ec87d2b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:429,
        title: "Deliverer",
        artist: "Antoine Bradford",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FDeliverer.mp3?alt=media&token=5d5af01c-7e41-4cd3-a2c3-c1bfb8fe53ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FDeliverer%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=4bf64896-8bd5-4ea6-af18-85b010a5c6dc",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:430,
        title: "Don't Lay It All On Me",
        artist: "Janice",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FDon't%20Lay%20It%20All%20On%20Me.mp3?alt=media&token=1d2b65c0-6775-4fcb-b3c2-7476500d752c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FDon't%20Lay%20It%20All%20On%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c5064afa-cd36-4580-a9a1-7dc7a557d79d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:431,
        title: "GTC(live from my stoop)",
        artist: "Kubla",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGTC%20(live%20from%20my%20stoop).mp3?alt=media&token=b681e9cc-92b8-47e0-8b5c-d468efb6f53d",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGTC%20(live%20from%20my%20stoop)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6af3b50f-1af9-4527-81e1-83a9fac70a55",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:432,
        title: "Good Man Down",
        artist: "Common Hymnal",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGood%20Man%20Down.mp3?alt=media&token=622b58bc-a362-417e-b841-3381139daf21",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGood%20Man%20Down%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ed43d565-559a-45e8-83f8-70d531eabdc8",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:433,
        title: "Good Things Fall Apart",
        artist: "Rhonda",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FGood%20Things%20Fall%20Apart.mp3?alt=media&token=4a54c159-6b4a-47f6-b075-d57620d66bad",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FGood%20Things%20Fall%20Apart%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c3c4c6bc-4364-44c8-8243-c13b2ac40011",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:434,
        title: "Hiding",
        artist: "JELISA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHiding.mp3?alt=media&token=f614d554-c49c-44f1-a9cb-a2908d792a5e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHiding%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=08b58ea2-d922-44a2-9896-ba029c541dda",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:435,
        title: "Hills",
        artist: "Naomi Sharon",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHills.mp3?alt=media&token=87610679-5627-4b31-afd3-9d83ffc209c8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHills%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6f1dc846-3d87-464a-bb0b-1656bc45db59",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:436,
        title: "Horsepower For The Streets",
        artist: "Jonathan Jeremiah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHorsepower%20For%20The%20Streets%20-%20Acoustic%20String%20Version.mp3?alt=media&token=be7fdafd-6e4e-4873-ab9d-4bca55da3cb2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHorsepower%20For%20The%20Streets%20-%20Acoustic%20String%20Version%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ac79a90e-4e2f-43b4-a9dd-4cf8c15b7111",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:437,
        title: "Human being",
        artist: "Cézanne",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FHuman%20being.mp3?alt=media&token=ca2afc8a-2382-45c3-a8b0-c5f22eeb7f39",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FHuman%20being%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0c3814a6-8f9c-4af9-b350-0cfa57212483",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:438,
        title: "I'm Different",
        artist: "Debbie",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FI'm%20Different%20-%20Live%20Acoustic.mp3?alt=media&token=c1e4cb2c-e50b-4f7c-bfa5-a707ba03db61",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FI'm%20Different%20-%20Live%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=8e2449af-969f-4eae-a07e-0e6bec87ce1d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:439,
        title: "Is It Any Wonder? ",
        artist: "Durand Jones & The Indications",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FIs%20It%20Any%20Wonder_%20-%20Live%20at%20Paste.mp3?alt=media&token=6b35e0c7-7bad-4863-9ea5-df9985708a80",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FIs%20It%20Any%20Wonder_%20-%20Live%20at%20Paste%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=28cc82b7-8e60-4e5f-87c2-d14682b8d653",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:440,
        title: "Is This Love",
        artist: "Allen Stone",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FIs%20This%20Love.mp3?alt=media&token=562cb2cf-1899-4b8b-b44e-7be8892457b2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FIs%20This%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=47da2eae-18e7-4ec1-ace2-7247dfc8e19f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:441,
        title: "I’m Leaving",
        artist: "The Teskey Brothers",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FI%E2%80%99m%20Leaving%20-%20The%20Circle%20Session%2C%202023.mp3?alt=media&token=bae8458c-99fe-473f-8da3-25385bd1c1c4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FI%E2%80%99m%20Leaving%20-%20The%20Circle%20Session%2C%202023%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=e7e01493-52bf-4cd2-8a37-e55c6f3bb70e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:442,
        title: "Kaleidoscope",
        artist: "Otis Kane",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FKaleidoscope.mp3?alt=media&token=14428c92-3e0e-4514-99b4-6079521a33f6",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FKaleidoscope%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=23e105b8-5a54-436f-8e05-582619af3a7f",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:443,
        title: "Let me try",
        artist: "Jamily",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLet%20me%20try.mp3?alt=media&token=1a6ba008-b3dd-44bf-98e5-2a1c6f0d18a2",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLet%20me%20try%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=83ed46e7-349a-4532-87a1-34e3c8e72e70",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:444,
        title: "Lonely Love Song",
        artist: "St. Paul & The Broken Bones",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLonely%20Love%20Song.mp3?alt=media&token=cc5a4841-0cc5-4ee6-87d6-f26a961f0a56",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLonely%20Love%20Song%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=d4b870a8-365c-48eb-aa41-bfcdb65fd72b",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:445,
        title: "Lose Control",
        artist: "Teddy Swims",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLose%20Control%20-%20Piano%20Version.mp3?alt=media&token=929af29f-97cc-4dfa-964b-7bcf399d0c94",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLose%20Control%20-%20Piano%20Version%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=00cdd1d5-5333-49d2-8916-182914d58f39",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:446,
        title: "Love Is A Losing Game",
        artist: "TEEKS",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLove%20Is%20A%20Losing%20Game%20-%20Live%20at%20Stebbing%20Studio.mp3?alt=media&token=884a4401-d082-4995-8516-541bcb1ddabd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLove%20Is%20A%20Losing%20Game%20-%20Live%20at%20Stebbing%20Studio%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ff56a67c-e002-48ef-8de1-62acdfa9b8c0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:447,
        title: "Lover, You Should’ve Come Over",
        artist: "Elmiene",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FLover%2C%20You%20Should%E2%80%99ve%20Come%20Over.mp3?alt=media&token=a49f363c-ec5a-4830-a44f-903f4fbdc5da",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FLover%2C%20You%20Should%E2%80%99ve%20Come%20Over%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5a15c400-8bc2-4ea5-8591-35f5f3b806b8",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:448,
        title: "Mad About You",
        artist: "Son Little",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FMad%20About%20You.mp3?alt=media&token=8a1e6e5a-6bd6-4e52-a8be-4f14b2abec88",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FMad%20About%20You%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=135ff870-cc37-435a-936b-2fe294dd9f71",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:449,
        title: "Magic",
        artist: "Sabrina Starke",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FMagic.mp3?alt=media&token=b5c6f0c3-3abb-4acc-a4a6-3159c9872d1b",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FMagic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=f8af0990-5dc2-4e55-bbb0-83cad4462137",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:450,
        title: "No Clouds No Love",
        artist: "whothefislou",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FNo%20Clouds%20No%20Love.mp3?alt=media&token=94073095-f21f-4b1b-9cd6-a53e0951a13e",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FNo%20Clouds%20No%20Love%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=77c7a887-3ce8-418f-9baf-e0b9e29d48ec",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:451,
        title: "Not Serious",
        artist: "Mychelle",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FNot%20Serious%20-%20Acoustic.mp3?alt=media&token=f2482ad0-d810-45f3-840d-e5eb2738a8f9",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FNot%20Serious%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=6bd988e0-2c55-4965-91f0-7ee2b15c9769",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:452,
        title: "Rent Free",
        artist: "6LACK",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FRent%20Free%20-%20Acoustic.mp3?alt=media&token=1c69eb19-ef57-4383-8fbc-55d12835779f",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FRent%20Free%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2da65474-2ce1-441d-8241-85d7db21bba5",
        liked: "cards-heart-outline",
        color: "white",
        

    },
    {
        id:453,
        title: "SOMEWHERE FAR",
        artist: "Jordan Astra",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSOMEWHERE%20FAR.mp3?alt=media&token=c5c5a5e7-fa3f-450a-866b-250a9f6be86c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSOMEWHERE%20FAR%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=64043218-85a7-4a92-8c1b-c36503e6336e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:454,
        title: "STILL HAVE YOU",
        artist: "Jake Isaac",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSTILL%20HAVE%20YOU.mp3?alt=media&token=743f545a-fdeb-4935-9824-fc532b620dea",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSTILL%20HAVE%20YOU%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=cb4a280e-e7c3-4544-972e-53ab42ee236a",
        liked: "cards-heart-outline",
        color: "white",
         
    },
    {
        id:455,
        title: "Say Something",
        artist: "Sinéad Harnett",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSay%20Something.mp3?alt=media&token=c5a832c6-694f-4d38-9673-2d7fa242e1a8",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSay%20Something%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5d85d635-f826-4d7c-8f65-6896bf378e95",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:456,
        title: "Self Sabotage",
        artist: "Mychelle",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSelf%20Sabotage%20-%20Acoustic.mp3?alt=media&token=58c2efa8-e9e6-4752-81db-835e79746fd0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSelf%20Sabotage%20-%20Acoustic%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=0a82bff5-2062-4974-95a9-4eb5e7de0e8e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:457,
        title: "Someday-Unplugged",
        artist: "Elmiene",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSomeday%20-%20Unplugged.mp3?alt=media&token=08a5ea08-e8f9-4dfc-a300-b2ce51f78880",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSomeday%20-%20Unplugged%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=ae6d6c10-256b-4eaa-85d7-8ea4b7d1596e",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:458,
        title: "Southern Comfort",
        artist: "Bluey Robinson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FSouthern%20Comfort.mp3?alt=media&token=b69331d9-7ece-4b74-bc52-d3f15fb00ccd",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FSouthern%20Comfort%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=a323a0df-710a-4a19-9ee1-4a14ba02caa7",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:459,
        title: "The Truth",
        artist: "Moonchild",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThe%20Truth%20(Acoustic).mp3?alt=media&token=1b7d6d57-0fd7-458b-a7d9-58d858cd6bb4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThe%20Truth%20(Acoustic)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=35ace186-736e-4c2c-ac1a-db15553fa251",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:460,
        title: "Things Meant For Me",
        artist: "Eric Roberson",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThings%20Meant%20For%20Me.mp3?alt=media&token=12943889-defd-4c57-b4d6-dd2e45c262d4",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThings%20Meant%20For%20Me%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=c9183299-ee08-475c-b6ba-e1a74c801be6",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:461,
        title: "This Life",
        artist: "Kendra Morris",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThis%20Life%20-%20Live.mp3?alt=media&token=0b0f0bdf-cd87-44f6-8b8a-b894e5bb05ac",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThis%20Life%20-%20Live%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2d102272-b0c5-4936-a02d-4bfc46a52807",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:462,
        title: "Through The Night",
        artist: "Maeta",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FThrough%20The%20Night%20(feat.%20Free%20Nationals).mp3?alt=media&token=b8447168-1bb0-4493-9a39-be8623824443",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FThrough%20The%20Night%20(feat.%20Free%20Nationals)%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=5b303fe6-1326-47ea-8c87-3d77c17a7b29",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:463,
        title: "To be naive",
        artist: "Adja",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FTo%20be%20naive.mp3?alt=media&token=21f9ef94-9796-483f-b4f9-ce94fc228e47",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FTo%20be%20naive%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=2b4ddd35-317d-40c8-9c84-763df63dba86",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:464,
        title: "Unaware",
        artist: "Allen Stone",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FUnaware.mp3?alt=media&token=4a84a408-a40f-40b3-839b-85d77e5cad5c",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FUnaware%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=bd69b9ce-b632-41e5-b13e-44fa44dc6979",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:465,
        title: "Video Game",
        artist: "Budjerah",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FVideo%20Game.mp3?alt=media&token=ea4306dd-3c84-407f-922c-44503d891074",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FVideo%20Game%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=9812cac6-4d38-4277-b991-1c05e1f7ac5a",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:466,
        title: "Wake Up",
        artist: "Majo",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWake%20Up.mp3?alt=media&token=aa9b689b-b1a1-4b7c-baac-fe12085e8b5a",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWake%20Up%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=efdd82b2-4f34-4be7-9674-860c5aeadb64",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:467,
        title: "Where Do We Go",
        artist: "Andra Day",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWhere%20Do%20We%20Go.mp3?alt=media&token=4bd6ead9-7145-4b76-9fb5-c914778fc969",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWhere%20Do%20We%20Go%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1a6865de-49a3-43f1-a72b-cc3f64eebc9d",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:468,
        title: "Whoever You Are",
        artist: "ELIZA",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2FWhoever%20You%20Are%20-%20Live%20at%20RAK.mp3?alt=media&token=1e338f7b-726f-4db6-a740-5afcc35184a1",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2FWhoever%20You%20Are%20-%20Live%20at%20RAK%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=1a0986f1-bdc3-4e38-996f-ccbe626c0ce0",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:469,
        title: "burn out",
        artist: "SOLOMON",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2Fburn%20out.mp3?alt=media&token=6a4c7d4f-1c8b-4f24-91e4-ef88e6437bc0",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2Fburn%20out%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=3c9b8c52-4a5a-4ca5-a816-f875cb80a8d4",
        liked: "cards-heart-outline",
        color: "white",
        
    },
    {
        id:470,
        title: "i would if i could",
        artist: "Santino Le Saint",
        url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/songs%2Fsoul%2Fi%20would%20if%20i%20could.mp3?alt=media&token=b5891182-09e3-45a5-bbac-df08c5456336",
        artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/images%2Fsoul%2Fi%20would%20if%20i%20could%20downloaded%20from%20SpotiSongDownloader.com_.jpg?alt=media&token=84018930-72e7-4228-aeea-b5d91cb78a9d",
        liked: "cards-heart-outline",
        color: "white",
        
    }

]

export default alldata;