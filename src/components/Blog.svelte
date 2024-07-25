<script>
    import ChubLogo from "../assets/img/wLogo_white.png";
    import BlogList from "./BlogList.svelte";
</script>

<!-- Title-->
<div class="w-full">
    <section class="grid justify-center p-4 pb-[100px] max-lg:pb-[40px] bg-[#350214] text-center">
        <div class="mt-[200px] max-md:mt-[40px] max-lg:mt-[20px]">
            
            <div class="lg:hidden">
                <a href="/blog" class="w-auto flex justify-center items-center">
                    <img class="my-[24px] bg-transparent w-[150px]" src={ChubLogo} alt='CHUB logo'>
                    <span class="ml-[-5px] text-[12px] font-[600]">Blog</span>
                </a>
            </div>
            <div class="text-center w-full">
                <h1 class="text-[50px] max-md:text-[25px]">Welcome to the CHUB Blog</h1>
                <p class="text-[16px] max-md:text-[12px] w-full">Feel free to read our blog and be a part of the journey</p>
            </div>
        </div>
    </section>
</div>

<div class="mb-[50px]">
    <!-- Blog list -->
    <BlogList/>
</div>