<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import PlaystoreImg from "../assets/img/icons8-playstore-48.png";
    import PlaystoreJoin from "../assets/img/Android_Vector.svg";
    import AppstoreJoin from "../assets/img/iOS_Vector.svg";
    import AppstoreImg from "../assets/img/icons8-app-store-48.png";
    import ConnectDot from "../assets/img/connect-svg.png";
    import ChubLogo from "../assets/img/wLogo_white.png";
    import EmoticonImg from "../assets/img/emotion-smile.svg";
    import LockImg from "../assets/img/lock-2.svg";
    import ClockImg from "../assets/img/clock.svg";
    import CylinderImg from "../assets/img/7e12243d3becd9ddddaac792c62746cd.png";
    import EllipsesImg from "../assets/img/Mask_group.svg";
    import BluePillImg from "../assets/img/Pill-Blue-Glossy-2.png";
    import SalyImg from "../assets/img/Saly-35.png";
    import RoundCube from "../assets/img/RoundCube-White-Glossy.png";
    import DarkPhone1 from "../assets/img/main.png";
    import DarkPhone2 from "../assets/img/main-2.png";
    import iPhoneStock1 from "../assets/img/Challenges1.png";
    import iPhoneStock2 from "../assets/img/Challenges2.png";
    import SToroid from "../assets/img/SuperToroid-White-Glossy.png";
    import ChubPlayground from "../assets/img/79869.png";
    import CombinedFaces from "../assets/img/pexels-cottonbro-48816191.png";
    import SpaceWorld from "../assets/img/Rectangle-5.png";
    import Frames34954 from "../assets/img/Frame4273209401.png";
    import MockUp1 from "../assets/img/MockUp1.png";
    import DiscussionImg from "../assets/img/Feedback-2.png";
    import RocketImg from "../assets/img/Rectangle-6.png";
    import TrophyImg from "../assets/img/Design-3.png";
    function LearnMore(){
        location.href="#downloadApp";
    }
    
    function GoToReviews(){
        location.href="/reviews";
    }
</script>

