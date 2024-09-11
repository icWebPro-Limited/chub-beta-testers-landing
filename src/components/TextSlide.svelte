<script>
    import DescripText1 from "../assets/img/Group1000011264.png";
    import DescripText2 from "../assets/img/Group1000002118.png";
    import DescripText3 from "../assets/img/Group1000011262.png";
    import DescripText4 from "../assets/img/Group1000011263.png";
    
    import { onMount } from 'svelte';
    
    $:currentSlideIndex = 1;
    
    let showSlider1 = true;
    
    $:showSlider1;

    // onMount lifecycle method to set up the interval
    onMount(() => {
        const interval = setInterval(() => {
            currentSlideIndex == 4 ? currentSlideIndex = 1 :  currentSlideIndex+=1;
        }, 5000);

        // Cleanup interval when component is destroyed
        return () => clearInterval(interval);
    });
</script>
<div id=tslider1 class="w-[70%] flex justify-center align-center items-center">
    <img src={DescripText1} alt="Slider Text" class="w-[90%] tslider  {currentSlideIndex == 1 ? 'visible' : 'hidden'}">
    <img src={DescripText2} alt="Slider Text" class="w-[90%] tslider {currentSlideIndex == 2 ? 'visible' : 'hidden'}">
    <img src={DescripText3} alt="Slider Text" class="w-[90%] tslider {currentSlideIndex == 3 ? 'visible' : 'hidden'}">
    <img src={DescripText4} alt="Slider Text" class="w-[90%] tslider {currentSlideIndex == 4 ? 'visible' : 'hidden'}">
</div>
