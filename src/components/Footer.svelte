<script>
    import "../assets/css/footer.css";
    import ChubLogo from "../assets/img/wLogo_white.png";
    
    let email = '';
    
    function refreshPage(){
        window.location.reload();
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission here, like sending the email value to a server
    }
    
    
</script>

<footer class="w-full">
    <div class="mb-10 opacity-0">Footer</div>
    <div id="footer-layer" class="">
        
        <div class="justify-center mx-20 max-lg:mx-5">
            
            <!-- Connect -->
            <form class="w-full flex justify-center pb-[50px] max-md:pb-[50px] border-b-[1px] border-solid border-b-white" on:submit={handleSubmit}>
                
                <div class="flex justify-between items-center w-full max-md:flex-col">
                    <h1 class="max-lg:text-[30px] lg:mt-10 max-md:mx-5 max-md:leading-[1.2] md:w-[650px] text-[88px] leading-[1] text-white"> Want to stay connected?</h1>
                    <div class="lg:w-[50%] w-full max-md:mt-5 flex gap-3 relative">
                        <input type="email" bind:value={email} placeholder="Email Address">
                        <button type="submit" class="absolute right-3 top-2 buttons footer-button duration-200"> Submit</button>
                    </div>
                </div>
            </form>
            
            <!-- Links -->
            <div class="mt-20 max-md:mt-10 max-md:block flex justify-between max-md:pb-[50px] pb-[50px] border-b-[1px] border-solid border-b-white">
                <div class="w-full">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <img on:click={refreshPage} class="bg-transparent w-[9rem] md:w-[14rem] ml-[-10px]" src={ChubLogo} alt='CHUB logo'>
                    <p class="text-[0.4rem] lg:text-[12px]">Push yourself beyond the limit.</p>
                </div>
                
                <!-- Links list-->
                <div class="flex w-full justify-center gap-20 max-md:flex-col max-md:mt-10 max-md:gap-[15px]">
                    <div class="flex justify-between gap-20 w-full">
                        <div class="w-full">
                            <p class="font-[600] pb-5">Company</p>
                            <ul class="font-[100] text-[12px] leading-[2.5]">
                                <li>Home</li>
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Cookie policy</li>
                                <li>Disclaimer</li>
                                <li>Terms & condition</li>
                            </ul>
                        </div>
                        <div class="w-full">
                            <p class="font-[600] pb-5">Product</p>
                            <ul class="font-[100] text-[12px] leading-[2.5]">
                                <li>Pricing</li>
                                <li>Connections</li>
                                <li>iOS & Android</li>
                                <li>How it works</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex justify-between gap-20 w-full">
                        <div class="w-full">
                            <p class="font-[600] pb-5">Resources</p>
                            <ul class="font-[100] text-[12px] leading-[2.5]">
                                <li>Blog</li>
                                <li>Contact us</li>
                                <li>Documentation</li>
                                <li>Partners</li>
                                <li>News & Press</li>
                            </ul>
                        </div>
                        <div class="w-full">
                            <p class="font-[600] pb-5">Community</p>
                            <ul class="font-[100] text-[12px] leading-[2.5]">
                                <li>Guidelines</li>
                                <li>Leaderboards</li>
                                <li>Request a feature</li>
                                <li>Report a bug</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="mt-10 max-md:mt-5 pb-10 flex max-md:flex-col justify-between">
                <div class="text-[12px] w-full">
                    <p>© 2023 ChallengeHub. All rights reserved.</p>
                </div>
                
                <div class="flex gap-1 justify-end max-md:justify-start text-[12px] w-full">
                    <p>
                        <a href='/cookies'>Cookies |</a>
                        <a href='/policies'>Policies |</a>
                        <a href='/terms-and-condition'>Terms & conditions |</a>
                        <a href='/privacy-policy'>Privacy Policy</a></p>
                </div>
            </div>
        </div>
    </div>
</footer>