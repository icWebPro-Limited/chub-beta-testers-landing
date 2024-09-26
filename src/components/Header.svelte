<script>
   export let y;
   import ArrowMenu from "../assets/img/menu-arrow.svg";
   import ArrowMenu2 from "../assets/img/arrow-up.svg";
   import ChubLogo from "../assets/img/wLogo_white.png";
   
   
   function downloadApp(){
    location.href="/beta-tester";
   }
   
   function refreshPage(){
    window.location.reload();
   }
</script>

<header class="w-auto justify-center flex">
    
    <div class="header flex justify-between bg-[#690571]">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img on:click={refreshPage} class="my-[24px] ml-[80px] bg-transparent " src={ChubLogo} alt='CHUB logo'>
        
        <nav class="bg-transparent flex gap-20 my-[40px] self-center">
            <a class="nav-links" href='/'>Home </a>
            <a class="nav-links flex gap-1" href='/about-us'>Why CHUB <img class="w-[20px]" src={ArrowMenu2} /></a>
            <a class="nav-links flex gap-1" href='/suggestions'>Suggest a feature <img class="w-[20px]" src={ArrowMenu2} /></a>
        </nav>
        <button on:click={downloadApp} class="buttons header-button my-[14px] mr-[16px] self-center duration-200"> Be a Beta Tester</button>
    </div>
</header>