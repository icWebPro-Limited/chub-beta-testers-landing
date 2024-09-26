<script>
    import { page } from '$app/stores';
    import "../app.css";
    import "../assets/css/menu.css";
    import Footer from "../components/Footer.svelte";
    let y;
    let innerHeight = 0;
    let innerWidth = 0;
    
    
    // Other functions
    function goTop() {
       document.body.scrollIntoView();
    }
</script>

<!-- Mobile Menu -->
<!-- <menu>
   <a href="/" class:nav--active="{$page.url.pathname === '/'}">Home</a>
   <a href="/about-us" class:nav--active="{$page.url.pathname === '/about-us'}">Why Chub?</a>
   <a href="/suggestions" class:nav--active="{$page.url.pathname === '/suggestions'}">Join the waitlist</a>
   <a href="/blog" class:nav--active="{$page.url.pathname.startsWith('/blog')}">Blog</a>
   <a href="/about" class:nav--active="{$page.url.pathname === '/about'}">About</a>
</menu> -->


<!-- Back to top -->
 <div class="relative flex flex-col max-w-full mx-auto w-full text-sm sm:text-base">
   <div class={"fixed bottom-0 w-auto duration-200 flex p-10 z-[10] bg-transparent " +
         (y > 0
            ? "opacity-full pointer-events-auto"
            : "opacity-0 pointer-events-none")}
      >
      <button on:click={goTop} class="max-md:hidden arrow-button ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-[#33023b] cursor-pointer bg-transparent">
         <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
      </button>
   </div>
</div>
<slot />
<Footer />
<svelte:window
    bind:scrollY={y}
    bind:innerHeight
    bind:innerWidth
 />