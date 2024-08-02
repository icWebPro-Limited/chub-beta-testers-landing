<script>
    import CommunityImg from "../assets/img/Rectangle-7.png";
    import SlideText1 from "../assets/img/F1000002390.png";
    
    import { onMount } from 'svelte';
    
    let showSlider1 = true;
    
    $:showSlider1;

    // onMount lifecycle method to set up the interval
    onMount(() => {
            const interval = setInterval(() => {
            showSlider1 = !showSlider1;
        }, 4000);

        // Cleanup interval when component is destroyed
        return () => clearInterval(interval);
    });
</script>
<div id=slider1 class="h-[600px] rounded-3xl flex flex-col gap-5" class:hidden={!showSlider1}>
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
            <img src={SlideText1} alt="Community Illustrator" class="w-[600px]">
        </div>
        <div class="">
            <img src={CommunityImg} alt="Community Illustrator" class="w-[560px] object-contain rounded-lg">
        </div>
    </div>
</div>

<div id=slider2 class="h-[600px] rounded-3xl flex flex-col gap-5" class:hidden={showSlider1} class:opacity-100={!showSlider1}>
    <div class="flex flex-col pt-[40px] h-full">
        <h2 class="text-black text-[20px] font-[900]">Gamification x Community</h2>
        <div class="flex gap-5 justify-center mt-9">
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-inactive"></span>
                <span class="sliders-text-inactive">Grow with community</span>
            </div>
            
            <div class="text-black font-[400] text-left flex flex-col gap-[7px]">
                <span class="sliders-active"></span>
                <span class="sliders-text-active">Get recognized</span>
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
            <img src={SlideText1} alt="Community Illustrator" class="w-[600px]">
        </div>
        <div class="">
            <img src={CommunityImg} alt="Community Illustrator" class="w-[560px] object-contain rounded-lg">
        </div>
    </div>
</div>