<main class="grid justify-center p-4 lg:my-[200px] w-full">
    
    <!-- SECTION ONE: First View -->
    <section id="title" class="max-md:mx-[20px] mx-[40px] p-7 grid grid-cols-1 bg-transparent">
        
        <div class="justify-center mb-4 flex max-md:w-[full] lg:hidden">
            <img src="{ChubLogo}" alt="" class="w-[150px]">
        </div>
        <h1 class="max-md:text-[30px] max-md:leading-[1.2] text-[70px] font-[900] leading-[100px] text-center"><span class="text-[#fa9b64]">Fun</span>, Community, <span class="text-[#9cffcf] glancyr">Growth</span></h1>
        
        <p class="text-center mt-1 lg:mt-1 font-[100]">Be the First to Experience the Chub App! Beta Test <br>Challenges & Shape the App (<span class="text-[#acacac]">Plus Early Access & Rewards</span>)!</p>
        
        <div class="max-md:grid max-md:mt-8 flex justify-center max-md:gap-4 gap-10 mt-[40px]">
            <a href="/beta-tester">
                <button class="join-button1 max-md:h-[50px] max-md:w-[250px] h-[60px] w-[280px] flex gap-2 leading-[2] justify-center items-center font-[300]">
                    <img class="max-md:size-[15px] size-[25px] bg-transparent" src={PlaystoreJoin} alt="playstore-logo">Android early access
                </button>
            </a>
            
            <a href="/beta-tester">
                <button class="join-button2 max-md:h-[50px] max-md:w-[250px] h-[60px] w-[280px] flex gap-2 leading-[2] justify-center items-center font-[300]">
                    <img class="max-md:size-[15px] size-[25px] bg-transparent text-[#690571]" src={AppstoreJoin} alt="playstore-logo">iOS early access
                </button>
            </a>
        </div>
        
        
    </section>
    <div class="max-md:mt-[20px] max-md:mb-[20px]">
        <img src={ChubPlayground} alt="chub-playground" class="chub-playground w-full max-md:w-full">
    </div>
    
    
    <!-- SECTION TWO: Multiple Containers--> 
    <div class="grid gap-2 max-md:hidden my-[100px]">
        <div class="p-6 mx-[120px] justify-center flex gap-5 h-[100%]">
            <div id="container1" class="flex flex-col gap-1 mx-auto w-[50%] h-full">
                <img src={CombinedFaces} alt="People" class="w-auto rounded-lg h-auto object-cover">
                <div class="flex flex-col justify-normal h-full w-full">
                    <p class="relative top-[100px] w-[300px] left-[40px] mt-[-50px]">
                        Seamlessly navigate the CHUB community and interact with people from all over the world and diverse ages
                    </p>
                    <img src={SpaceWorld} alt="Space" class="w-full rounded-lg h-[100%] object-cover">
                </div>
            </div>
            <div id="container2" class="flex flex-col gap-4 mx-auto w-[50%] h-full">
                <div class="flex justify-center w-full bg-[#b7c1ff] rounded-lg items-end h-full">
                    <img src={Frames34954} alt="People" class="w-100px rounded-lg h-[90%] w-[60%]">
                </div>
                <div class="flex justify-center w-full gap-4 h-full">
                    <div class="bg-[#edd9ff] flex flex-col justify-end items-end rounded-lg h-full w-[100%]">
                        <img src={MockUp1} alt="People" class="rounded-lg h-[80%]">
                    </div>
                    <div class="flex flex-col gap-4 h-full w-full">
                        <div class="bg-[#fef8b7] h-full w-full rounded-lg flex flex-col">
                            <p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Social <br> Interaction</p>
                            <div class="w-full flex-grow flex items-end justify-end">
                                <img src={DiscussionImg} alt="Chat Icon" class="rounded-lg h-auto w-[200px]">
                            </div>
                        </div>
                        <img src={RocketImg} alt="Rocket" class="rounded-lg h-auto">
                    </div>
                </div>
            </div>
        </div>        
        <div class="flex justify-between px-10 mx-[140px] rounded-lg items-end bg-[#c9ffb7]">
            <div class="mb-[40px]">
                <p class="text-black font-[900] text-[30px]">Earn points, gems and badges.</p>
                <span class="text-black font-[300] text-[18px]">Get rewarded for your hard work, stand out.</span>
            </div>
            <div>
                <img src={TrophyImg} alt="Trophy" class="w-[400px]">
            </div>
        </div>
          
    </div>
    <!-- SECTION TWO -->
    <section id="about" class="max-md:hidden mt-[200px] h-[800px] overflow-x-scroll w-full flex gap-3 bg-[#1E0221]">
        <div class="carousel flex flex-row gap-3">
            <!-- Slide 1 -->
            <div class="grid grid-flow-row gap-3 bg-transparent w-[300px]">
                <div class="divided-grid rounded-md flex flex-cols-2 flex-rows-2 items-end justify-end bg-[#F07DBC]">
                    <h1 class="text-[30px]">Collaborate</h1>
                </div>
                <div class="divided-grid rounded-md flex flex-cols-2 flex-rows-2 items-end justify-end bg-[#F1BB30]">
                    <h1 class="text-[30px]">Conquer</h1>
                </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="flex flex-col gap-3 bg-blend-overlay w-[600px] bg-[#3d0443] rounded-[40px]">
                <div class="mt-[40%] flex flex-col items-center mx-10 text-center">
                    <div class="rounded-full p-3 w-fit bg-blue-500">Simplify</div>
                    <h1 class="text-[30px] mt-4 mx-[50px] leading-[1]">Embrace your Achievements</h1>
                    <p class="text-center mt-1 font-[100] mx-[80px]">Earn your badges and showcase your journey, inspiring others to push their limits and be successful.</p>
                    <a href="#about" class="flex gap-2 mt-4">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" class="block">
                        <path d="M14.9243 5.42426C15.1586 5.18995 15.1586 4.81005 14.9243 4.57574L11.1059 0.757359C10.8716 0.523045 10.4917 0.523045 10.2574 0.757359C10.023 0.991674 10.023 1.37157 10.2574 1.60589L13.6515 5L10.2574 8.39411C10.023 8.62843 10.023 9.00833 10.2574 9.24264C10.4917 9.47696 10.8716 9.47696 11.1059 9.24264L14.9243 5.42426ZM0.5 5.6H14.5V4.4H0.5V5.6Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                <div class="mt-[30px] flex justify-center">
                    <img src={ConnectDot} alt="">
                </div>
            </div>
            
            <!-- Slide 3 -->
            <div class="flex flex-col gap-3 bg-blend-overlay w-[600px] bg-[#3c0213] rounded-[40px]">
                <div class="mt-[40%] flex flex-col items-center mx-10 text-center">
                    <div class="opacity-0 rounded-full p-3 w-fit bg-blue-500">Simplify</div>
                    <h1 class="text-[30px] mt-4 mx-[50px] leading-[1]">Embrace your Achievements</h1>
                    <p class="text-center mt-1 font-[100] mx-[80px]">Earn your badges and showcase your journey, inspiring others to push their limits and be successful.</p>
                    
                    <button on:click={LearnMore} class="buttons header-button my-[14px] mr-[16px] self-center duration-200"> Get Started</button>
                </div>
            </div>
            
            <!-- Slide 4 -->
            <div class="flex flex-col gap-3 bg-blend-overlay w-[600px] bg-[#3d0443] rounded-[40px]">
                <div class="mt-[40%] flex flex-col items-center mx-10 text-center">
                    <div class="rounded-full p-3 w-fit bg-blue-500">Simplify</div>
                    <h1 class="text-[30px] mt-4 mx-[50px] leading-[1]">Embrace your Achievements</h1>
                    <p class="text-center mt-1 font-[100] mx-[80px]">Earn your badges and showcase your journey, inspiring others to push their limits and be successful.</p>
                    <a href="#about" class="flex gap-2 mt-4">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" class="block">
                        <path d="M14.9243 5.42426C15.1586 5.18995 15.1586 4.81005 14.9243 4.57574L11.1059 0.757359C10.8716 0.523045 10.4917 0.523045 10.2574 0.757359C10.023 0.991674 10.023 1.37157 10.2574 1.60589L13.6515 5L10.2574 8.39411C10.023 8.62843 10.023 9.00833 10.2574 9.24264C10.4917 9.47696 10.8716 9.47696 11.1059 9.24264L14.9243 5.42426ZM0.5 5.6H14.5V4.4H0.5V5.6Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                <div class="mt-[30px] flex justify-center">
                    <img src={ConnectDot} alt="">
                </div>
            </div>
            
            <!-- Slide 5 -->
            <!-- <div class="flex flex-col gap-3 bg-blend-overlay w-[600px] bg-[#FD8C48] rounded-[40px]">
                <div class="mt-[40%] flex flex-col items-center mx-10 text-center">
                    <div class="opacity-0 rounded-full p-3 w-fit bg-blue-500">Simplify</div>
                    <h1 class="text-[30px] mt-4 mx-[50px] leading-[1]">Embrace your Achievements</h1>
                    <p class="text-center mt-1 font-[100] mx-[80px]">Earn your badges and showcase your journey, inspiring others to push their limits and be successful.</p>
                    
                    <button on:click={LearnMore} class="buttons header-button my-[14px] mr-[16px] self-center duration-200"> Get Started</button>
                </div>
            </div> -->
        </div>
    </section>
    
    <!-- SECTION THREE -->
    <section id="features" class="max-md:mt-[50px] mt-[160px] w-full grid justify-center">
        <center class="mx-10 max-md:mx-2">
            <h1 class="max-md:text-[30px] max-md:mx-5 max-md:leading-[1.2] md:w-[80vw] text-[88px] leading-[100px] text-center">Reason Why You Should Use <span class="text-[#FA6400] glancyr">CHUB</span></h1>
            
            <p class="text-center mt-1 font-[100]">CHUB has several features that makes the go to for challenges</p>
            
            <div class="flex justify-center gap-3 my-10 max-md:mx-0 lg:gap-7">
                <div class="mini-features bg-[#33023a] lg:w-[260px]">
                    <img class="bg-[#3C0345]" src={EmoticonImg} alt="">
                    <h3 class="mt-2">Easy to use</h3>
                    <p>Easy to use for everyone and simple</p>
                </div>
                
                <div class="mini-features bg-[#690571] lg:w-[260px]">
                    <img class="bg-[#81108A]" src={ClockImg} alt="">
                    <h3 class="mt-2">Real time</h3>
                    <p>Connect with customer real time</p>
                </div>
                
                <div class="mini-features bg-[#33023a] lg:w-[260px]">
                    <img class="bg-[#3C0345]" src={LockImg} alt="">
                    <h3 class="mt-2">Safety & Privacy</h3>
                    <p>Easy to use for everyone and simple</p>
                </div>
            </div>
        </center>
    </section>
    
    <!-- SECTION FOUR -->
    <section id="feedbacks" class="grid justify-center max-sm:mt-[50px] mt-[160px] w-full"> 
        <!-- SHAPES -->
        <div class="flex justify-between w-full h-0" id="shapes">
            <img src={CylinderImg} alt="" class="w-[250px] max-md:w-[130px] h-[400px] max-md:h-[150px] mix-blend-difference float-left rotate-[-70deg] relative top-[-280px] max-md:top-[-100px] left-[-10px] max-md:left-[-50px]">
            
            <img src={EllipsesImg} alt="" class="size-[120px] max-md:size-[70px] bg-[#FD8C48] rounded-full mix-blend-difference rotate-[1.05deg] relative top-[-80px] max-md:top-[-30px]">
            
            <img src={BluePillImg} alt="" class="w-[200px] max-md:w-[100px] h-[250px] max-md:h-[120px] mix-blend-difference rotate-[1.05deg] relative top-[-140px] max-md:top-[-45px] lg:right-20">
        </div>
        
        <!-- FEEDBACK -->
        <div class="flex max-lg:flex-col-reverse items-center pt-[50px] w-[90vw] justify-around px-10 max-md:px-5 bg-[#1e0a54] p-4 bg-blend-color-dodge text-white rounded-[60px] max-md:gap-10">
            <div class="w-[100%] max-md:text-center items-center">
                <h1 class="max-lg:text-[25px] mb-5 lg:mt-10 max-md:mx-5 max-md:leading-[1.2] md:w-[650px] text-[88px] leading-[1] text-white">What <span class="text-[#FA6400] glancyr">People</span> say about Challenge Hub</h1>
                <p class="max-md:text-[15px] max-md:mx-5 max-md:leading-[1.2] md:w-[460px] text-white text-[20px] font-[100]">"One of the things i loved most about ths website was the ability to easily search for and find books that interested and helped me to quickly find books in specific genres or by specific authors" - Anonymous</p>
                <div class="text-center max-md:flex max-md:justify-center">
                    <button on:click={GoToReviews} class="buttons header-button my-[50px] mr-[16px] self-center duration-200"> Reviews</button>
                </div>
            </div>
            
            <div class="w-[100%] flex justify-center">
                <div class="w-[400px] h-[600px] z-10 max-md:h-[210px] max-md:w-[150px] relative left-[0px] max-md:top-[20px] rounded-[270px] rotate-[1.647deg] bg-[#00CC99]">
                    <img src={SalyImg} alt="" class="w-full h-full relative right-8 object-cover rotate-[1.647deg]">
                </div>
            </div>
        </div>
    </section>
    
    <!-- SECTION FIVE -->
    <section id="preview" class="max-md:my-[50px] h-[400px] mt-[250px] relative w-full grid justify-center bg-[#1E0221] max-[900px]:hidden">
        
        <div class="flex w-[75vw] justify-between px-1 py-0 bg-[#3c0210] bg-blend-color-dodge gap-10 text-white rounded-[40px]">
            
            <div class="w-[60%] flex flex-row justify-left items-end relative">
                <img src={RoundCube} alt="" class="absolute w-[15%] h-[25%]">
                <img src={DarkPhone1} alt="" class="absolute w-[50%] h-[120%] ml-[70px] z-[3]">
                <img src={iPhoneStock1} alt="" class="absolute w-[46%] h-[116%] ml-[86px] z-[4]">
                <img src={DarkPhone2} alt="" class="absolute w-[46%] h-[85%] ml-[350px] z-[1]">
                <img src={iPhoneStock2} alt="" class="absolute w-[40%] h-[81%] ml-[380px] z-[2]">
            </div>
            
            <div class="w-[40%]">
                <h1 class="text-[40px] mt-[30%] w-[65%] leading-10 text-white">Create your world with <span class="text-[#F1BB30] glancyr">CHUB</span></h1>
                
                <img src={SToroid} alt="" class="absolute w-[7%] mix-blend-lighten top-[28%] ml-[10%] color-[red] rotate-[10deg] z-[1]">
                
                <div class="flex mt-5 gap-5">
                    <a href="https://play.google.com/store/apps/details?id=com.challenge365.app&hl=en&gl=US">
                        <button class="download-button max-md:h-[50%] max-md:w-[50%] h-[60px] w-[200px] flex gap-2 leading-[1] justify-center items-center font-[300]">
                            <img class="size-[32px] bg-transparent" src={PlaystoreImg} alt="playstore-logo">
                            <span class="text-left">Download on <br>Playstore</span>
                        </button>
                    </a>
                    
                    <a href="https://apps.apple.com/app/chub/id6450390309">
                        <button class="download-button max-md:h-[50%] max-md:w-[50%] h-[60px] w-[200px] flex gap-2 leading-[1] justify-center items-center font-[300]">
                            <img class="size-[32px] bg-transparent" src={AppstoreImg} alt="playstore-logo">
                            <span class="text-left">Download on <br>Appstore</span>
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
</main>