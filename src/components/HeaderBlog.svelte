<script>
    import ArrowMenu from "../assets/img/menu-arrow.svg";
    import ChubLogo from "../assets/img/wLogo_white.png"
    
    function downloadApp(){
        location.href="#downloadApp";
    }
    
    function refreshPage(){
        window.location.href="/";
    }
 </script>
 
<header class="w-auto justify-center flex">
     
     <div class="blog-header flex justify-between">
         
         <a href="/blog" class="w-auto flex items-center">
            <img class="my-[24px] ml-[80px] bg-transparent w-[150px]" src={ChubLogo} alt='CHUB logo'>
            <span class="ml-[-5px] text-[15px] font-[600]">Blog</span>
         </a>
         
         <nav class="bg-transparent flex gap-20 my-[40px] self-center">
             <a class="nav-links" href='/'>Home </a>
             <a class="nav-links flex gap-1" href='/features'>Features <img class="w-[20px]" src={ArrowMenu} /></a>
             <a class="nav-links flex gap-1" href='/integration'>Integration <img class="w-[20px]" src={ArrowMenu} /></a>
             <a class="nav-links flex gap-1" href='/blog'>Blog <img class="w-[20px]" src={ArrowMenu} /></a>
         </nav>
         <!-- svelte-ignore a11y-click-events-have-key-events -->
         <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
         <button on:click={downloadApp} class="buttons header-button my-[14px] mr-[16px] self-center duration-200"> Get Started</button>
     </div>
 </header>
 