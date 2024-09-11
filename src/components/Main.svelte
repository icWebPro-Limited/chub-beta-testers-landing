<script>
    import PlaystoreImg from "../assets/img/icons8-playstore-48.png";
    import PlaystoreJoin from "../assets/img/Android_Vector.svg";
    import AppstoreJoin from "../assets/img/iOS_Vector.svg";
    import AppstoreImg from "../assets/img/icons8-app-store-48.png";
    import wChubLogo from "../assets/img/wLogo_white.png";
    import ChubLogo from "../assets/img/chub_logo_main.png";
    import ArrowMenu from "../assets/img/menu-arrow.svg";
    import ArrowMenu2 from "../assets/img/arrow-up.svg";
    import RoundCube from "../assets/img/RoundCube-White-Glossy.png";
    import DarkPhone1 from "../assets/img/main.png";
    import DarkPhone2 from "../assets/img/main-2.png";
    import iPhoneStock1 from "../assets/img/Challenges1.png";
    import iPhoneStock2 from "../assets/img/Challenges2.png";
    import SToroid from "../assets/img/SuperToroid-White-Glossy.png";
    import ChubPlayground from "../assets/img/79869.png";
    import bLaptopHold from "../assets/img/bLaptopHold.png"
    import CombinedFaces from "../assets/img/pexels-cottonbro-48816191.png";
    import SpaceWorld from "../assets/img/Rectangle-5.png";
    import Frames34954 from "../assets/img/Frame4273209401.png";
    import Frame1000011791 from "../assets/img/Frame1000011791.png";
    import Frame1000011803 from "../assets/img/Frame1000011803.png";
    import Frame1000011802 from "../assets/img/Frame1000011802.png";
    import Frame1000011801 from "../assets/img/Frame1000011801.png";
    import MockUp1 from "../assets/img/MockUp1.png";
    import DiscussionImg from "../assets/img/Feedback-2.png";
    import RocketImg from "../assets/img/Rectangle-6.png";
    import TrophyImg from "../assets/img/Design-3.png";
    // import ThreadedLines from "../assets/img/Group1000011280.png";
    import Slider from "./Slider.svelte";
    import TextSlide from "./TextSlide.svelte";
    import Header from "./Header.svelte";
    function LearnMore(){
        location.href="#downloadApp";
    }
    
    function GoToReviews(){
        location.href="/reviews";
    }
    
    export let y;
   
   
   function downloadApp(){
    location.href="/beta-tester";
   }
   
   function refreshPage(){
    window.location.reload();
   }
   
   let emailaddress = '';
   let fullname = '';
   
   // Function to validate email format
    function validateEmail(event) {
        const input = event.target;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(input.value)) {
            input.setCustomValidity('Please enter a valid email address.');
        } else {
            input.setCustomValidity(''); // Clear the custom message if valid
        }
        input.reportValidity(); // Show validation messages
    }
    
    let activeSection = null;

    function toggleSection(index) {
        activeSection = activeSection === index ? null : index;
    }
</script>

