<script>
    import CommunityImg from "../assets/img/Rectangle-7.png";
    import LeaderboadImg from "../assets/img/Group-3.png";
    import ProfileImg from "../assets/img/Group-2.png";
    import UploadImg from "../assets/img/Frame4273209401-3.png";
    import SlideText1 from "../assets/img/F1000002390.png";
    import SlideText2 from "../assets/img/Frame10000023902.png";
    import SlideText3 from "../assets/img/Frame10000023903.png";
    // import SlideText4 from "../assets/img/Frame10000023902.png";
    import Health from "../assets/img/Health.png";
    import Development from "../assets/img/Development.png";
    import Exercise from "../assets/img/Exercise.png";
    import LevelUp from "../assets/img/Group1000011266.png";
    
    import { onMount } from 'svelte';
    
    $:currentSlideIndex = 1;
    

    // onMount lifecycle method to set up the interval
    onMount(() => {
        const interval = setInterval(() => {
            currentSlideIndex == 4 ? currentSlideIndex = 1 :  currentSlideIndex+=1;
        }, 8000);

        // Cleanup interval when component is destroyed
        return () => clearInterval(interval);
    });
</script>
<div id=slider1 class="h-[600px] rounded-3xl flex flex-col gap-5 {currentSlideIndex == 1 ? 'visible' : 'hidden'}">
    <div class="flex flex-col pt-[40px] h-full">
        <h2 class="text-black text-[20px] font-[900]">Gamification x Community</h2>
        <div class="flex gap-5 justify-center mt-9">
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-active"></span>
                <span class="sliders-text-active">Grow with community</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Get recognized</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">See your progress</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Be held accountable</span>
            </div>
        </div>
    </div>
    <div class="h-full flex gap-0 justify-between items-end z-0">
        <div class="ml-[100px] mb-[50px]">
            <img src={SlideText1} alt="Slider Text" class="w-[600px]">
        </div>
        <div class="">
            <img src={CommunityImg} alt="Community Illustrator" class="w-[560px] object-contain rounded-lg">
        </div>
    </div>
</div>

<div id=slider2 class="h-[600px] rounded-3xl flex flex-col gap-5 {currentSlideIndex == 2 ? 'visible' : 'hidden'}">
    <div class="flex flex-col pt-[40px] h-full">
        <h2 class="text-black text-[20px] font-[900]">Gamification x Community</h2>
        <div class="flex gap-5 justify-center mt-9">
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Grow with community</span>
            </div>
            
            <div class="text-white font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-active white-bg"></span>
                <span class="sliders-text-active white-text">Get recognized</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">See your progress</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Be held accountable</span>
            </div>
        </div>
    </div>
    <div class="h-full flex gap-0 justify-between items-end z-0">
        <div class="ml-[100px] mb-[50px]">
            <img src={SlideText2} alt="Slider Text" class="w-[600px]">
        </div>
        <div class="flex flex-row">
            <div class="flex flex-col gap-[20px] relative left-[140px]">
                <img src={Exercise} alt="Exercise icon" class="w-[90px]">
                <img src={Health} alt="Development icon" class="w-[90px] relative right-[60px]">
                <img src={Development} alt="Health icon" class="w-[90px]">
            </div>
            <div class="mr-[20px]">
                <img src={LeaderboadImg} alt="Leaderboard Illustrator" class="w-[540px] object-contain rounded-lg">
            </div>
        </div>
    </div>
</div>

<div id=slider3 class="h-[600px] rounded-3xl {currentSlideIndex == 3 ? 'visible' : 'hidden'}">
    <div id=slider3inner class="h-[600px] flex flex-col gap-5">
        <div class="flex flex-col pt-[40px] h-full">
            <h2 class="text-white text-[20px] font-[900]">Gamification x Community</h2>
            <div class="flex gap-5 justify-center mt-9">
                <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                    <span class="sliders-inactive"></span>
                    <span class="sliders-text-inactive">Grow with community</span>
                </div>
                
                <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                    <span class="sliders-inactive"></span>
                    <span class="sliders-text-inactive">Get recognized</span>
                </div>
                
                <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                    <span class="sliders-active white-bg"></span>
                    <span class="sliders-text-active white-text">See your progress</span>
                </div>
                
                <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                    <span class="sliders-inactive"></span>
                    <span class="sliders-text-inactive">Be held accountable</span>
                </div>
            </div>
        </div>
        <div class="h-full flex gap-0 justify-between items-end z-0">
            <div class="grid ml-[100px] mb-[50px]">
                <div class="relative top-[-100px] left-[300px]">
                    <img src={LevelUp} alt="Exercise icon" class="w-[200px]">
                </div>
                <div class="items-start">
                    <img src={SlideText3} alt="Slider Text" class="w-[600px]">
                </div>
            </div>
            <div class="flex flex-row">
                <div class="mr-[20px]">
                    <img src={ProfileImg} alt="Leaderboard Illustrator" class="w-[540px] object-contain rounded-lg">
                </div>
            </div>
        </div>
    </div>
</div>

<div id=slider4 class="h-[600px] rounded-3xl flex flex-col gap-5 {currentSlideIndex == 4 ? 'visible' : 'hidden'}">
    <div class="flex flex-col pt-[40px] h-full">
        <h2 class="text-black text-[20px] font-[900]">Gamification x Community</h2>
        <div class="flex gap-5 justify-center mt-9">
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Grow with community</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Get recognized</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">See your progress</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-active"></span>
                <span class="sliders-text-active">Be held accountable</span>
            </div>
        </div>
    </div>
    <div class="h-full flex gap-0 justify-between items-end z-0">
        <div class="ml-[100px] mb-[50px]">
            <img src={SlideText1} alt="Slider Text" class="w-[600px]">
        </div>
        <div class="mr-[20px]">
            <img src={UploadImg} alt="Upload Illustrator" class="w-[400px] object-contain rounded-t-[3rem]">
        </div>
    </div>
</div>