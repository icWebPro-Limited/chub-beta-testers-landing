import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
import "sweetalert2";
const Saly = "/v2/_app/immutable/assets/79869.tHTgMaom.png";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <section class="flex justify-center bg-[#37083c]" data-svelte-h="svelte-14ha0zk"><div class="my-[5vh] justify-center grid"><div class="justify-center flex"><img${add_attribute("src", Saly, 0)} class="w-[1000px]"></div> <h1 class="max-md:text-[35px] max-md:leading-[1.2] text-[70px] mt-[10px] max-md:mt-[30px] font-[900] leading-[100px] text-center dela-gothic-one-regular">Error 404!</h1> <h1 class="max-md:text-[15px] max-md:leading-[1.2] text-[20px] mt-[10px] max-md:mt-[30px] font-[500] leading-[100px] text-center dela-gothic-one-regular">Oops! We&#39;ve not built this page yet!</h1></div></section>`;
});
export {
  Error as default
};
