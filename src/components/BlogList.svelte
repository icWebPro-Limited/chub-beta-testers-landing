<script>
    import contents from "../assets/posts/test.json";
    //console.log(contents);
    // Check if there's any non-empty content
    let hasContent = contents.some(content => content !== '');
    let itemsToShow = 6; // Start with 10 blog post.
</script>

{#if hasContent}
    <div class="grid grid-cols-2 gap-5 my-[100px] lg:mx-[200px] max-md:mx-[10px] mx-[40px]">
        {#each [...contents].reverse().slice(0, itemsToShow) as content (content.id)}
            <div class="p-8 max-md:p-3 rounded-[15px] border-[1px] border-solid border-[#6c0c6b]">
                <p class="mb-[20px] max-md:mb-[10px] max-md:text-[12px]">{content.date}</p>
                
                <a href="{`blog/${content.id}`}" class="w-full bg-[#37043d] h-[200px] max-md:h-[100px]">
                    <img src="{`blog-images/${content.image}`}" alt="" class="w-full h-[200px] max-md:h-[100px] object-cover rounded-[10px] bg-[#37043d] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:opacity-75">
                </a>
                <h1 class="text-[50px] max-lg:text-[20px] max-md:text-[15px] mt-5"> {content.title}</h1>
                <p class="font-[100] max-lg:text-[0.7rem]">{content.summary}</p>
                
                <div class="max-md:block flex justify-between items-center mt-10 max-lg:mt-3">
                    <div class="flex gap-2 leading-[1]">
                        <span class="max-lg:text-[14px]">{content.author}</span>
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1592 15.1667H5.83923C4.57923 15.1667 3.65923 14.64 3.3059 13.7333C2.93923 12.7867 3.27923 11.6133 4.15923 10.82L7.25256 8.00001L4.15923 5.18001C3.27923 4.38668 2.93923 3.21334 3.3059 2.26668C3.65923 1.35334 4.57923 0.833344 5.83923 0.833344H10.1592C11.4192 0.833344 12.3392 1.36001 12.6926 2.26668C13.0592 3.21334 12.7192 4.38668 11.8392 5.18001L8.7459 8.00001L11.8459 10.82C12.7192 11.6133 13.0659 12.7867 12.6992 13.7333C12.3392 14.64 11.4192 15.1667 10.1592 15.1667ZM7.99923 8.67334L4.83256 11.5533C4.27256 12.0667 4.0259 12.8133 4.23923 13.3667C4.43923 13.88 5.0059 14.1667 5.83923 14.1667H10.1592C10.9926 14.1667 11.5592 13.8867 11.7592 13.3667C11.9726 12.8133 11.7326 12.0667 11.1659 11.5533L7.99923 8.67334ZM5.83923 1.83334C5.0059 1.83334 4.43923 2.11334 4.23923 2.63334C4.0259 3.18668 4.2659 3.93334 4.83256 4.44668L7.99923 7.32668L11.1659 4.44668C11.7259 3.93334 11.9726 3.18668 11.7592 2.63334C11.5592 2.12001 10.9926 1.83334 10.1592 1.83334H5.83923Z" fill="#F0F0F0"/>
                        </svg>
                        <span class="max-lg:text-[14px]">{content.timeframe}</span>
                    </div>
                    
                    <div class="text-[#FA7A3F] max-lg:text-[10px] max-md:mt-[10px]">
                        {content.category}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {#if itemsToShow < contents.length}
        <div class="flex justify-center">
            <button on:click={() => itemsToShow += 6} class="mt-4 flex items-center gap-3 p-4 bg-transparent text-white border-solid border-[1px] border-[#6F6F6F] rounded-full">Show More <span>⇲</span></button>
        </div>
    {/if}
{:else}
    <p class="text-left text-[20px]">No content here... for now.</p>
{/if}