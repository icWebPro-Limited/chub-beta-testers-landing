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
    import Design04 from "../assets/img/Design04.png";
    import Design4 from "../assets/img/Design4.png";
    import iphoneMeta from "../assets/img/iphoneMeta.png";
    import Frame1000011826 from "../assets/img/Frame1000011826.png";
    import Frame1000011749 from "../assets/img/Frame1000011749.png";
    import Frame1000011750 from "../assets/img/Frame1000011750.png";
    import Frame1000011751 from "../assets/img/Frame1000011751.png";
    // import Header from "./Header.svelte";
    import Swal from 'sweetalert2';
    
    function LearnMore(){
        location.href="#downloadApp";
    }
    
    function goToForm(){
        location.href="#waitlist-form-header";
    }
    
    function GoToReviews(){
        location.href="/reviews";
    }
    
    export let y;
   
   
   function downloadApp(){
    location.href="#waitlist-form-header";
   }
   
   function refreshPage(){
    window.location.reload();
   }
   // Function to detect the platform based on the user agent
   function getPlatform() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
        return 'ANDROID';
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'IOS';
        }

        return 'DESKTOP'; // Default to Desktop if not Android or iOS
    }
  
   let emailaddress = '';
   let fullname = '';
   let platform = getPlatform();
   let betaTestConsent = false;
   let chubCommunicationConsent = false;
   
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
    
    
    // Form submission handler
    async function handleSubmit() {
        // Form validation check
        if (!emailaddress || !fullname || !betaTestConsent || !chubCommunicationConsent) {
            alert("Please complete all required fields.");
            return;
        }

        // Payload expected by the server
        const payload = {
            email: emailaddress,
            platform: platform,
            fullName: fullname,
            betaTestConsent: true,
            chubCommunicationConsent: true
        };

        try {
            const response = await fetch("https://staging.thechub.app/api/v2/user/add-beta-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                
                if (data.ok) {
                    // Handle success
                    Swal.fire({
                        title: "Form Submitted",
                        text: "Thank you for completing the form, we'll get back to you shortly.",
                        icon: "success",
                        confirmButtonColor: "#3c0210",
                    });
                } else {
                    // Handle error
                    Swal.fire({
                        title: "Submit failed",
                        text: "An error has occurred. Please try again.",
                        icon: "error",
                        footer: '<a href="#">Why do I have this issue?</a>',
                        confirmButtonText: "Try again",
                        confirmButtonColor: "#3c0210",
                    });
                }
            
            } else {
                // alert("Error submitting the form. Please try again.");
                Swal.fire({
                    title: "Submit failed",
                    text: "Error submitting the form. Please try again.",
                    icon: "error",
                    footer: '<a href="#">Why do I have this issue?</a>',
                    confirmButtonText: "Try again",
                    confirmButtonColor: "#3c0210",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            // alert("An error occurred. Please check your connection.");
            // Handle error
            Swal.fire({
                title: "Server Error",
                text: "We encountered an error while trying to submit your form. Please try again.",
                icon: "error",
                confirmButtonText: "Okay",
                confirmButtonColor: "#3c0210",
            });
        }
    }
    
    let activeSection = null;

    function toggleSection(index) {
        activeSection = activeSection === index ? null : index;
    }
</script>

<main class="block pb-0 lg:mt-[0px] w-full">
    
    <!-- SECTION ONE: First View -->
    <section id="title" class="max-md:mx-[0px] p-7 max-md:p-3 grid grid-cols-1 bg-[#690571]">
        
        <!-- Header here-->
        <div class="flex justify-center max-md:mt-5">
            <div class="header-new flex justify-between mt-40 bg-[#690571]">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img on:click={refreshPage} class="my-[24px] ml-[80px] bg-transparent max-md:my-[20px] max-md:w-[150px] max-md:ml-[15px]" src={ChubLogo} alt='CHUB logo'>
                
                <nav class="bg-transparent flex gap-20 my-[40px] max-md:gap-[5px] max-md:my-[0px] self-center">
                    <a class="nav-links max-md:hidden" href='/'>Home </a>
                    <a class="nav-links flex gap-1 max-md:hidden" href='#about-us'>Why CHUB <img class="w-[20px] max-md:hidden" src={ArrowMenu2} /></a>
                    <a class="nav-links flex gap-1 max-md:hidden" href='#suggestions'>Suggest a feature <img class="w-[20px] max-md:hidden" src={ArrowMenu2} /></a>
                </nav>
                <button on:click={downloadApp} class="buttons header-button my-[14px] mr-[16px] self-center duration-200 "> Join the Waitlist today!</button>
            </div>
        </div>
        
        <!-- Mobile Floating Image -->
        <div class="justify-center mb-4 flex max-md:w-[full] lg:hidden">
            <!-- <img src="{wChubLogo}" alt="" class="w-[250px]"> -->
            <img src={bLaptopHold} alt="chub-playground" class="ml-20 chub-playground w-[300px] mt-[10px]">
        </div>
        <!-- Mobile Floating Image End  -->
        
        <!-- <h1 class="max-md:text-[30px] max-md:leading-[1.2] text-[70px] font-[900] leading-[100px] text-center dela-gothic-one-regular"><span class="text-[#fa9b64]">Fun</span>, Community, <span class="text-[#9cffcf] dela-gothic-one-regular">Growth</span></h1> -->
        
        <div class="z-10 flex justify-center flex-col text-center">
            <h1 id="waitlist-form-header" class="max-md:text-[35px] max-md:leading-[1.2] text-[70px] mt-[120px] max-md:mt-[10px] font-[900] leading-[100px] text-center dela-gothic-one-regular">Get productive while having fun!</h1>
            
            <p class="lg:hidden text-center mt-4 font-[100] text-[17px]">Join thousands of other people on various challenges and create unique challenges with your circle.</p>
            
            <p class="max-md:hidden text-center mt-1 lg:mt-1 font-[100] text-[30px]">Join thousands of other people on various challenges and create <br>unique challenges with your circle.</p>
        </div>
        
        <!-- <p class="text-center mt-1 lg:mt-1 font-[100]">Be the First to Experience the Chub App! Beta Test <br>Challenges & Shape the App (<span class="text-[#acacac]">Plus Early Access & Rewards</span>)!</p> -->
        
        <!-- <div class="max-md:grid max-md:mt-8 flex justify-center max-md:gap-4 gap-10 mt-[40px]"> -->
        <div class="z-20 max-md:grid max-md:mt-8 flex flex-col justify-center max-md:gap-4 gap-10 mt-[40px]">
            
            <!-- Form goes here -->
            <div id="waitlist-form" class="flex justify-center">
                <form id=waitlist-form action="block" method="POST" class="mb-[150px]" on:submit|preventDefault={handleSubmit}>
                    <div class="input-field-div flex flex-row w-[100%] justify-center gap-8">
                        <input type="text"  minlength=3 maxlength="100" bind:value={fullname} name=fullname id=fullname class="waitlist-input-left" placeholder="Enter your Name" on:input="{(e) => e.target.setCustomValidity(fullname ? '' : 'We need a name 🥹.')}" required>
                        
                        <input type="email" minlength=3 maxlength="100" bind:value={emailaddress} name=emailaddress id=emailaddress class="waitlist-input-right" placeholder="Enter your email address" on:input={validateEmail} required>
                    </div>
                    
                    <div class="grid justify-center mt-5">
                        <div class="flex flex-row gap-4 leading-4 mt-5">
                            <input id=checkbox1 class="custom-checkbox" name=betaTestConsent bind:checked={betaTestConsent} type=checkbox required>
                            <label for="betaTestConsent" class="text-[20px] max-md:text-[15px]">I consent to receiving communications from CHUB </label>
                        </div>
                        <div class="flex flex-row gap-4 leading-4 mt-5">
                            <input id=checkbox2 class="custom-checkbox" name=chubCommunicationConsent bind:checked={chubCommunicationConsent} type=checkbox required>
                            <label for="checkbox2" class="text-[20px] max-md:text-[15px]">I would like to be a part of the CHUB testing. </label>
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
    <section class="mid-section-grade max-md:mt-[20px] max-md:mb-[20px] max-md:pb-5 pb-[150px]">
        <img src={bLaptopHold} alt="chub-playground" class="chub-playground w-[700px] absolute mt-[-700px] max-md:hidden">
        <div class="flex justify-center mt-[60px] mx-[40px] gap-20">
            <div class="flex flex-col justify-end items-end">
                <div class="w-full flex flex-col justify-enf items-end">
                    <div class="py-5 w-full max-w-md mx-auto">
                        
                        <div class="text-black text-left my-5 lg:mt-1 font-[500] max-md:text-[30px] text-[40px] w-full max-md:w-[70%]">Grow, Build Community, and  have fun while at it!</div>
                        
                        <!-- Mid-Section 1 -->
                        <div class="rounded-lg mb-4 {activeSection === 1 ? 'active-accord' : 'inactive-accord'}">
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex justify-left items-left py-4 pr-20 pl-3 gap-3 cursor-pointer {activeSection === 1 ? 'active-accord' : 'inactive-accord'} hover:bg-purple-300 rounded-lg" on:click={() => toggleSection(1)}>
                            <span class="text-[20px] bg-[#690571] py-0 px-[10px] rounded-full">{activeSection === 1 ? '−' : '+'}</span>
                            <span class="text-lg max-md:text-base text-[#690571] font-[900]">Create your community</span>
                          </div>
                          {#if activeSection === 1}
                            <div class="p-4 max-md:pt-0 text-[#460D4B] text-[16px]">
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
                            <span class="text-lg max-md:text-base text-[#690571] font-[900]">Set up challenges</span>
                          </div>
                          {#if activeSection === 2}
                            <div class="p-4 max-md:pt-0 text-[#460D4B] text-[16px]">
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
                            <span class="text-lg max-md:text-base text-[#690571] font-[900]">Track your progress</span>
                          </div>
                          {#if activeSection === 3}
                            <div class="p-4 max-md:pt-0 text-[#460D4B] text-[16px]">
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
                            <span class="text-lg max-md:text-base text-[#690571] font-[900]">Get rewarded</span>
                          </div>
                          {#if activeSection === 4}
                            <div class="p-4 max-md:pt-0 text-[#460D4B] text-[16px]">
                              Earn rewards and recognition as you reach milestones in your challenges and goals.
                            </div>
                          {/if}
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-md:hidden">
                <img alt="iphone-app-display" src={Frame1000011791} class="w-[600px]">
            </div>
        </div>
    </section>
    
    <!-- SECTION THREE: About-->
    <section class="max-md:mt-[20px] max-md:mb-[20px] mt-[-100px] flex justify-center">
        <div class="max-md:block flex justify-center gap-3 my-10 max-md:mx-0 lg:gap-7">
            <div class="lg:w-[350px]">
                <img class="" src={Frame1000011801} alt="Create">
            </div>
            
            <div class="lg:w-[350px] max-md:my-5">
                <img class="" src={Frame1000011802} alt="Connect">
            </div>
            
            <div class="lg:w-[350px] max-md:my-5">
                <img class="" src={Frame1000011803} alt="Challenge">
            </div>
        </div>
    </section>
    
    <!-- SECTION FOUR: Multiple Containers--> 
    <section class="grid gap-2 max-md:my-[10px] my-[70px]">
        
        <h1 class="max-md:text-[25px] max-md:leading-[1.2] text-[40px] max-md:my-[20px] my-[50px] font-[400] leading-[1] text-center bricolage text-black">Ready to Challenge Yourself? <br>Join CHUB</h1>
        
        <div class="flex flex-row flex-wrap gap-3 justify-center">
            <div>
                <img src={Frame1000011826} alt="" class="rounded-lg h-auto object-cover max-md:w-[22rem] w-[550px]">
            </div>
            <div>
                <img src={CombinedFaces} alt="" class="rounded-lg h-auto object-cover max-md:w-[22rem] w-[550px]">
            </div>
        </div>
        <div class="flex flex-row flex-wrap gap-3 justify-center max-md:h-auto h-[500px]">
            <div class="flex justify-center max-md:w-[22rem] w-[550px] gap-4">
                <div class="bg-[#fdf4fe] h-full w-full rounded-lg flex flex-col">
                    <img src={Design04} alt="Chat Icon" class="mt-[40px] ml-[20px] rounded-lg h-auto w-[200px]">
                    <p class="mt-[20px] ml-[20px] text-black font-[500] text-[26px]">Chub Champions: <br> Real stories, Real <br> Success</p>
                    <button on:click={goToForm} class="buttons flyer-button my-[14px] ml-[20px] max-md:w-[60%] w-[40%] duration-200"> Try CHUB today</button>
                </div>
            </div>
            <div class="flex flex-row gap-1 justify-center max-md:w-[22rem] w-[550px] max-md:h-auto h-[500px]">
                <div class="bg-[#edd9ff] w-[50%] max-md:h-auto h-full rounded-lg flex flex-col">
                    <p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Earn points, <br> gems and <br>badges</p>
                    <img src={Design4} alt="" class="rounded-xl object-contain w-[full]">
                </div>
                <div class="flex flex-col gap-4 max-md:gap-2 max-md:h-auto h-full w-[50%]">
                    <div class="bg-[#EEEEF0] max-md:h-auto h-full w-full rounded-lg flex flex-col">
                        <p class="mt-[20px] ml-[20px] text-black font-bold text-lg">Be part of a <br> closely-knit <br> community</p>
                        <div class="w-full flex-grow flex items-end justify-end">
                            <img src={DiscussionImg} alt="Chat Icon" class="rounded-lg h-auto w-[200px]">
                        </div>
                    </div>
                    <div class="bg-[#FFCADC] h-full w-full rounded-lg flex flex-col">
                        <p class="mt-[20px] max-md:mt-[10px] ml-[20px] text-black font-bold max-md:text-base max-md:pb-5 text-lg">Cultivate habits, <br> hit milestones</p>
                    </div>
                    <!-- <img src={RocketImg} alt="Rocket" class="rounded-lg h-auto"> -->
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION FIVE: Experience -->
    <section id="preview" class="max-md:my-[50px] max-md:mb-0 mt-[100px] w-full bg-[#fbe7ff] max-md:pt-0 max-md:pb-1 pt-[80px]">
        <div class="flex justify-center items-center flex-wrap flex-col">
            <div class="w-[60%]">
                <h1 class="max-md:text-[25px] max-md:leading-[1.2] text-[40px] mt-[50px] font-[400] leading-[1] text-center bricolage text-black">Experience All The Cool Features <br> Before Anyone Else! <br> Join The Waitlist!</h1>
                <p class="text-center font-[100] pt-5 text-black">Be the First to Experience the Chub App!</p>
            </div>
            
            <div class="w-[60%] max-md:mt-[40px] mt-[100px] flex justify-center">
                <img src={iphoneMeta} alt="" class="w-[600px]">
            </div>
        </div>
    </section>
</main>