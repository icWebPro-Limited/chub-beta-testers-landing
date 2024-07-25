<script>
    import { page } from "$app/stores";
    import ChubLogo from "../assets/img/wLogo_white.png";
    import contents from "../assets/posts/test.json";
    let relatedPosts = [];
    let postId;

    $: postId = $page.url.pathname.split('/')[2];
    // Find the post by postId 
    $: post = contents.find(content => postId == content.id);
    
    // Call findRelatedPosts whenever postId changes
    $: if (postId) {
        relatedPosts = findRelatedPosts(contents, postId);
        console.log(relatedPosts);
    }

    // Function as defined previously
    function findRelatedPosts(posts, currentPostId) {
        const currentPost = posts.find(post => post.id === currentPostId);
        if (!currentPost) return [];

        return posts.filter(post =>
            post.category === currentPost.category && post.id !== currentPostId
        );
    }
</script>

<!-- Title-->
<div class="w-full">
    <section class="grid justify-center p-4 pb-[300px] max-lg:pb-[100px] bg-[#350214] text-center">
        <div class="mt-[200px] max-md:mt-[40px] max-lg:mt-[20px]">
            
            <div class="lg:hidden">
                <a href="/blog" class="w-auto flex justify-center items-center">
                    <img class="my-[24px] bg-transparent w-[150px]" src={ChubLogo} alt='CHUB logo'>
                    <span class="ml-[-5px] text-[12px] font-[600]">Blog</span>
                    
                </a>
            </div>
            <div class="text-center w-full">
                <p class="text-[16px] max-md:text-[12px] w-full">Featured ● {post.date}</p>
                <h1 class="text-[50px] max-md:text-[25px] my-3">{post.title}</h1>
                <div class="flex justify-center gap-2 leading-[1]">
                    <span class="md:text-[14px] text-[12px]">- by {post.author}</span>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1592 15.1667H5.83923C4.57923 15.1667 3.65923 14.64 3.3059 13.7333C2.93923 12.7867 3.27923 11.6133 4.15923 10.82L7.25256 8.00001L4.15923 5.18001C3.27923 4.38668 2.93923 3.21334 3.3059 2.26668C3.65923 1.35334 4.57923 0.833344 5.83923 0.833344H10.1592C11.4192 0.833344 12.3392 1.36001 12.6926 2.26668C13.0592 3.21334 12.7192 4.38668 11.8392 5.18001L8.7459 8.00001L11.8459 10.82C12.7192 11.6133 13.0659 12.7867 12.6992 13.7333C12.3392 14.64 11.4192 15.1667 10.1592 15.1667ZM7.99923 8.67334L4.83256 11.5533C4.27256 12.0667 4.0259 12.8133 4.23923 13.3667C4.43923 13.88 5.0059 14.1667 5.83923 14.1667H10.1592C10.9926 14.1667 11.5592 13.8867 11.7592 13.3667C11.9726 12.8133 11.7326 12.0667 11.1659 11.5533L7.99923 8.67334ZM5.83923 1.83334C5.0059 1.83334 4.43923 2.11334 4.23923 2.63334C4.0259 3.18668 4.2659 3.93334 4.83256 4.44668L7.99923 7.32668L11.1659 4.44668C11.7259 3.93334 11.9726 3.18668 11.7592 2.63334C11.5592 2.12001 10.9926 1.83334 10.1592 1.83334H5.83923Z" fill="#F0F0F0"/>
                    </svg>
                    <span class="md:text-[14px] text-[12px]">{post.timeframe}</span>
                </div>
            </div>
        </div>
    </section>
    
    <div class="relative top-[-70px] lg:top-[-15rem] w-100% flex flex-col justify-center">
        <div class="w-full flex justify-center">
            <img src="{`/blog-images/${post.image}`}" alt="" class="w-[60vw] h-[35rem] max-md:h-[auto] rounded-[10px] bg-[#37043d]">
        </div>
        
        
        <div class="p-10 md:p-20 text-justify text-[14px] flex justify-center w-full">
            <p class="leading-[2] md:w-[70vw] lg:text-[15px]">
                {post.content}
            </p>
        </div>
        
        
        <!-- Other Blog posts-->
        {#if relatedPosts.length > 0}
            <div class="related-posts w-full justify-center flex mt-20 max-md:mt-10">
                
                <div class="w-[70vw] max-md:w-full">
                    <div class="mb-5">
                        <h2 class="text-[2rem] max-md:text-[1.5rem] max-md:text-center">Related Posts</h2>
                    </div>
                    
                    
                    <div class="w-full max-md:flex justify-center">
                        <div class="flex flex-row w-[70vw] gap-5 max-md:w-full max-md:mx-[10px]">
                            {#each relatedPosts as relatedPost}
                                <a href="{`/blog/${relatedPost.id}`}">
                                    <div class="p-8 max-md:p-3 rounded-[15px] border-[1px] border-solid border-[#6c0c6b]">
                                        <p class="mb-[15px] max-md:mb-[10px] max-md:text-[10px] md:text-[12px]">{relatedPost.date}</p>
                                        
                                        <a href="{`/blog/${relatedPost.id}`}" class="w-full bg-[#37043d] h-[200px] max-md:h-[100px]">
                                            <img src="{`/blog-images/${relatedPost.image}`}" alt="" class="w-full h-[200px] max-md:h-[100px] object-cover rounded-[10px] bg-[#37043d] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:opacity-75">
                                        </a>
                                        <h1 class="text-[2rem] font-[600] md:text-[1rem] max-lg:text-[20px] max-md:text-[12px] mt-5"> {relatedPost.title}</h1>
                                        <p class="font-[100] max-md:hidden max-lg:text-[0.7rem]">{relatedPost.summary}</p>
                                        
                                        <div class="block lg:flex justify-between items-center mt-10 max-lg:mt-3">
                                            <div class="flex gap-2 max-md:gap-1 leading-[1]">
                                                <span class="text-[10px] lg:text-[14px]">{relatedPost.author}</span>
                                                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.1592 15.1667H5.83923C4.57923 15.1667 3.65923 14.64 3.3059 13.7333C2.93923 12.7867 3.27923 11.6133 4.15923 10.82L7.25256 8.00001L4.15923 5.18001C3.27923 4.38668 2.93923 3.21334 3.3059 2.26668C3.65923 1.35334 4.57923 0.833344 5.83923 0.833344H10.1592C11.4192 0.833344 12.3392 1.36001 12.6926 2.26668C13.0592 3.21334 12.7192 4.38668 11.8392 5.18001L8.7459 8.00001L11.8459 10.82C12.7192 11.6133 13.0659 12.7867 12.6992 13.7333C12.3392 14.64 11.4192 15.1667 10.1592 15.1667ZM7.99923 8.67334L4.83256 11.5533C4.27256 12.0667 4.0259 12.8133 4.23923 13.3667C4.43923 13.88 5.0059 14.1667 5.83923 14.1667H10.1592C10.9926 14.1667 11.5592 13.8867 11.7592 13.3667C11.9726 12.8133 11.7326 12.0667 11.1659 11.5533L7.99923 8.67334ZM5.83923 1.83334C5.0059 1.83334 4.43923 2.11334 4.23923 2.63334C4.0259 3.18668 4.2659 3.93334 4.83256 4.44668L7.99923 7.32668L11.1659 4.44668C11.7259 3.93334 11.9726 3.18668 11.7592 2.63334C11.5592 2.12001 10.9926 1.83334 10.1592 1.83334H5.83923Z" fill="#F0F0F0"/>
                                                </svg>
                                                <span class="text-[10px] lg:text-[14px]">{relatedPost.timeframe}</span>
                                            </div>
                                            
                                            <div class="text-[#FA7A3F] max-lg:text-[10px] max-md:mt-[10px]">
                                                {relatedPost.category}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                
                            {/each}
                        </div>
                    </div>
                </div>
                
                
            </div>
        {:else}
            <p>No related posts found.</p>
        {/if}
    </div>
    
</div>

<div class="mb-[50px]">
    <!-- Blog list -->
</div>