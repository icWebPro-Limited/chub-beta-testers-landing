<script>
    import { faLinkedin, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import "../assets/css/footer.css";
    import ChubLogo from "../assets/img/wLogo_white.png";
    import swal from 'sweetalert';
    
    let email = '';
    let fullname = '';
    
    function refreshPage(){
        window.location.reload();
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        // Handle form submission here, like sending the email and full name value to a server
        
        try {
            // Assuming API endpoint is '/web/submit-signup'
            const response = await fetch('/web/submit-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, fullname }),
            });

            if (response.ok) {
                // Handle success
                swal({
                    title: "Form Submitted",
                    text: "Thank you for completing the form, we'll get back to you shortly.",
                    icon: "success",
                    button: "Okay",
                });
            } else {
                // Handle error
                swal({
                    title: "Submit failed",
                    text: "An error has occurred. Please try again.",
                    icon: "fail",
                    button: "Okay",
                });
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
            swal({
                    title: "Server Error",
                    text: "We encountered an error while trying to submit your form. Please try again.",
                    icon: "fail",
                    button: "Okay",
                });
        }
    }
    
    
</script>

<footer class="w-full">
    <div class="mb-10 opacity-0">Footer</div>
    <div id="footer-layer" class="">
        
        <div class="justify-center mx-20 max-lg:mx-5">
            
            <!-- Connect -->
            <!-- <form class="w-full flex justify-center pb-[50px] max-md:pb-[50px] border-solid border-b-white" on:submit={handleSubmit}>
                
                <div class="flex justify-between items-center w-full max-md:flex-col">
                    
                    <div class="w-[60%]">
                        <h1 class="w-full max-lg:text-[30px] lg:mt-10 max-md:mx-5 max-md:leading-[1.2] md:w-full text-[88px] leading-[1] text-white"> Want to stay connected?</h1>
                    </div>
                    
                    <div class="w-[40%] flex flex-col gap-5">
                        <div>
                            <input type="text" bind:value={fullname} name=fullname id=fullname placeholder="Full Name">
                        </div>
                        <div class="w-full max-md:mt-5 flex gap-3 relative">
                            <input type="email" bind:value={email} placeholder="Email Address">
                            <button type="submit" class="absolute right-3 top-2 buttons footer-button duration-200"> Submit</button>
                        </div>
                    </div>
                    
                </div>
            </form> -->
            
            <!-- Links -->
            <div class="max-md:pb-[50px] pb-[50px] border-b-[1px] border-solid border-b-white">
                <div class="mt-20 max-md:mt-10 max-md:block flex justify-between">
                    <div class="w-full">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <img on:click={refreshPage} class="bg-transparent w-[9rem] md:w-[14rem] ml-[-10px]" src={ChubLogo} alt='CHUB logo'>
                        <!-- <p class="text-[0.4rem] lg:text-[12px]">Push yourself beyond the limit.</p> -->
                        <p class="text-[0.4rem] lg:text-[12px]">Ready, Set, Grow.</p>
                    </div>
                    
                    <!-- Links list-->
                    
                    <div class="flex items-center justify-end gap-10 w-full max-md:flex-col max-md:mt-10 max-md:gap-[15px]">
                    
                        <a href="https://linkedin.com/thechubapp">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/@thechubapp">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://tiktok.com/@thechubapp">
                            <FontAwesomeIcon icon={faTiktok} size="2x" />
                        </a>
                        <a href="https://instagram.com/@thechubapp">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-center gap-20 mt-5">
                    <a href="/"> Home </a>
                    <a href="#"> Contact Us </a>
                    <a href="#"> Discord </a>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="mt-10 max-md:mt-5 pb-10 flex max-md:flex-col justify-between">
                <div class="text-[12px] w-full">
                    <p>© 2023 CHUB. All rights reserved.</p>
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