<main class="grid justify-center pb-4 lg:mt-[0px] w-full">
    
    <!-- SECTION ONE: First View -->
    <section id="title" class="max-md:mx-[0px] p-7 grid grid-cols-1 bg-[#690571]">
        
        <!-- Header here-->
        <div class="flex justify-center">
            <div class="header-new flex justify-between mt-40 bg-[#690571] max-md:hidden">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img on:click={refreshPage} class="my-[24px] ml-[80px] bg-transparent " src={ChubLogo} alt='CHUB logo'>
                
                <nav class="bg-transparent flex gap-20 my-[40px] self-center">
                    <a class="nav-links" href='/'>Home </a>
                    <a class="nav-links flex gap-1" href='/about-us'>Why CHUB <img class="w-[20px]" src={ArrowMenu2} /></a>
                    <a class="nav-links flex gap-1" href='/suggestions'>Suggest a feature <img class="w-[20px]" src={ArrowMenu2} /></a>
                </nav>
                <button on:click={downloadApp} class="buttons header-button my-[14px] mr-[16px] self-center duration-200"> Join the Waitlist today!</button>
            </div>
        </div>
        
        <div class="justify-center mb-4 flex max-md:w-[full] lg:hidden">
            <img src="{ChubLogo}" alt="" class="w-[150px]">
        </div>
        <!-- <h1 class="max-md:text-[30px] max-md:leading-[1.2] text-[70px] font-[900] leading-[100px] text-center dela-gothic-one-regular"><span class="text-[#fa9b64]">Fun</span>, Community, <span class="text-[#9cffcf] dela-gothic-one-regular">Growth</span></h1> -->
        
        <div class="z-10 flex justify-center flex-col text-center">
            <h1 class="max-md:text-[25px] max-md:leading-[1.2] text-[70px] mt-[120px] font-[900] leading-[100px] text-center dela-gothic-one-regular">Get productive while having fun!</h1>
            
            <p class="text-center mt-1 lg:mt-1 font-[100] text-[30px]">Get Productive while having fun! Join thousands of other people on <br> various challenges and create unique challenges with your circle.</p>
        </div>
        
        <!-- <p class="text-center mt-1 lg:mt-1 font-[100]">Be the First to Experience the Chub App! Beta Test <br>Challenges & Shape the App (<span class="text-[#acacac]">Plus Early Access & Rewards</span>)!</p> -->
        
        <!-- <div class="max-md:grid max-md:mt-8 flex justify-center max-md:gap-4 gap-10 mt-[40px]"> -->
        <div class="z-20 max-md:grid max-md:mt-8 flex flex-col justify-center max-md:gap-4 gap-10 mt-[40px]">
            
            <!-- Form goes here -->
            <div class="flex justify-center">
                <form id=waitlist-form action="block" method="POST" class="mb-[150px]" on:submit|preventDefault={() => alert('Form submitted!')}>
                    <div class="flex flex-row w-[100%] justify-center gap-8">
                        <input type="text"  minlength=3 maxlength="100" bind:value={fullname} name=fullname id=fullname class="waitlist-input-left" placeholder="Enter your Name" on:input="{(e) => e.target.setCustomValidity(fullname ? '' : 'We need a name 🥹.')}" required>
                        
                        <input type="email" minlength=3 maxlength="100" bind:value={emailaddress} name=emailaddress id=emailaddress class="waitlist-input-right" placeholder="Enter your email address" on:input="{(e) => e.target.setCustomValidity(emailaddress ? '' : 'We need your email address, please 🥹.')}" required>
                    </div>
                    
                    <div class="grid justify-center mt-5">
                        <div class="flex flex-row gap-5 leading-4 mt-5">
                            <input id=checkbox1 class="custom-checkbox" name=checkbox1 type=checkbox required>
                            <label for="checkbox1" class="text-[20px]">I consent to receiving communications from CHUB </label>
                        </div>
                        <div class="flex flex-row gap-5 leading-4 mt-5">
                            <input id=checkbox2 class="w-[auto]" name=checkbox2 type=checkbox required>
                            <label for="checkbox2" class="text-[20px]">I would like to be a part of the CHUB testing. </label>
                        </div>
                    </div>
                    
                    <div class="flex justify-center mt-10">
                        <button class="join-button1 max-md:h-[50px] max-md:w-[250px] h-[60px] w-[280px] flex justify-center items-center font-[100]">
                            Join the Waitlist Today!
                        </button>
                    </div>
                    
                </form>
            </div>
            
        </div>
        
        
    </section>
    
    <!-- SECTION TWO: Accordion-->
    <section class="mid-section-grade max-md:mt-[20px] max-md:mb-[20px] pb-[150px]">
        <img src={bLaptopHold} alt="chub-playground" class="chub-playground w-[700px] absolute mt-[-700px] max-md:w-full">
        <div class="flex justify-center mt-[60px] mx-[40px] gap-20">
            <div class="flex flex-col justify-end items-end">
                <div class="w-full flex flex-col justify-enf items-end">
                    <div class="py-5 w-full max-w-md mx-auto">
                        
                        <div class="text-black text-left my-5 lg:mt-1 font-[500] text-[40px] w-full">Grow, Build Community, and  have fun while at it!</div>
                        
                        <!-- Mid-Section 1 -->
                        <div class="rounded-lg mb-4 {activeSection === 1 ? 'active-accord' : 'inactive-accord'}">
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex justify-left items-left py-4 pr-20 pl-3 gap-3 cursor-pointer {activeSection === 1 ? 'active-accord' : 'inactive-accord'} hover:bg-purple-300 rounded-lg" on:click={() => toggleSection(1)}>
                            <span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">{activeSection === 1 ? '−' : '+'}</span>
                            <span class="text-lg text-[#690571] font-[900]">Create your community:</span>
                          </div>
                          {#if activeSection === 1}
                            <div class="p-4 text-[#460D4B] text-[16px]">
                              Build your productivity tribe with existing or new friends or simply join an existing community.
                            </div>
                          {/if}
                        </div>
                      
                        <!-- Mid-Section 2 -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="rounded-lg mb-4 {activeSection === 2 ? 'active-accord' : 'inactive-accord'}">
                          <div class="flex justify-left items-center p-4 gap-3 cursor-pointer {activeSection === 2 ? 'active-accord' : 'inactive-accord'} hover:bg-purple-300 rounded-lg" on:click={() => toggleSection(2)}>
                            <span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">{activeSection === 2 ? '−' : '+'}</span>
                            <span class="text-lg text-[#690571] font-[900]">Set up challenges</span>
                          </div>
                          {#if activeSection === 2}
                            <div class="p-4 text-[#460D4B] text-[16px]">
                              Organize your own challenges or join the ones already available to enhance your productivity.
                            </div>
                          {/if}
                        </div>
                      
                        <!-- Mid-Section 3 -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="rounded-lg mb-4 {activeSection === 3 ? 'active-accord' : 'inactive-accord'}">
                          <div class="flex justify-left items-center p-4 gap-3 cursor-pointer {activeSection === 3 ? 'active-accord' : 'inactive-accord'} hover:bg-purple-300 rounded-lg" on:click={() => toggleSection(3)}>
                            <span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">{activeSection === 3 ? '−' : '+'}</span>
                            <span class="text-lg text-[#690571] font-[900]">Track your progress</span>
                          </div>
                          {#if activeSection === 3}
                            <div class="p-4 text-[#460D4B] text-[16px]">
                              Stay on top of your tasks and see how you improve over time by tracking key metrics.
                            </div>
                          {/if}
                        </div>
                      
                        <!-- Mid-Section 4 -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="rounded-lg mb-4 {activeSection === 4 ? 'active-accord' : 'inactive-accord'}">
                          <div class="flex justify-left items-center p-4 gap-3 cursor-pointer {activeSection === 4 ? 'active-accord' : 'inactive-accord'} hover:bg-purple-300 rounded-lg" on:click={() => toggleSection(4)}>
                            <span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">{activeSection === 4 ? '−' : '+'}</span>
                            <span class="text-lg text-[#690571] font-[900]">Get rewarded</span>
                          </div>
                          {#if activeSection === 4}
                            <div class="p-4 text-[#460D4B] text-[16px]">
                              Earn rewards and recognition as you reach milestones in your challenges and goals.
                            </div>
                          {/if}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img alt="iphone-app-display" src={Frame1000011791} class="w-[600px]">
            </div>
        </div>
    </section>
    
    <!-- SECTION THREE: Accordion-->
    <section class="max-md:mt-[20px] max-md:mb-[20px] mt-[-100px]">
        <div class="flex justify-center gap-3 my-10 max-md:mx-0 lg:gap-7">
            <div class="lg:w-[350px]">
                <img class="" src={Frame1000011801} alt="Create">
            </div>
            
            <div class="lg:w-[350px]">
                <img class="" src={Frame1000011802} alt="Connect">
            </div>
            
            <div class="lg:w-[350px]">
                <img class="" src={Frame1000011803} alt="Challenge">
            </div>
        </div>
    </section>
    
    <!-- SECTION FOUR: Multiple Containers--> 
    <section class="grid gap-2 max-md:hidden my-[100px]">
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
                        <div class="bg-[#EEEEF0] h-full w-full rounded-lg flex flex-col">
                            <p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Be part of a <br> closely-knit <br> community</p>
                            <div class="w-full flex-grow flex items-end justify-end">
                                <img src={DiscussionImg} alt="Chat Icon" class="rounded-lg h-auto w-[200px]">
                            </div>
                        </div>
                        <div class="bg-[#FFCADC] h-full w-full rounded-lg flex flex-col">
                            <p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Cultivate habits, <br> hit milestones</p>
                            <div class="w-full flex-grow flex items-end justify-end">
                                <img src={DiscussionImg} alt="Chat Icon" class="rounded-lg h-auto w-[200px]">
                            </div>
                        </div>
                        <!-- <img src={RocketImg} alt="Rocket" class="rounded-lg h-auto"> -->
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
          
    </section>
    
    <!-- SECTION THREE: Sliders -->
    <section id="features" class="max-md:mt-[50px] mt-[50px] w-full grid justify-center">
        <center class="mx-10 max-md:mx-2">
            <h4 class="text-[#FC3A0F] dela-gothic-one-regular">Why Challenge Hub</h4>
            <h4 class="max-md:text-[30px] mt-0 max-md:mx-5 max-md:leading-[1.2] md:w-[80vw] text-[60px] leading-[60px] text-center dela-gothic-one-regular">We heard <span class="text-[#fa1bf1] glancyr">you</span></h4>
            
            <p class="text-center mt-1 font-[100] w-[600px]">Goals can feel overwhelming! Let's make it fun together. Playful challenges, a supportive community, and real results await. We’ve got you!</p>
            
            <div id=allSlides class="mt-[50px]">
                <Slider/>
            </div>
            
        </center>
    </section>
    
    <!-- SECTION FOUR: Why Beta test-->
    <section id="why-beta" class="max-md:mt-[50px] mt-[150px] w-full grid justify-center h-[600px]">
        <center class="mx-10 max-md:mx-2">
            <h4 class="text-[#E84500] max-md:text-[30px] mt-0 max-md:mx-5 max-md:leading-[1.2] md:w-[80vw] text-[40px] leading-[60px] text-center font-[900]">Why Beta test for us?</h4>
        </center>
        <div>
            <TextSlide/>
        </div>
    </section>

    <!-- SECTION FIVE -->
    <section id="preview" class="max-md:my-[50px] h-[400px] mt-[250px] relative w-full grid justify-center bg-[#1E0221] max-[900px]:hidden">
        
        <div class="flex w-[75vw] cywwc justify-between px-1 py-0 gap-10 text-white rounded-[40px]">
            
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