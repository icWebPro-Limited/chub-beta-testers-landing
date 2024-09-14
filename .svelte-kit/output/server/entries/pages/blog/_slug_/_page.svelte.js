import { c as create_ssr_component, g as subscribe, d as add_attribute, i as escape, j as each, v as validate_component } from "../../../../chunks/ssr.js";
import { c as contents, H as HeaderBlog } from "../../../../chunks/test.js";
import { p as page } from "../../../../chunks/stores.js";
import { C as ChubLogo } from "../../../../chunks/wLogo_white.js";
const BlogPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let post;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let relatedPosts = [];
  let postId;
  function findRelatedPosts(posts, currentPostId) {
    const currentPost = posts.find((post2) => post2.id === currentPostId);
    if (!currentPost)
      return [];
    return posts.filter((post2) => post2.category === currentPost.category && post2.id !== currentPostId);
  }
  postId = $page.url.pathname.split("/")[2];
  post = contents.find((content) => postId == content.id);
  {
    if (postId) {
      relatedPosts = findRelatedPosts(contents, postId);
      console.log(relatedPosts);
    }
  }
  $$unsubscribe_page();
  return ` <div class="w-full"><section class="grid justify-center p-4 pb-[300px] max-lg:pb-[100px] bg-[#350214] text-center"><div class="mt-[200px] max-md:mt-[40px] max-lg:mt-[20px]"><div class="lg:hidden" data-svelte-h="svelte-1lgsvp6"><a href="/blog" class="w-auto flex justify-center items-center"><img class="my-[24px] bg-transparent w-[150px]"${add_attribute("src", ChubLogo, 0)} alt="CHUB logo"> <span class="ml-[-5px] text-[12px] font-[600]">Blog</span></a></div> <div class="text-center w-full"><p class="text-[16px] max-md:text-[12px] w-full">Featured ● ${escape(post.date)}</p> <h1 class="text-[50px] max-md:text-[25px] my-3">${escape(post.title)}</h1> <div class="flex justify-center gap-2 leading-[1]"><span class="md:text-[14px] text-[12px]">- by ${escape(post.author)}</span> <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1592 15.1667H5.83923C4.57923 15.1667 3.65923 14.64 3.3059 13.7333C2.93923 12.7867 3.27923 11.6133 4.15923 10.82L7.25256 8.00001L4.15923 5.18001C3.27923 4.38668 2.93923 3.21334 3.3059 2.26668C3.65923 1.35334 4.57923 0.833344 5.83923 0.833344H10.1592C11.4192 0.833344 12.3392 1.36001 12.6926 2.26668C13.0592 3.21334 12.7192 4.38668 11.8392 5.18001L8.7459 8.00001L11.8459 10.82C12.7192 11.6133 13.0659 12.7867 12.6992 13.7333C12.3392 14.64 11.4192 15.1667 10.1592 15.1667ZM7.99923 8.67334L4.83256 11.5533C4.27256 12.0667 4.0259 12.8133 4.23923 13.3667C4.43923 13.88 5.0059 14.1667 5.83923 14.1667H10.1592C10.9926 14.1667 11.5592 13.8867 11.7592 13.3667C11.9726 12.8133 11.7326 12.0667 11.1659 11.5533L7.99923 8.67334ZM5.83923 1.83334C5.0059 1.83334 4.43923 2.11334 4.23923 2.63334C4.0259 3.18668 4.2659 3.93334 4.83256 4.44668L7.99923 7.32668L11.1659 4.44668C11.7259 3.93334 11.9726 3.18668 11.7592 2.63334C11.5592 2.12001 10.9926 1.83334 10.1592 1.83334H5.83923Z" fill="#F0F0F0"></path></svg> <span class="md:text-[14px] text-[12px]">${escape(post.timeframe)}</span></div></div></div></section> <div class="relative top-[-70px] lg:top-[-15rem] w-100% flex flex-col justify-center"><div class="w-full flex justify-center"><img${add_attribute("src", `/blog-images/${post.image}`, 0)} alt="" class="w-[60vw] h-[35rem] max-md:h-[auto] rounded-[10px] bg-[#37043d]"></div> <div class="p-10 md:p-20 text-justify text-[14px] flex justify-center w-full"><p class="leading-[2] md:w-[70vw] lg:text-[15px]">${escape(post.content)}</p></div>  ${relatedPosts.length > 0 ? `<div class="related-posts w-full justify-center flex mt-20 max-md:mt-10"><div class="w-[70vw] max-md:w-full"><div class="mb-5" data-svelte-h="svelte-jp1j9j"><h2 class="text-[2rem] max-md:text-[1.5rem] max-md:text-center">Related Posts</h2></div> <div class="w-full max-md:flex justify-center"><div class="flex flex-row w-[70vw] gap-5 max-md:w-full max-md:mx-[10px]">${each(relatedPosts, (relatedPost) => {
    return `<a${add_attribute("href", `/blog/${relatedPost.id}`, 0)}><div class="p-8 max-md:p-3 rounded-[15px] border-[1px] border-solid border-[#6c0c6b]"><p class="mb-[15px] max-md:mb-[10px] max-md:text-[10px] md:text-[12px]">${escape(relatedPost.date)}</p> <a${add_attribute("href", `/blog/${relatedPost.id}`, 0)} class="w-full bg-[#37043d] h-[200px] max-md:h-[100px]"><img${add_attribute("src", `/blog-images/${relatedPost.image}`, 0)} alt="" class="w-full h-[200px] max-md:h-[100px] object-cover rounded-[10px] bg-[#37043d] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:opacity-75"></a> <h1 class="text-[2rem] font-[600] md:text-[1rem] max-lg:text-[20px] max-md:text-[12px] mt-5">${escape(relatedPost.title)}</h1> <p class="font-[100] max-md:hidden max-lg:text-[0.7rem]">${escape(relatedPost.summary)}</p> <div class="block lg:flex justify-between items-center mt-10 max-lg:mt-3"><div class="flex gap-2 max-md:gap-1 leading-[1]"><span class="text-[10px] lg:text-[14px]">${escape(relatedPost.author)}</span> <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1592 15.1667H5.83923C4.57923 15.1667 3.65923 14.64 3.3059 13.7333C2.93923 12.7867 3.27923 11.6133 4.15923 10.82L7.25256 8.00001L4.15923 5.18001C3.27923 4.38668 2.93923 3.21334 3.3059 2.26668C3.65923 1.35334 4.57923 0.833344 5.83923 0.833344H10.1592C11.4192 0.833344 12.3392 1.36001 12.6926 2.26668C13.0592 3.21334 12.7192 4.38668 11.8392 5.18001L8.7459 8.00001L11.8459 10.82C12.7192 11.6133 13.0659 12.7867 12.6992 13.7333C12.3392 14.64 11.4192 15.1667 10.1592 15.1667ZM7.99923 8.67334L4.83256 11.5533C4.27256 12.0667 4.0259 12.8133 4.23923 13.3667C4.43923 13.88 5.0059 14.1667 5.83923 14.1667H10.1592C10.9926 14.1667 11.5592 13.8867 11.7592 13.3667C11.9726 12.8133 11.7326 12.0667 11.1659 11.5533L7.99923 8.67334ZM5.83923 1.83334C5.0059 1.83334 4.43923 2.11334 4.23923 2.63334C4.0259 3.18668 4.2659 3.93334 4.83256 4.44668L7.99923 7.32668L11.1659 4.44668C11.7259 3.93334 11.9726 3.18668 11.7592 2.63334C11.5592 2.12001 10.9926 1.83334 10.1592 1.83334H5.83923Z" fill="#F0F0F0"></path></svg> <span class="text-[10px] lg:text-[14px]">${escape(relatedPost.timeframe)}</span></div> <div class="text-[#FA7A3F] max-lg:text-[10px] max-md:mt-[10px]">${escape(relatedPost.category)}</div> </div></div> </a>`;
  })}</div></div></div></div>` : `<p data-svelte-h="svelte-x14bzv">No related posts found.</p>`}</div></div> <div class="mb-[50px]" data-svelte-h="svelte-16cxc1z"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(HeaderBlog, "HeaderBlog").$$render($$result, {}, {}, {})} ${validate_component(BlogPost, "BlogPost").$$render($$result, {}, {}, {})}</main> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Page as default
};
