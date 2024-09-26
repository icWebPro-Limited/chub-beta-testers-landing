<script>
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import Saly from "../assets/img/79869.png";
    let y;
</script>

<!-- <Header {y} /> -->
<section class="flex justify-center bg-[#37083c]">
    
    <div class="my-[5vh] justify-center grid">
        
        <div class="justify-center flex">
            <img src={Saly} class="w-[1000px]">
        </div>
        
        <h1 class="max-md:text-[35px] max-md:leading-[1.2] text-[70px] mt-[10px] max-md:mt-[30px] font-[900] leading-[100px] text-center dela-gothic-one-regular">Error 404!</h1>
        
        <h1 class="max-md:text-[15px] max-md:leading-[1.2] text-[20px] mt-[10px] max-md:mt-[30px] font-[500] leading-[100px] text-center dela-gothic-one-regular">Oops! We've not built this page yet!</h1>
    </div>
</section>