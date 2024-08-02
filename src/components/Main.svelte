<script>
    import PlaystoreImg from "../assets/img/icons8-playstore-48.png";
    import PlaystoreJoin from "../assets/img/Android_Vector.svg";
    import AppstoreJoin from "../assets/img/iOS_Vector.svg";
    import AppstoreImg from "../assets/img/icons8-app-store-48.png";
    import ChubLogo from "../assets/img/wLogo_white.png";
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
    import Slider from "./Slider.svelte";
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
        <div class="flex justify-between px-10 mx-[140px] rounded-2xl items-end bg-[#c9ffb7]">
            <div class="mb-[40px]">
                <p class="text-black font-[900] text-[30px]">Earn points, gems and badges.</p>
                <span class="text-black font-[300] text-[18px]">Get rewarded for your hard work, stand out.</span>
            </div>
            <div>
                <img src={TrophyImg} alt="Trophy" class="w-[400px]">
            </div>
        </div>
          
    </div>
    
    <!-- SECTION THREE: Sliders -->
    <section id="features" class="max-md:mt-[50px] mt-[50px] w-full grid justify-center">
        <center class="mx-10 max-md:mx-2">
            <h4>Why Challenge Hub</h4>
            <h4 class="max-md:text-[30px] mt-0 max-md:mx-5 max-md:leading-[1.2] md:w-[80vw] text-[60px] leading-[60px] text-center">We heard <span class="text-[#fa1bf1] glancyr">you</span></h4>
            
            <p class="text-center mt-1 font-[100] w-[600px]">Goals can feel overwhelming! Let's make it fun together. Playful challenges, a supportive community, and real results await. We’ve got you!</p>
            
            
            
            <div id=allSlides class="mt-[50px]">
                <Slider/>
            </div>
                
        </center>
    </section>
    
    <!-- SECTION FOUR: -->
    
    <!-- SECTION FIVE -->

    <!-- SECTION SIX -->
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